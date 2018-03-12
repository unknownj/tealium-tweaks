var http = require('http');
var fs = require('fs');

var code = fs.readFileSync('./api.js');

var encode64 = function(input){ return Buffer.from(input).toString('base64'); };
var decode64 = function(input){ return Buffer.from(input,'base64'); };

http.createServer(function (req, res) {
  if(req.url.indexOf("/save/") == 0){
    var parts = req.url.split("/");
    fs.writeFile("ext" + parts[2] + ".js",decode64(parts[3]));
    res.write('console.log("Saved extension ' + parts[2] + '");');
    res.end();
  } else if(req.url.indexOf("/load/") == 0){
    var parts = req.url.split("/");
    var fn = "ext" + parts[2] + ".js";
    var content = encode64(fs.readFileSync(fn));
    res.write('// retrieving ' + fn + '\nutui.data.customizations[' + parts[2] + '].code = atob("' + content + 
'");');
    res.end(); //end the response
  }
}).listen(8080);
