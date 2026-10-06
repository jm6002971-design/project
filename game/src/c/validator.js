//JavaScript'овая реализация для валидации полей
 


function validateField(obj,field,optionalField,checkUnique) {
	var fieldcontent = '#' + obj.id;
	var icon_name = fieldcontent + '_ICON'; 
	$(icon_name).css("opacity", 1);
	$(icon_name).attr("class", "field_valid_progress_icon");
//    obj.value = obj.value.replace(/^ */g,'').replace(/ *$/g,'');
	var dataValue = obj.value;
	dataValue = dataValue.replace(/\%/g, "%25");
	dataValue = dataValue.replace(/\&/g, "%26");
	dataValue = dataValue.replace(/\?/g, "%3f");
	dataValue = dataValue.replace(/\:/g, "%3a");
	dataValue = dataValue.replace(/\=/g, "%3d");
	dataValue = dataValue.replace(/\//g, "%2f");
	dataValue = dataValue.replace(/\+/g, "%2b");		
	dataValue = dataValue.replace(/\ /g, "%20");
	var postData = 'field=' + field + "&" + field + "=" + dataValue + "&type=" + userType;
	//setTimeout("setloaderInfo('" + fieldcontent + "');",200);	
	if(typeof( checkUnique ) == "undefined" || checkUnique == ''){
		checkUnique = true;
	}
	$.ajax({
		type: "POST",
		url: '/testxml/validator',
		data: postData,
		dataType: "xml",
		success: function(msg) {
			showResult(msg,fieldcontent,optionalField,checkUnique);
			}
		});
}
 
function loaderInfo(nameObj) {
    var icon_name = nameObj + '_ICON';
    if ($(icon_name).attr('class') == 'field_valid_unknown_icon') {
        $(icon_name).attr('class', 'field_valid_loader_icon');
    }
}

function vIEBrowser() {
    return (parseFloat((new RegExp("MSIE ([0-9]{1,}[.0-9]{0,})")).exec(navigator
            .userAgent)[1]));
}

function isIE6Browser() {
    var browser = navigator.appName;
    if ((browser == "Microsoft Internet Explorer") && (vIEBrowser() < 7)) {
        return true;
    }
    return false;
}

function setInvisibleIcon(icon_name) {
    if ($(icon_name).attr('class') == 'field_valid_correct_icon') {
        if (isIE6Browser()) {//IE6 not support animation with jQUERY
            $(icon_name).attr('class', 'field_valid_unknown_icon');
        } else {
            $(icon_name).css("opacity", 1);
            $(icon_name).animate({opacity: 0}, "slow", function() {
                $(icon_name).attr('class', 'field_valid_unknown_icon');
                if ($(icon_name).attr('id') == "NEW_PASSWORD_ICON" || $(icon_name).attr('id') == "NEW_PASSWORD_CONFIRM_ICON") {
                    $(icon_name).attr('class', 'field_valid_info_icon');
                    $(icon_name).css("opacity", 1);
                    $(icon_name).css("opacity", '');
                }
            });
        }
    }
}

function createErrorFieldMessage(nameObj,messageText,className){
	if(messageText == undefined || messageText.length == 0) return;
	var nameID = nameObj.substring(1,nameObj.length);
	var parentObj = document.getElementById(nameID).parentNode;
	if(!parentObj) return;
	//check if exist
    var messageElement = document.getElementById(nameID+"_MESSAGE_ID");
	if(messageElement){
		messageElement.innerHTML = messageText;
	} else {
        messageElement = document.createElement('div');
        messageElement.id = nameID + "_MESSAGE_ID";
        messageElement.innerHTML = messageText;
        parentObj.appendChild(messageElement);
    }
    if(className){
        messageElement.className = className;
    } else {
        messageElement.className = "field_valid_message";
    }
}

function destroyErrorFieldMessage(nameObj) {
    var nameID = nameObj.substring(1, nameObj.length) + "_MESSAGE_ID";
    var Obj = document.getElementById(nameID);
    if (!Obj) return;
    var parentObj = Obj.parentNode;
    parentObj.removeChild(Obj);
}

function disableSmsCodeButton(nameObj) {
    if (typeof $("#SMS_CODE_BUTTON") != 'undefined' && nameObj == "#PHONE") {
        $("#SMS_CODE_BUTTON").attr("disabled", "disabled");
    }
}

function enableSmsCodeButton(nameObj) {
    if (typeof $("#SMS_CODE_BUTTON") != 'undefined' && nameObj == "#PHONE") {
        $("#SMS_CODE_BUTTON").removeAttr("disabled");
    }
}

function showResult(result, nameObj, optionalField, checkUnique) {
    var icon_name = nameObj + '_ICON';
    $(icon_name).css("opacity", 1);
    //additional checks
    if (optionalField == 'yes' && ($(nameObj).attr('value') == undefined ||
            $(nameObj).attr('value').length == 0)) {
        $(icon_name).attr('class', 'field_valid_correct_icon');
        destroyErrorFieldMessage(nameObj);
        setTimeout("setInvisibleIcon('" + icon_name + "');", 1000);
        return;
    }
    if ($('VALIDATION_RESULT', result).attr("uniqueField") == 'false'
    			&& checkUnique == 'false') {
        $(icon_name).attr('class', 'field_valid_correct_icon');
        destroyErrorFieldMessage(nameObj);
        setTimeout("setInvisibleIcon('" + icon_name + "');", 1000);
        return;
    }
    var val = $(nameObj).attr('value');
    if (passCheck == "true") {
        if ((nameObj == "#PASS") && (val == $("#LOGINNAME").attr('value'))
                || (nameObj == "#PASSWORD") &&
                (val == $("#LOGINNAME").attr('value'))
                || (nameObj == "#PASSWORD_CONFIRM") &&
                (val == $("#LOGINNAME").attr('value'))
                || (nameObj == "#PASS_CONFIRM") &&
                (val == $("#LOGINNAME").attr('value'))
                || (nameObj == "#PASS") && (val == $("#NICKNAME").attr('value'))
                || (nameObj == "#PASS_CONFIRM") &&
                (val == $("#NICKNAME").attr('value'))
                || (nameObj == "#NEW_PASSWORD") &&
                (val == $("#NICKNAME").attr('value'))
                || (nameObj == "#NEW_PASSWORD") &&
                (val == $("#LOGINNAME").attr('value'))) {
            $(icon_name).attr('class', 'field_valid_error_icon');
            createErrorFieldMessage(nameObj, pwd_match);
            return;
        }
    }
    if (((nameObj == "#PASS_CONFIRM") &&
            ($(nameObj).attr('value') != $("#PASS").attr('value'))) ||
            ((nameObj == "#NEW_PASSWORD_CONFIRM") &&
                    ($(nameObj).attr('value') !=
                            $("#NEW_PASSWORD").attr('value'))) ||
            ((nameObj == "#AGENT_PASSWORD_CONFIRM") &&
                    ($(nameObj).attr('value') !=
                            $("#AGENT_PASSWORD").attr('value'))) ||
            ((nameObj == "#AFF_PASSWORD_CONFIRM") &&
                    ($(nameObj).attr('value') !=
                            $("#AFF_PASSWORD").attr('value')))) {
       // $(icon_name).attr('class', 'field_valid_error_icon');
        createErrorFieldMessage(nameObj, confirm_pwd);
        return;
    }

    if ((nameObj == "#PASSWORD") && ($(nameObj).attr('value') != '') &&
            ($("#PASSWORD_CONFIRM").attr('value') != '') &&
            ($("#PASSWORD_CONFIRM").attr('value') !=
                    $(nameObj).attr('value'))) {
        $(icon_name).attr('class', 'field_valid_error_icon');
        createErrorFieldMessage(nameObj, confirm_pwd);
        return;
    }

    if ((nameObj == "#PASSWORD_CONFIRM") && ($(nameObj).attr('value') != '') &&
            ($("#PASSWORD").attr('value') != '') &&
            ($("#PASSWORD").attr('value') != $(nameObj).attr('value'))) {
        $(icon_name).attr('class', 'field_valid_error_icon');
        createErrorFieldMessage(nameObj, confirm_pwd);
        return;
    }

	if( ((nameObj == "#EMAIL_CONFIRM")&&($(nameObj).attr('value') != $("#EMAIL").attr('value'))) ||
		((nameObj == "#AFF_SIGNUP_EMAIL_CONFIRM")&&($(nameObj).attr('value') != $("#AFF_SIGNUP_EMAIL").attr('value'))) ||
		((nameObj == "#AGENT_EMAIL_CONFIRM")&&($(nameObj).attr('value') != $("#AGENT_EMAIL").attr('value'))) ||
		((nameObj == "#AFF_EMAIL_CONFIRM")&&($(nameObj).attr('value') != $("#AFF_EMAIL").attr('value'))) ){
		$(icon_name).attr('class','field_valid_error_icon');
		createErrorFieldMessage(nameObj,confirm_email);
		return;
	}
	
	//Check Unique Fileds
	try{
		if((nameObj == "#LOGINNAME" || nameObj == "#NICKNAME" 
				|| nameObj == "#AFF_LOGIN" || nameObj == "#AGENT_LOGIN"
				|| nameObj == "#AFF_SIGNUP_EMAIL" || nameObj == "#AGENT_SIGNUP_EMAIL"
				|| nameObj == "#EMAIL") 
			&& ($('VALIDATION_RESULT', result).attr("uniqueField") == 'false')
			&& (checkUnique == 'true')){
			$(icon_name).attr('class','field_valid_error_icon');
			if(nameObj == "#NICKNAME")
				createErrorFieldMessage(nameObj,nickNameExists);
			else if(nameObj == "#AFF_LOGIN" || nameObj == "#AGENT_LOGIN" || nameObj == "#LOGINNAME")
				createErrorFieldMessage(nameObj, userNameExists);
            else if(nameObj == "#EMAIL" || nameObj == "#AFF_EMAIL" )
				createErrorFieldMessage(nameObj, emailExists);
			else 
				createErrorFieldMessage(nameObj, emailExists);
			return;
		}
	}catch(err){}

    var passed = $('VALIDATION_RESULT', result).attr("passed");
    var reason = $('VALIDATION_RESULT', result).attr("reason");
    var warning = $('VALIDATION_RESULT', result).attr("warning");

	if (passed == 'false') {
		$(icon_name).attr('class','field_valid_error_icon');
		createErrorFieldMessage(nameObj, reason);
        disableSmsCodeButton(nameObj);
    } else if (reason){
        $(icon_name).attr('class','field_valid_correct_icon');
        disableSmsCodeButton(nameObj);
        createErrorFieldMessage(nameObj,reason,
                warning == 'true' ?
                        'field_valid_message_or' :
                        'field_valid_message_gr');
    } else {
	    if (((nameObj == "#PASSWORD_CONFIRM") && ($(nameObj).attr('value') == $("#PASSWORD").attr('value'))) ||
			((nameObj == "#PASSWORD") && ($(nameObj).attr('value') == $("#PASSWORD_CONFIRM").attr('value')))
	   		) {
	    	var icon_name = "#PASSWORD" + '_ICON';
		    $(icon_name).css("opacity", 1);
	        $(icon_name).attr('class','field_valid_correct_icon');
	    	icon_name = "#PASSWORD_CONFIRM" + '_ICON';
		    $(icon_name).css("opacity", 1);
	        $(icon_name).attr('class','field_valid_correct_icon');
			destroyErrorFieldMessage("#PASSWORD");
			destroyErrorFieldMessage("#PASSWORD_CONFIRM");
			setTimeout("setInvisibleIcon('" + "#PASSWORD" + "');",1000);		
			setTimeout("setInvisibleIcon('" + "#PASSWORD_CONFIRM" + "');",1000);		
	    } else {
			$(icon_name).attr('class','field_valid_correct_icon');
			destroyErrorFieldMessage(nameObj);
            enableSmsCodeButton(nameObj);
			setTimeout("setInvisibleIcon('" + icon_name + "');",1000);		
		}
	}	
	
} 