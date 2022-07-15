function trim2(val) {
	if (val == "" || val == null || val == undefined) {
		return "";
	} else {
		try {
			return toString2(val).replace(/(^\s*)|(\s*$)/g, "");
		} catch (e) {
			return val;
		}
	}
};



function jsonxss(val) {
    if (val && typeof2(val) == "string") {
            try {
                var val = val.replace(/\\/gi, '\\\\');
                var val = val.replace(/\"/gi, '\\"');
            } catch (e) {};
        try {
            try {
                if (jccode) {
                    return linebreak(val);
                } else {
                    return HTMLEncode(linebreak(val));
                }
            } catch (e) {
                return HTMLEncode(linebreak(val));
            }
        } catch (e) {
            return val;
        }
    } else {
        return val;
    }
};



function code(){
jccode=123456;

var url=trim2(document.getElementById("url").innerText);
var params=trim2(document.getElementById("params").innerText);
var header=trim2(document.getElementById("header").innerText);
var referer=trim2(document.getElementById("referer").innerText);
var cookie=trim2(document.getElementById("cookie").innerText);
var getua2=trim2(document.getElementById("getua2").innerText);
var getua=trim2(document.getElementById("getua").value);

if(trim2(url)!=""){


if(getua2){
var getua=$api.getStorage("Header_log")+"User-Agent: "+getstring(getua2,"User-Agent",10);
}else if(getua){
var getua=$api.getStorage("Header_log")+"User-Agent: "+getua;
}else{
var getua=$api.getStorage("Header_log")+"User-Agent: Mozilla/5.0 (Linux; Android 6.0.1; OPPO R9s Plus Build/MMB29M; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/55.0.2883.91 Mobile Safari/537.36";
}

if(referer){
var referer=$api.getStorage("Header_log")+"Referer: "+getstring(referer,"Referer",7);
}


if(cookie){
var cookie=$api.getStorage("Header_log")+"Cookie: "+getstring(cookie,"Cookie",6);
}




if(trim2(params)!=""){
if(isJson(json_stringify(params))){


//alert("json");
var contenttype=$api.getStorage("Header_log")+"Content-Type: application/json; charset=UTF-8";
var header=trim2(header)+trim2(contenttype)+trim2(referer)+trim2(cookie)+trim2(getua);


var datastr=params;
var headerstr=httpheader(header);
try{
delete(headerstr["Accept-Encoding"]);
delete(headerstr["accept-encoding"]);
}catch(e){};

if(headerstr && headerstr!="{}"){

var getdm='var url = \"'+linebreak(url).replace(/\"/gi,'\\"')+'\";\nret = http.postJson(url, '+jsonformat(datastr,false)+', {\n    headers: '+JSON.stringify(JSON.parse(jsonformat(headerstr,true)),undefined,'     ')+'\n});\ntoastLog(ret.body.string());';
}else{

var getdm='var url = \"'+linebreak(url).replace(/\"/gi,'\\"')+'\";\nret = http.postJson(url, '+jsonformat(datastr,false)+');\ntoastLog(ret.body.string());';
}







}else{


//alert("post");
if(trim2(httpheader(header)["Content-Type"])!=""){
var contenttype=$api.getStorage("Header_log")+"Content-Type: "+httpheader(header)["Content-Type"];
var header=trim2(header)+trim2(contenttype)+trim2(referer)+trim2(cookie)+trim2(getua);
}else{
var contenttype=$api.getStorage("Header_log")+"Content-Type: application/x-www-form-urlencoded; charset=UTF-8";
var header=trim2(header)+trim2(contenttype)+trim2(referer)+trim2(cookie)+trim2(getua);
}



var datastr=getdata(params)["values"];
var headerstr=httpheader(header);
try{
delete(headerstr["Accept-Encoding"]);
delete(headerstr["accept-encoding"]);
}catch(e){};



if($api.getStorage("Body_log")==1 || trim2(datastr)==""){


if(headerstr && headerstr!="{}"){
var getdm='var url = \"'+linebreak(url).replace(/\"/gi,'\\"')+'\";\nret = http.request(url, {\n    method: \"POST\",\n    contentType: \"'+headerstr["Content-Type"].replace(/\"/gi,'\\"')+'\",\n    body: \"'+linebreak(params).replace(/\"/gi,'\\"')+'\",\n    headers: '+JSON.stringify(JSON.parse(jsonformat(headerstr,true)),undefined,'     ')+'\n});\ntoastLog(ret.body.string());'
}else{
var getdm='var url = \"'+linebreak(url).replace(/\"/gi,'\\"')+'\";\nret = http.request(url, {\n    method: \"POST\",\n    contentType: \"'+headerstr["Content-Type"].replace(/\"/gi,'\\"')+'\",\n    body: \"'+linebreak(params).replace(/\"/gi,'\\"')+'\"\n});\ntoastLog(ret.body.string());'
}


}else{

if(headerstr && headerstr!="{}"){

var getdm='var url = \"'+linebreak(url).replace(/\"/gi,'\\"')+'\";\nret = http.post(url, '+JSON.stringify(JSON.parse(jsonformat(datastr,true)),undefined,'     ')+', {\n    headers: '+JSON.stringify(JSON.parse(jsonformat(headerstr,true)),undefined,'     ')+'\n});\ntoastLog(ret.body.string());';
}else{

var getdm='var url = \"'+linebreak(url).replace(/\"/gi,'\\"')+'\";\nret = http.post(url, '+JSON.stringify(JSON.parse(jsonformat(datastr,true)),undefined,'     ')+');\ntoastLog(ret.body.string());';
}


}

}



}else{


//alert("get");
var contenttype=$api.getStorage("Header_log")+"Content-Type: text/html; charset=UTF-8";
var header=trim2(header)+trim2(contenttype)+trim2(referer)+trim2(cookie)+trim2(getua);
var headerstr=httpheader(header);
try{
delete(headerstr["Accept-Encoding"]);
delete(headerstr["accept-encoding"]);
}catch(e){};

if(headerstr && headerstr!="{}"){

var getdm='var url = \"'+linebreak(url).replace(/\"/gi,'\\"')+'\";\nret = http.get(url, {\n    headers: '+JSON.stringify(JSON.parse(jsonformat(headerstr,true)),undefined,'     ')+'\n});\ntoastLog(ret.body.string());';
}else{

var getdm='var url = \"'+linebreak(url).replace(/\"/gi,'\\"')+'\";\nret = http.get(url);\ntoastLog(ret.body.string());';
}


}

}else{
api.toast({msg: "请先填写请求的Url网址！",duration: 2000,location: "middle"});
}






if(getdm){
var clipBoard = api.require("clipBoard");
clipBoard.set({
      value: getdm
    }, function(ret, err) {
      if (ret) {
        api.toast({
          msg: "复制成功，已复制代码至剪贴板。",
          duration: 3000,
          location: "middle"
        });
      } else {
        api.toast({
          msg: "复制代码失败。",
          duration: 3000,
          location: "middle"
        });
        }
     });
}     




jccode="";
jccode=null;
}








var div_code=document.createElement("div");
div_code.id="code";
div_code.style="position:fixed;bottom:20px; right:20px;";
document.documentElement.appendChild(div_code);
$("#code").append('<div style="display:block;width:100%;height:100%;"><input type="button" value="Auto.js" style="position:fixed;bottom:30px;left:40px;width:50px;height:50px;border-radius:50%;border:none;outline:none;" onClick="code()"></div>');