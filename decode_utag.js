var b  = document.getElementsByTagName("body")[0].innerHTML;
b.split("utag.handler.cfg_extend")[1].split("utag.loader.initcfg();")[0];
var c = "utag.handler.cfg_extend" + b.split("utag.handler.cfg_extend")[1].split("utag.loader.initcfg();")[0];
var utag = {handler: {}, loader: {}, cond: {}};
eval(c);
utag.loader.initcfg();
console.log("Extensions",utag.handler.cfg_extend);
console.log("Tags",utag.loader.cfg);
