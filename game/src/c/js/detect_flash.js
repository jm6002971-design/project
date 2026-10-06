var haveflash=false;var f5I=false;var f6I=false;
var isIE=(navigator.appVersion.indexOf("MSIE")!=-1)?true:false;
var isMac=(navigator.appVersion.indexOf("Mac")!=-1)?true:false;
if(isIE&&!isMac){
 document.write('<SCRIPT LANGUAGE=VBScript\> \n');
 document.write('on error resume next \n');
 document.write('f5I=(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.5"))) \n'); 
 document.write('f6I=(IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.6"))) \n'); 
 document.write('</SCR'+'IPT\> \n');
 if(f5I)flashVersion=5;
 if(f6I)flashVersion=6;
 if(f5I||f6I)haveflash=true;
}
if(navigator.plugins){                               
 if (navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]){
  var isVersion2=navigator.plugins["Shockwave Flash 2.0"] ? " 2.0" : "";
  var flashDescription=navigator.plugins["Shockwave Flash" + isVersion2].description;
  var dotPos = flashDescription.indexOf(".");
  var spacePos = flashDescription.lastIndexOf(" ", dotPos);
  var flashVersion=parseInt(flashDescription.substring(spacePos + 1, dotPos));
  if(flashVersion>=5)haveflash=true;
 }
}

function gotoDfCashier(action){
	createCookie("DF_AUTO_LOGIN", "1", "1");
    window.location.href = "/cashier/dfcashier?action=" + action;
    //window.open("/cashier/dfcashier?action=" + action);
}