var andSymbol = '&';

(function () {
    var global = this;
    var original = global.console;
    try {
        delete global.console;
    } catch (e) {
    }
    var console = global.console = {};
    console.production = false;

    if (original && !original.time) {
        original.time = function(name, reset) {
            if (!name) return;
            var time = new Date().getTime();
            if (!console.timeCounters) console.timeCounters = {};

            var key = "KEY" + name.toString();
            if (!reset && console.timeCounters[key]) return;
            console.timeCounters[key] = time;
        };

        original.timeEnd = function(name) {
            var time = new Date().getTime();

            if (!console.timeCounters) return;

            var key = "KEY" + name.toString();
            var timeCounter = console.timeCounters[key];

            if (timeCounter) {
                var diff = time - timeCounter;
                var label = name + ": " + diff + "ms";
                console.info(label);
                delete console.timeCounters[key];
            }
            return diff;
        };
    }

    var methods = ['assert', 'count', 'debug', 'dir', 'dirxml', 'error',
        'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline',
        'profile', 'profileEnd', 'table', 'time', 'timeEnd', 'trace', 'warn'];

    for (var i = methods.length; i--;) {
        (function (methodName) {
            console[methodName] = function () {
                if (original && methodName in original && !console.production) {
                    Function.prototype.apply.call(original[methodName],
                            original, arguments);
                }
            };
        })(methods[i]);
    }
})();

//JavaScript'овая реализация request позволяющая работать
// с параметрами незаморачиваясь.
var com = {};
com.intrice = {};
com.intrice.Request = function () {
    this.baseLink = window.location.pathname;
    this.params = new Array();
    this.postParams = {};
    var tempParams = window.location.search.substring(1).split("&");
    var length = tempParams.length;
    for (var i = 0; i < length; i++) {
        if (tempParams[i].length > 0) {
            var paramAr = tempParams[i].split("=");
            this.params[paramAr[0]] = paramAr;
        }
    }
    this.hash = window.location.hash;
};
com.intrice.Request.prototype.getParameter = function (parametrName) {
    var paramAr = this.getParamArray(parametrName);
    return (paramAr) ? paramAr[1] : paramAr;
};
com.intrice.Request.prototype.getParamArray = function (parametrName) {
    return this.params[parametrName];
};
com.intrice.Request.prototype.removeParameter = function (parametrName) {
    delete this.params[parametrName];
};
com.intrice.Request.prototype.setParameter
        = function (parametrName, parametrValue) {
    var paramAr = this.getParamArray(parametrName);
    if (!paramAr) paramAr = new Array();
    paramAr[0] = parametrName;
    paramAr[1] = parametrValue;
    this.params[parametrName] = paramAr;
};
com.intrice.Request.prototype.paramsToStr = function () {
    var result = "";
    for (var param in this.params) {
        if (this.params[param] instanceof Function) {
            continue;
        }
        result += this.params[param][0] + "=" + this.params[param][1] + "&";
    }
    for (param in this.postParams) {
        if (this.postParams[param] != null && this.postParams[param] != '') {
            result += param + "=" + this.postParams[param] + "&";
        }
    }
    return result.substr(0, result.length - 1);
};
com.intrice.Request.prototype.getBaseLink = function () {
    return this.baseLink;
};
com.intrice.Request.prototype.getLink = function () {
    var params = this.paramsToStr();
    return this.baseLink + ((params.length > 0) ? "?" + params : "");
};
com.intrice.Request.prototype.getLinkWithHash = function () {
    return this.getLink() + this.hash;
};
com.intrice.Request.prototype.redirect = function (link) {
    if (link) {
        window.location.replace(link);
    } else {
        window.location.replace(this.getLink());
    }
};
var request = new com.intrice.Request();

//функции работы с куками
function setCookie(name, value, expires, path, domain, secure) {
    var cookie = name + "=" + encodeURIComponent(value) +
            ((expires) ? "; expires=" + expires : "") +
            ((path) ? "; path=" + path : "") +
            ((domain) ? "; domain=" + domain : "") +
            ((secure) ? "; secure" : "");
    console.log(cookie);
    document.cookie = cookie;
}
function getCookie(name) {
    var cookie = "" + document.cookie;
    var pattern = "(?:; )?" + name + "=([^;]*);?";
    var regexp = new RegExp(pattern);
    if (regexp.test(cookie)) {
        return decodeURIComponent(RegExp["$1"]);
    }
    return false;
}

//This prototype is provided by the Mozilla foundation and
//is distributed under the MIT license.
//http://www.ibiblio.org/pub/Linux/LICENSES/mit.license
if (!Array.prototype.filter) {
    Array.prototype.filter = function(fun /*, thisp*/) {
        var len = this.length;
        if (typeof fun != "function")
            throw new TypeError();

        var res = new Array();
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in this) {
                var val = this[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, this))
                    res.push(val);
            }
        }

        return res;
    };
}

//This prototype is provided by the Mozilla foundation and
//is distributed under the MIT license.
//http://www.ibiblio.org/pub/Linux/LICENSES/mit.license

if (!Array.prototype.every) {
    Array.prototype.every = function(fun /*, thisp*/) {
        var len = this.length;
        if (typeof fun != "function")
            throw new TypeError();

        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in this &&
                    !fun.call(thisp, this[i], i, this))
                return false;
        }

        return true;
    };
}

function getParameter(queryString, parameterName) {
    // Add "=" to the parameter name (i.e. parameterName=value)
    parameterName = parameterName + "=";
    if (queryString.length > 0) {
        // Find the beginning of the string
        var begin = queryString.indexOf(parameterName);
        // If the parameter name is not found, skip it, otherwise return the value
        if (begin != -1) {
            // Add the length (integer) to the beginning
            begin += parameterName.length;
            // Multiple parameters are separated by the "&" sign
            var end = queryString.indexOf("&", begin);
            if (end == -1) {
                end = queryString.length;
            }
            // Return the string
            return unescape(queryString.substring(begin, end));
        }
    }
    // Return "null" if no parameter has been found
    return null;
}

function getChildById(obj, idObj) {
    var childs = obj.children;
    var result = null;
    for (var i = 0; i < childs.length; i++) {
        if (childs.item(i).id == idObj)
            return childs.item(i);
        result = getChildById(childs.item(i), idObj);
        if (result) break;
    }
    return result;
}

//стандартная функция смены языка
function changeLang(lang) {
    if (lang != null) {
        setCookie("USER_LANGUAGE", lang.toUpperCase(), "10/01/2077", "/");
        if (getCookie("USER_LANGUAGE") == lang.toUpperCase()) {
            request.removeParameter("LANG");
        } else {
            request.setParameter("LANG", lang);
        }
        request.redirect();
    }
}


function getPersonaliText(text) {
    if (text.length > 15) {
        var txt = text.substring(0, 15) + "...";
        document.write(txt);
    } else {
        document.write(text);
    }
}
function showPeriod(whatPeriod) {
    if (whatPeriod) {
        document.getElementById('calendarForm').PERIODTYPE.value = whatPeriod;
    }
    document.getElementById('calendarForm').page.value = 1;
    submitForm(document.getElementById('calendarForm'));
}

function checkInputType(e, t) {
	if ((e.value == '' || e.value.length <= 1) && e.type == 'text') {
		changeInputType(e, t);
	}
}

var l = new Array('Weak', 'Medium', 'Strong', 'Best', 'Too Short');
function checkPwdStrength(a, outVisual, outText) {
    var lvl = checkPassStrength(a);
    var r = new Array('d8fe1d', 'f7f820', 'ffab10', 'fc5803', '81fe1e');

    var cc = 0;
    if (lvl == 0) {
        cc = 25;
    } else
    if (lvl == 1) {
        cc = 50;
    } else
    if (lvl == 2) {
        cc = 75;
    } else
    if (lvl == 3) {
        cc = 100;
    }
    outVisual.style.background = '#' + r[lvl];
    outVisual.innerHTML = '<div style="background-color: #321; width: ' + cc +
            '%; height: 100%;font-size:1px;">&nbsp;</div>';
    if (outText != null) {
        outText.innerHTML = l[lvl];
    }
    return lvl;
}

function checkPassStrength(a) {
  if (a.length <= 2) {
      return 4;
  }
  var c = 0;
  var lvl = 1;
  if(a.length<5){c=(c+5)}else if(a.length>4&&a.length<8){c=(c+14)}else if(a.length>7&&a.length<16){c=(c+16)}else if(a.length>15){c=(c+23)}
  if(a.match(/[a-z]/)){c=(c+9)}
  if(a.match(/[A-Z]/)){c=(c+10)}
  if(a.match(/\d+/)){c=(c+10)}
  if(a.match(/(.*[0-9].*[0-9].*[0-9])/)){c=(c+10)}
  if(a.match(/.[!,@,#,$,%,^,&,*,?,_,~]/)){c=(c+10)}
  if(a.match(/(.*[!,@,#,$,%,^,&,*,?,_,~].*[!,@,#,$,%,^,&,*,?,_,~])/)){c=(c+10)}
  if(a.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)){c=(c+7)}
  if(a.match(/([a-zA-Z])/)&&a.match(/([0-9])/)){c=(c+7)}
  if(a.match(/([a-zA-Z0-9].*[!,@,#,$,%,^,&,*,?,_,~])|([!,@,#,$,%,^,&,*,?,_,~].*[a-zA-Z0-9])/)){c=(c+15)}
  if(c<=30){lvl = 0;}else
    if(c>30&&c<=50){lvl = 1;}else
      if(c>50&&c<=70){lvl = 2;}else
        if(c>70){lvl = 3;}
  return lvl;
}

var cc = "asdfghjklASDFGHJKL";
var vv = "qwertyuiopQWERTYUIOP";
var nn = "0123456789";
var ss = "!@#$%^&*()-+";
var lgl = "aeiouy"; // 6
var lsg = "bdfghjklmnpqrstvxwz"; // 19

function makeRand(max) {
    return Math.floor(Math.random() * max);
}

function makePW(PASS, PASS_CONFIRM, feelConfirm) {
    var len = 8;
    var uc = true;
    var o = cc + ss + vv + nn + vv + ss + cc;
    var pw;
    var p = 3;
    var lvl = 0;
    while (lvl < 3) {
        pw = "";
        for (var i = 0; i < len; i++) {
            switch (i % p) {
                case 0:
                    if (uc) {
                        pw += cc.substr(makeRand(18), 1);
                        break;
                    }
                default:
                    pw += o.substr(makeRand(o.length), 1);
                    break;
            }
        }
        lvl = checkPassStrength(pw);
    }
    PASS.value = pw;
    PASS_CONFIRM.value = '';
    if (feelConfirm) {
        PASS_CONFIRM.value = pw;
    }
    try {
    	PASS.focus();
    } catch(e) {
    }
}

function randomPlayer(PASS, PASS_CONFIRM, LOGINNAME, NICKNAME) {
    makePW(PASS, PASS_CONFIRM, true);
    changeInputType(PASS, 'text');
    checkPwdStrength(PASS.value,
            document.getElementById('passwdStrengthVisual'),
            document.getElementById('passwdStrengthHint'));
    validateField(PASS, 'PASSWORD', 'no');
    makeLogin(LOGINNAME, NICKNAME);
    validateField(LOGINNAME, 'LOGINNAME', 'no');
    if(NICKNAME){
        validateField(NICKNAME, 'NICKNAME', 'no');
    }
    return false;
}

function makeLogin(LOGIN, NICKNAME) {
    var len = 10;
    var login = "";
    while (login.length < len) {
        login += lsg.substr(makeRand(lsg.length), 1);
        login += lgl.substr(makeRand(lgl.length), 1);
    }
    LOGIN.value = login;
    if(NICKNAME){
        NICKNAME.value = login;
    }
    LOGIN.focus();
}

function setSelectionRange(input, selectionStart, selectionEnd) {
    if (input.setSelectionRange) {
        input.focus();
        input.setSelectionRange(selectionStart, selectionEnd);
    }
    else if (input.createTextRange) {
        var range = input.createTextRange();
        range.collapse(true);
        range.moveEnd('character', selectionEnd);
        range.moveStart('character', selectionStart);
        range.select();
    }
}

function setCaretToPos(input, pos) {
    setSelectionRange(input, pos, pos);
}


function changeInputType(
  oldElm, // a reference to the input element
  iType // value of the type property: 'text' or 'password'
  ) {
  var isMSIE=/*@cc_on!@*/false;
  var newElm;
  if(!isMSIE){
    newElm=document.createElement('input');
    newElm.type=iType;
  } else {
    newElm=document.createElement('span');
    newElm.innerHTML='<input type="'+iType+'" name="'+oldElm.name+'">';
    newElm=newElm.firstChild;
  }
  var props=['name','id','className','maxLength','tabIndex','accessKey', 'value', 'title'];
  var events=['onblur', 'onchange', 'onkeyup', 'onclick', 'ondblclick', 'onfocus',
      'onkeydown', 'onkeypress', 'onload', 'onmousedown', 'onmousemove', 'onmouseout',
      'onmouseover', 'onmouseup', 'onreset', 'onselect', 'onsubmit', 'onunload'];
  for(var i=0,l=props.length;i<l;i++){
    if(oldElm[props[i]]) newElm[props[i]]=oldElm[props[i]];
  }
  for (var i=0,l=events.length;i<l;i++) {
    if (oldElm.getAttribute(events[i])) newElm.setAttribute(events[i], oldElm.getAttribute(events[i]));
  }
  oldElm.parentNode.replaceChild(newElm,oldElm);
  newElm.focus();
  setCaretToPos(newElm, newElm.value.length);
  return newElm;
}

function checkOS() {
    var OpSys = '';
    var n;
    if ('object' == typeof clientInformation) {
        n = clientInformation;
    } else {
        n = navigator;
    }
    var ua = ' ' + n.userAgent.toLowerCase();
    if ((ua.indexOf('Win') != -1) && (ua.indexOf('95') != -1))
        OpSys = "Windows95";
    else if ((ua.indexOf('Win') != -1) && (ua.indexOf('98') != -1))
        OpSys = "Windows98";
    else if ((ua.indexOf('Win') != -1) && (ua.indexOf('Me') != -1))
        OpSys = "WindowsMe";
    else if (ua.indexOf('nt 4.0') > 0 && ua.indexOf('win') > 0) {
        OpSys = "Windows NT";
    }
    if (OpSys != '') {
        alert('Sorry but your operation system ' + OpSys +
                ' is not supported.');
        return false;
    }
    return true;
}

function contactUs(logged, onlinesupport, link) {
    if (logged == 'true' && onlinesupport == 'true') {
        var hwin = window
                .open('http://server.iad.liveperson.net/hc/37589485/?cmd=file&file=visitorWantsToChat&site=37589485&byhref=1&imageUrl=http://server.iad.liveperson.net/hcp/Gallery/ChatButton-Gallery/English/General/1a/',
                "Contact_Us",
                "width=610,height=567,scrollbars=1,status=0,toolbar=0,directories=0,menubar=1,location=1,resizable=1");
        if (hwin) {
            hwin.focus();
        }
    } else {
        window.location = link;
    }
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseCookie(name) {
    createCookie(name, "0", -1);
}

function createCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

/*********************************
 Register Cookies
 *********************************/
function registerAction() {
    createCookie("COOKIE_AFTER_REGISTER", "1", "1");
}

function clearRegisterCookie() {
    setCookie("COOKIE_AFTER_REGISTER", "0", "10/01/2077", "/");
}

/*********************************
 END Register Cookies
 *********************************/

function gotoDfCashier(action, url, params) {
    if (!url) {
        url = "/cashier/dfcashier";
    }
    if (!params) {
        params = '';
    }
    createCookie("DF_AUTO_LOGIN", "1", "1");
    window.location.href = url + "?action=" + action + params;
}

function submitenter(myfield, e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    else if (e) keycode = e.which;
    else return true;

    if (keycode == 13) {
        var form = myfield.form;
        if (form.onsubmit()) {
            form.submit();
            return false;
        } else {
            return true;
        }

    } else {
        return true;
    }
}

//function submitForm(form) {
  //  if (!form) return;
    //if (!(form.onsubmit instanceof Function) || (form.onsubmit())) {
      //  form.submit();
    //}
//}



function submitForm(form) {
    var testEmail = /^[0-9a-zA-Z]+$/;
    var valueToTest = $('#LOGINNAME').attr('value').replace(/\s/g, "");
	$("#LOGINNAME").val(valueToTest);
    if (testEmail.test(valueToTest)) {
        document.getElementById("LOGINNAME_CLIENT").innerHTML = "";
        var valueTTest = $('#EMAIL').attr('value').replace(/\s/g, "");
        $("#EMAIL").val(valueTTest);
        var tEmail = /^[a-zA-Z0-9._%-]+@[A-Z0-9.-]+.[a-zA-Z]{2,4}(?:(?:[,][a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+))?$/i;
        if (tEmail.test(valueTTest)) {
           // var vtt = valueTTest.substr(valueTTest.lastIndexOf(".") + 1);
           // if (vtt == 'com' || vtt == 'co' || vtt == 'in') {
                document.getElementById("EMAIL_CLIENT").innerHTML = "";
                if (!form) return;
                if (!(form.onsubmit instanceof Function) || (form.onsubmit())) {
                    form.submit();
                    return false;
                }
           // } else {
             //   document.getElementById("EMAIL_CLIENT").innerHTML = "MailId should be end with .com, .co and .in";
               // return true;
           // }
        }
        else {
            document.getElementById("EMAIL_CLIENT").innerHTML = "Enter Valid Email Id";
            return true;
        }
    }
    else {
        document.getElementById("LOGINNAME_CLIENT").innerHTML = "UserName should be AlphaNumerical only(A-Z,a-z,0-9)";
        return true;
    }
};







function gotoCash2Net(url) {
    var newUrl = url + "?PaymentMethodSelector=10&switch_flag=true";
    window.location.href = newUrl;
}

function openSendMessageWindow(url) {
    var wnd = window.open(url, '',
            "width=820,height=700,scrollbars=1,status=0,toolbar=0,directories=0,menubar=0,location=0,resizable=1");
    if (wnd != null) {
        wnd.focus();
    }
}

function writeOpenTag(tagName) {
    document.write('<' + tagName + '>');
}

function writeCloseTag(tagName) {
    document.write('</' + tagName + '>');
}

function isInteger(s) {
    var i;

    if (isEmpty(s))
        if (isInteger.arguments.length == 1) return 0;
        else return (isInteger.arguments[1] == true);

    for (i = 0; i < s.length; i++) {
        var c = s.charAt(i);

        if (!isDigit(c)) return false;
    }

    return true;
}

function isEmpty(s) {
    return ((s == null) || (s.length == 0));
}

function isDigit(c) {
    return ((c >= "0") && (c <= "9"));
}

function enterDigits(e) {
    var code;
    if (!e) e = window.event;
    if (e.keyCode) code = e.keyCode;
    else if (e.which) code = e.which;
    if (code < 48 && code != 32) return true;
    var character = String.fromCharCode(code);
    return isDigit(character);

}

function openUrl(url) {
    var wnd = window.open(url, '',
            "scrollbars=1,status=1,toolbar=1,directories=0,menubar=1,location=0,resizable=1");
    if (wnd != null) {
        wnd.focus();
    }
}

function doTimezone() {
    var tzo = new Date().getTimezoneOffset();
    var cTimezone = getCookie("TIMEZONE");
    var cTzo = getCookie("timezoneOffset");
    var nTzo = escape(tzo * (-1));
    if (nTzo != cTimezone && (!cTzo || cTzo != nTzo)) {
        setCookie("timezoneOffset", tzo * (-1), "10/01/2077", "/");
        var nCTzo = getCookie("timezoneOffset");
        if (nCTzo) {
            request.redirect();
        }
    }
}

String.prototype.startsWith = function(str) {
    return this.substr(0, str.length) === str;
};

doTimezone();

function populate(d, m, y) {
        var m = parseInt(m.options[m.selectedIndex].value);
        var days_in_month = (new Date((new Date(y.options[y.selectedIndex].value,m+1,1)).getTime()-1)).getDate();
        if (_GT(d.options[d.selectedIndex].value,days_in_month)) d.options[days_in_month-1].selected=true;
        while (d.options.length) d.options.length=null;
        for (var i=d.options.length; _LT(i, days_in_month); ++i) d.options[i]=new Option(i+1);
}

function refreshPage(th) {
    try {
        lockAfterClick(th);
    } catch(e) {
    }
    try {
        window.clearTimeout();
        document.location.reload();
    } catch(e) {
    }
}

function lockAfterClick(b) {
    if (b != null && 'href' in b && 'onclick' in b) {
        b['href'] = '#';
        b['onclick'] = '';
    }
}

function JSClock() {
    var time = new Date();
    time = dateFormat(time, "dddd, mmm dd, yyyy - h:MM TT");
    /*var hour=time.getHours()
     var minute=time.getMinutes()
     var second=time.getSeconds()
     var temp=""
     temp+=((hour<10)?"0":"")+hour
     temp+=((minute<10)?":0":":")+minute
     temp+=((second<10)?":0":":")+second*/
    document.getElementById('digits').innerHTML = time;
    id = setTimeout("JSClock()", 60 * 1000);
}

var hook = (function() {
    var d;

    function hookViaAttachEvent(obj, eventName, handler) {
        obj.attachEvent('on' + eventName, handler);
    }

    function hookViaAddEventListener(obj, eventName, handler) {
        obj.addEventListener(eventName, handler, false);
    }

    d = document.createElement('span');
    if (d.addEventListener) {
        return hookViaAddEventListener;
    }
    else if (d.attachEvent) {
        return hookViaAttachEvent;
    }
    throw "Neither attachEvent nor addEventListener found.";
})();

function blurQValue(input, value) {
    var i$ = $(input);
    if ($.trim(i$.attr('value')) == '') {
        i$.attr('value', value);
    }
}
function focusQValue(input, value) {
    var i$ = $(input);
    if ($.trim(i$.attr('value')) == value) {
        i$.attr('value', '');
    }
}

var checked;

function checkCustomField(name, regexp, msg) {
    var regex = new RegExp(regexp);
    var m = regex.exec($("#" + name).val());
    checked = true;
    if (m == null) {
        $("#ERROR_" + name).show();
        $("#ERROR_" + name).html(msg);
        setErrorIcon("#" + name + "_ICON");
        checked = false;
    } else {
        $("#ERROR_" + name).hide();
        $("#ERROR_" + name).html('');
        setValidIcon("#" + name + "_ICON");
    }
}

function setValidIcon(icon_name) {
    $(icon_name).css("opacity", 1);
    $(icon_name).attr('class', 'field_valid_correct_icon');
    if ($(icon_name).attr('class') == 'field_valid_correct_icon') {
            $(icon_name).css("opacity", 1);
            $(icon_name).animate({opacity: 0}, "slow", function() {
                $(icon_name).attr('class', 'field_valid_unknown_icon');
            });
    }
}

function setErrorIcon(icon_name) {
    $(icon_name).css("opacity", 1);
    $(icon_name).attr('class', 'field_valid_error_icon');
}

function ajaxRequestUrl(ajaxArea, url, params, callback) {
    var postData = 'ajax=true';
    dt = "html";
    if (params != "" && typeof(params) != "undefined") {
        postData += "&" + params;
    }
    $.ajax({
        type: "POST",
        url: url,
        data: postData,
        dataType: dt,
        success:function (html) {
            if (dt == "html") {
                var response = $('<div />').html(html);
                if ($(response).find("#login-form").length > 0) {
                    window.location.href = "/login.html";
                } else {
                    fillAjaxArea(html, ajaxArea);
                }
            }
            if (callback != null) {
                callback(html);
            }
        },
        error:function (x, e) {
            if (x.status == 0) {
                //alert('You are offline!!\n Please Check Your Network.');
            } else if (x.status == 404) {
                alert('Requested URL not found.');
            } else if (x.status == 500) {
                alert('Service is temporarily unavailable.');
            } else if (e == 'parsererror') {
                alert('Error.\nParsing JSON Request failed.');
            } else if (e == 'timeout') {
                alert('Request Time out.');
            }
        }
    });
}


function fillAjaxArea(html, ajaxContainer) {
	$(ajaxContainer).html('');
	$(ajaxContainer).html(html);
}
