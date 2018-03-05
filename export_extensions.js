var jscode = "";
for(var ext in utui.data.customizations){
  var x = utui.data.customizations[ext];
  if(x.code) jscode += "function ext" + ext + "(a,b){\n" + x.code + "\n}\n\n/* ################ */\n\n";
}
var filename = [
  utui.data.settings.account,
  utui.data.settings.profileid,
  utui.data.settings.revision,
  "extensions"
].join("_") + ".js";
exportFile(jscode,filename);

function exportFile(content, filename){
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
  element.setAttribute('download', filename);
  element.style.display = 'none';
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
