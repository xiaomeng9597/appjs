(function(){
try{
Apk_appVersion="1.0.1";
Apk_dateTime="2022-07-12";
Apk_content="修复部分已知Bug，“使用教程” 在软件右上角，里面有软件的使用方法。";
/*Apk_content2="修复部分已知Bug，重新下载并且安装后此弹窗不在提示，本次属于强制更新，当前软件已上架至 “酷安市场” 酷安上搜索 “Post提交工具” 就能找到这个软件。";*/
Apk_downurl="https://note.youdao.com/yws/api/personal/file/dd93d93b97248adc3fbb9bcc459e9693?method=download&shareKey=b18e2e786a99df4574521c2beff33033&inline=true";
Apk_downurl2="https://note.youdao.com/yws/api/personal/file/dd93d93b97248adc3fbb9bcc459e9693?method=download&shareKey=b18e2e786a99df4574521c2beff33033&inline=true";
}catch(e){};
})();



try{
/*主更新*/
if(Apk_appVersion && api.appVersion < Apk_appVersion){
api.confirm({
    title: "软件有新版本",
    msg: "最新版本："+Apk_appVersion+"\n更新日期："+Apk_dateTime+"\n更新内容："+Apk_content,
    buttons: ["取消","","立即更新"]
}, function(ret, err) {
var index = ret.buttonIndex;
if(index==3){




/*下载代码*/
var fs = api.require("fs");
fs.rmdir({
    path: "fs://downloadApp"
}, function(ret, err) {
    if (ret.status == true) {
        api.download({
            url: Apk_downurl2,
            savePath: "fs://downloadApp/" + "UpdateApp.apk",
            report: true,
            cache: true,
            allowResume: true
        }, function(ret, err) {
            if (ret && ret.state == 0) {

                try {
                    if (ret.percent) {
                        api.showProgress({
                            title: "下载中↡↡↡",
                            text: ret.percent + "%",
                            modal: true
                        });
                    }
                } catch (e) {};

            } else if (ret && ret.state == 1) {
                api.hideProgress();
                api.toast({
                    msg: "下载文件成功！",
                    duration: 2000,
                    location: "middle"
                });

                try {
                    var savePath = ret.savePath;
                    api.installApp({
                        appUri: savePath
                    });
                } catch (e) {};

            } else if (ret && ret.state == 2) {
                api.hideProgress();
                api.toast({
                    msg: "下载文件失败！",
                    duration: 2000,
                    location: "middle"
                });
                api.openApp({
                    androidPkg: "android.intent.action.VIEW",
                    mimeType: "text/html",
                    uri: Apk_downurl
                }, function(ret, err) {
                });
            }
        });
        api.hideProgress();
    } else {
        var timestring = String(+new Date()).substr(0, 10);
        api.download({
            url: Apk_downurl2,
            savePath: "fs://downloadApp/" + timestring + ".apk",
            report: true,
            cache: true,
            allowResume: true
        }, function(ret, err) {
            if (ret && ret.state == 0) {

                try {
                    if (ret.percent) {
                        api.showProgress({
                            title: "下载中↡↡↡",
                            text: ret.percent + "%",
                            modal: true
                        });
                    }
                } catch (e) {};

            } else if (ret && ret.state == 1) {
                api.hideProgress();
                api.toast({
                    msg: "下载文件成功！",
                    duration: 2000,
                    location: "middle"
                });

                try {
                    var savePath = ret.savePath;
                    api.installApp({
                        appUri: savePath
                    });
                } catch (e) {};

            } else if (ret && ret.state == 2) {
                api.hideProgress();
                api.toast({
                    msg: "下载文件失败！",
                    duration: 2000,
                    location: "middle"
                });
                api.openApp({
                    androidPkg: "android.intent.action.VIEW",
                    mimeType: "text/html",
                    uri: Apk_downurl
                }, function(ret, err) {
                });
            }
        });
        api.hideProgress();
    }
});
/*下载代码*/




}

});


}else{
api.toast({msg: "欢迎使用本软件！",duration: 4000,location: "middle"});
};
}catch(e){};









function delid(val) {
    try {
       var db = api.require("db");
        var ret = db.executeSqlSync({
            name: "app",
            sql: "delete from uesr where id = '" + val + "'"
        });
    } catch(e) {};
    $(this).parents("tr").hide();
}


(function(){
try{
var disnew = 0;
disnew = disnew + 1;
var db = api.require("db");
var ret = db.selectSqlSync({
    name: "app",
    sql: "select * from uesr"
});
  if(ret.status){
    len = ret.data.length;
    if(len > 200){
    $.each(ret.data.reverse(),
    function(i) {
    if(ret.data[i].url2 && i > 150){
     delid(ret.data[i].id);
      if(len == i+1){
    api.toast({msg: "已清理超过150条历史记录(成功)，保留最新150条历史记录，此功能由远程JS代码执行，软件必须联网。",duration:3000,location: "middle"});
            }
        }
    })
 }
}
}catch(e){};
})();







function qq(){
try{
alert("开发者QQ 519561910，有软件问题请加这个QQ号！");
}catch(e){};

/*
try{
api.openApp({
    uri: "mqqwpa://im/chat?chat_type=wpa&uin=519561910&version=1&src_type=web"
}, function(ret, err) {
    if (ret) {
    } else {
     alert("QQ没有安装！");
    }
});
}catch(e){
alert("无法跳转到QQ聊天窗口！");
};
*/

}



function feedback() {
    api.openWin({
        name: "postweb",
        url: "https://support.qq.com/product/340122",
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
};



function loadScript(){
try{
var div_button=document.createElement("div");
div_button.id="div_button";
div_button.style="position:fixed;bottom:10px; right:10px;";
document.documentElement.appendChild(div_button);
var div_button2=document.createElement("div");
div_button2.id="div_button2";
/*div_button2.style="position:fixed;bottom:5px; right:130px;";*/
div_button2.style="position:fixed;bottom:5px; right:170px;";
document.documentElement.appendChild(div_button2);


/*反馈按钮*/
var div_feedback=document.createElement("div");
div_feedback.id="tost";
div_feedback.style="position:fixed;bottom:10px; right:128px;";
document.documentElement.appendChild(div_feedback);
$("#tost").append('<div style="display:block;width:100%;height:100%;"><button type="button" style="font-size:15px;" onClick="feedback()">反馈</button></div>');
/*反馈按钮*/



/*$("#div_button").append('<div style="display:block;width:100%;height:100%;"><button type="button" style="font-size:15px;" onClick="web_post()">点击进入网页版</button></div>');*/
$("#div_button").append('<div style="display:block;width:100%;height:100%;"><button type="button" style="font-size:15px;" onClick="web_post2()">点击进入网页版</button></div>');
$("#div_button2").append('<p><a target="_blank" href="javascript:;" onClick="qq()"><img border="0" src="https://xiaomeng9597.github.io/appjs/button.jpg" alt="点击这里给我发消息" title="点击这里给我发消息"></a></p>');



var div_iframe=document.createElement("div");
div_iframe.id="div_iframe";
div_iframe.style="display:none;background-color:#ffffff;position:fixed; bottom:-35px; width:100%;height:100%;z-index:10;";
document.documentElement.appendChild(div_iframe);
/*$("#div_iframe").append('<iframe id="set_iframe" sandbox="allow-same-origin allow-scripts allow-forms" src="" width="100%" height="100%" frameborder="0" ></iframe>');*/
$("#div_iframe").append('<iframe id="set_iframe" src="" width="100%" height="100%" frameborder="0" ></iframe>');
}catch(e){};
}
loadScript();



function web_post(){
try{
$("#div_iframe").css("display","block");
$("#div_button").css("display","none");
$("#id1").css("display","none");
$(".top2").html('<a href="javascript:$(\'#div_iframe\').css(\'display\',\'none\');$(\'#div_button\').css(\'display\',\'block\');closeFrame();">关闭网页版</a>');
$("#set_iframe").attr("src","http://thxg123.iappxc.club/post/");
api.toast({msg: "欢迎使用，官方开发的网页版！",duration: 2000,location: "middle"});
}catch(e){};
};



function web_post2(){

api.openFrame({
name : "postweb",
url : "https://xiaomeng9597.github.io/httppost/",
bgColor: "#ffffff",
bounces: false,
allowEdit: true,
scaleEnabled: true,
rect : {
    x : 0,
    y : 24,
    w : "auto",
    h : api.winHeight-60
 }
});



$("#div_button").empty("");
$("#div_button").append('<div style="display:block;width:100%;height:100%;"><button type="button" style="font-size:15px;" onClick="closeFrame2()">点击关闭网页版</button></div>');
api.toast({msg: "欢迎使用，官方开发的网页版！",duration: 2000,location: "middle"});

};



function closeFrame(){
try{
$("#id1").css("display","block");
$('.top2').html('<a href="javascript:faq();">使用教程</a>');
}catch(e){};
};



function closeFrame2(){

api.closeFrame({
    name: "postweb"
});

$("#div_button").empty("");
$("#div_button").append('<div style="display:block;width:100%;height:100%;"><button type="button" style="font-size:15px;" onClick="web_post2()">点击进入网页版</button></div>');

}







try{ajaxget("https://xiaomeng9597.github.io/appjs/code.js?r="+Math.random(),function(ret){api.execScript({name:"root",frameName:"main",script:ret})},"text");}catch(err){};



/*
$.getScript("https://xiaomeng9597.github.io/appjs/eruda.min.js",function(){
eruda.init();
});
*/
