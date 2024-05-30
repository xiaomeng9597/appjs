apiready = function() {
};


try{
fileBrowser = api.require("fileBrowser");
fileBrowser.skin({
    skin:1,
    color:{
      bgColor:"#454E60", /*（可选项）字符串类型；每行的背景颜色，支持 rgb，rgba，#；默认："#fff"*/
      titleColor:"#FFFFFF", /*（可选项）字符串类型；每行的标题颜色，支持 rgb，rgba，#；默认："#fff"*/
      subtitleColor:"", /*（可选项）字符串类型；每行的副标题颜色，支持 rgb，rgba，#；默认："#fff"*/
      timeColor:"", /*（可选项）字符串类型；每行的时间颜色，支持 rgb，rgba，#；默认："#fff"*/
      lineColor:"", /*（可选项）字符串类型；每行的分割线颜色，支持 rgb，rgba，#；默认："#fff"*/
    }
});
}catch(e){};


function string_replace(val) {
    try {
        var val = getnull(val).replace(/[\n]{1,}/gi, "\n");
        var val = getnull(val).replace(/(^\s*)|(\s*$)/g, "");
        return val;
    } catch (e) {
        return val;
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


function ajaxget(surl, callback, type) {
	var json = {};
	json.url = surl;
	json.method = "get";
	json.cache = false;
	if (type == "text" || type == "json") {
		json.dataType = type;
	} else {
		json.dataType = "text";
	}
	if (surl) {
		json.headers = {
			"Referer": surl
		};
	}
	api.ajax(json, function(ret, err) {
		if (ret.body) {
			callback && callback(ret.body);
		} else if (err.body) {
			callback && callback(err.body);
		} else {
			callback && callback(ret);
		}
	})
};


function jumpok() {
    var getbody = getnull($("#jsbody").text()).replace(/(^\s*)|(\s*$)/g,"");
    if (getbody) {
        try {
            api.removePrefs({
                key: "jsbody"
            });
            api.setPrefs({
                key: "jsbody",
                value: getbody
            });
             } catch (e) {};
        /*跳转页面*/
        try {
        api.openWin({
            name: "postweb2",
            url: "fs://htmlcode/jump_url.html",
            bgColor: "#ffffff",
            bounces: false,
            allowEdit: true,
            scaleEnabled: false,
            animation: {
                type: "movein",
                subType: "from_right",
                duration: 150
            }
        });
           } catch (e) {};
        /*跳转页面*/
        js_close();
    } else {
        api.toast({
            msg: "Body结果显示框无内容，跳转页面失败！",
            duration: 2000,
            location: "middle"
        });
        js_close();
    }
    js_close();
};



try{
$(".go").html('<div class="post-html" id="post-html"><div class="getcookie" onclick="cookie2();">复制Cookie</div><div class="post-datadiv" id="post-datadiv">Body结果</div></div><div id="jsbody"></div><div class="app_close" id="app_close"><div style="width:50%;float:left;background-color:#f9f9f9;border-bottom-left-radius:5px;border-right:1px solid #eeeeee;" onclick="jumpok()">查看Text结果</div><div style="width:50%;float:left;background-color:#f9f9f9;border-bottom-right-radius:5px;" onclick="js_close();">关闭</div></div>');
}catch(err){};





try{
ajaxget("https://xiaomeng9597.github.io/appjs/app_config.js?r="+Math.random(),function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text");
}catch(err){};



try{
ajaxget("https://gitee.com/qsth520/appjs/releases/download/staticpages/app.json?r="+Math.random(),function(ret){

if(ret.status){
try{ajaxget("https://gitee.com/qsth520/appjs/releases/download/staticpages/pages.js?r="+Math.random(),function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text");}catch(err){};
}else{
try{ajaxget("https://jihulab.com/xiaomeng9597/appjs/-/raw/master/staticpages/pages.js?inline=false&r="+Math.random(),function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text");}catch(err){};
}

},"json");
}catch(err){};