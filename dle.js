function getDLEKeys(){
  return utag.globals.dle.enrichments;
}

function getDLEData(key){
  var dle = getDLEKeys();
  return dle[key];
}

function getDLEOrigin(key){
  for(var k in utag.data){
    if(utag.data[k] == "string" && utag.data[k] == key) return k;
    if(Array.isArray(utag.data[k])){
      for(var i = 0; i < utag.data[k].length; i++){
        if(typeof utag.data[k][i] == "string" && utag.data[k][i] == key) return k;
      }
    }
  }
  return "Not Found";
}

var dle = getDLEKeys();
var dleList = {};

for(var k in dle){
  dleList[k] = {
    key: k,
    origin: getDLEOrigin(k),
    data: getDLEData(k)
  }
}
console.log(dleList);
