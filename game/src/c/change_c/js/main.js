function remeberLogin(){
	var remeberme = document.getElementById("remember_me").checked;
	
	if(remeberme){
	//	checkCookie();
	}
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "="; // username=
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    var pass = getCookie("password");
    if (user != "" && pass != "") {
	//	try{document.getElementById("username").value = user;
	//	document.getElementById("USERNAME").value = user;
	//	document.getElementById("pass").value =pass;
	//	document.getElementById("PASSWORD").value =pass;
	//	document.getElementById("remember_me").checked = true;}catch(e){}
    } else {
       try{pass = document.getElementById("pass").value;}catch(e){}
        if ( pass != "" && pass != null) {
			if(pass != "********"){
				setCookie("password", pass, 1);
			}
        }
    }
	
	try{ user = document.getElementById("username").value;}catch(e){}
	if (user != "" && user != null) {
			if(user != "Username"){
				setCookie("username", user, 1); 
			}
	}
	if (user != ""){
		try{document.getElementById("lc_chat_offline_name").value = user;}catch(e){console.log(e)}
	}
}




function subMiteAddAcc(){
		var accOwnerName = document.getElementById("ownerName").value;
		var bankName = document.getElementById("bankName").value;
		var accNumber = document.getElementById("bankAccNumber").value;				
		var irSebaNumber =document.getElementById("shebaNumber1").value;
		
		var cardInputTxt1 = document.getElementById("cardNumber1").value;
		var cardInputTxt2 = document.getElementById("cardNumber2").value;
		var cardInputTxt3 = document.getElementById("cardNumber3").value;
		var cardInputTxt4 = document.getElementById("cardNumber4").value;
		
		var cardNumber = cardInputTxt1+cardInputTxt2+cardInputTxt3+cardInputTxt4;
		 var cardno = /[0-9]/g;
		 
		/*  var acctype = /^[0-9A-Za-z\s\-]+$/; */
		 /* var acctype = /(^\w+)\s?/;  */ 
		 
		 
		if(accOwnerName.length > 0){  
		
			if(userid_validation(accOwnerName, 5, 20)){ 
				document.getElementById("account_type").value = accOwnerName;
				document.getElementById("ownerNameErr").innerHTML = "";
			}else{
				document.getElementById("ownerNameErr").innerHTML  = "length should be in between 5 to 20";
			}
		 }
		if(cardNumber.length > 0){
			if(cardNumber.match(cardno)){
				if(userid_validation(cardNumber,13,19)){
				document.getElementById("card_number").value = cardNumber;
				document.getElementById("cardNumberErr").innerHTML  ="";
				}else{
					document.getElementById("cardNumberErr").innerHTML  = "length should be in between 13 to 19";
				}
			}else{
				document.getElementById("cardNumberErr").innerHTML  = "enter numbers only";
			}
		}
		if(irSebaNumber.length > 0){
			if(irSebaNumber.match(cardno)){
				if(userid_validation(irSebaNumber,24,25)){
					document.getElementById("personal_number").value = irSebaNumber;
					document.getElementById("shebaNumberErr").innerHTML  = "";
				}else{
					document.getElementById("shebaNumberErr").innerHTML  = "length should be 24";
				}
			}else{
				document.getElementById("shebaNumberErr").innerHTML  = "enter numbers only";
			}
		}		
		if(bankName.length > 0){
			if(userid_validation(bankName,4,24)){
				document.getElementById("bank_name").value = bankName;
				document.getElementById("bankNameErr").innerHTML  = "";
			}else{
				document.getElementById("bankNameErr").innerHTML  = "length should be in between 4 to 24";
			}
		}
		if(accNumber.length > 0){
			if(accNumber.match(cardno)){
				if(userid_validation(accNumber,5,24)){ 
					document.getElementById("account_number").value = accNumber; 
					document.getElementById("bankAccNumberErr").innerHTML  = "";
				}else{
					document.getElementById("bankAccNumberErr").innerHTML  = "length should be in between 5 to 24";
				}
			}else{
				document.getElementById("bankAccNumberErr").innerHTML  = "enter numbers only"; 
			}
		}
	}
	function userid_validation(uid,mx,my)  
{  
var uid_len = uid.length;   
if (uid_len == 0 || uid_len >= my || uid_len < mx)  
{  
//alert("User Id should not be empty / length be between "+mx+" to "+my);  
//uid.focus();  
return false;  
}
return true; 
}  
