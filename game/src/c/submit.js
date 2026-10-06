//JavaScript'овая реализация submit в agents,affiliators

//fix for IE
var savedUserTypeValue;

function submitAgentTransferForm(){
    if(document.getElementById("transfer").userType.value && document.getElementById("transfer").userId.value != "---") {		
		//fix for IE
		savedUserTypeValue = document.getElementById("transfer").userType.value;

        document.getElementById('transfer').fromto.value = document.getElementById("transfer").action.value;
        document.getElementById("transfer").ID.value = document.getElementById('referrer_form').ID.value;
        document.getElementById("transfer").USERID.value = document.getElementById("transfer").userId.value;
		//start animation
		$("#button_sub").html("<span>Please wait...</span>");
		//send by ajax
		$("#transfer").ajaxSubmit({
			success: agentTransferFormResult
		});    
		$("#transfer").resetForm();
		return;
    }
}

function changeAgent(){
    document.getElementById('referrer_form').fromto.value = document.getElementById("transfer").action.value;
    document.getElementById('referrer_form').AMOUNT_INT.value = document.getElementById("transfer").AMOUNT_INT.value;
    document.getElementById('referrer_form').AMOUNT_FRAC.value = document.getElementById("transfer").AMOUNT_FRAC.value;
	document.getElementById('referrer_form').typeFilterSubUser.value = getRadioGroupValue(document.getElementById("transfer").typeFilterSubUser);
	//start animation
	$("#button_sub").html("<span>Please wait...</span>");
	//send by ajax
	$("#referrer_form").ajaxSubmit({
		success: agentTransferFormResult
	});    
}

function agentTransferFormResult(msg){
	var htmlResult;	
	//get body content from result
	htmlResult = msg.substring(msg.indexOf('<body>')+6,msg.lastIndexOf('</body>')-2);	
	var elem = document.createElement("body");	
	elem.innerHTML = htmlResult;
	var obj = getChildById(elem,"content_container");
	$("#content_container").html(obj.innerHTML);	
	obj = getChildById(elem,"agent_info_balance");	
	$("#agent_info_balance").html(obj.innerHTML);	
	$("#AMOUNT_CURRENCY_INT").attr("value","0");
	//fix IE
	document.getElementById("transfer").userType.value = savedUserTypeValue;		
}

