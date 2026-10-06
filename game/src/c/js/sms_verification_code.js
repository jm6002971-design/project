var timerNum = -1;

var start = parseInt(getCookie("SMS_CODE_TIMER"));
if (start <= 0 || start == '' || typeof(start) == 'undefined' || isNaN(start)) {
    start = 60;
} else {
    $(document).ready(function() {
        $("#SMS_CODE_BUTTON").attr('disabled', 'disabled');
        timerNum = setInterval("timer()", 1000);
    });
}

function checkSmscResponse (response, th) {
    if ($(response).find("error").text() != '') {
        $("#SMS_CODE_BUTTON").removeAttr("disabled");
        alert($(response).find("error").text());
        return;
    }
    alert(codeSent);
    setCookie("SMS_CODE_TIMER", 60);
    start = 60;
    $(th).attr('disabled', 'disabled');
    timerNum = setInterval("timer()", 1000);
}

function timer() {
    start -= 1;
    $("#SMS_CODE_BUTTON").attr("value", start);
    setCookie("SMS_CODE_TIMER", start);
    if (start == 0) {
        $("#SMS_CODE_BUTTON").removeAttr("disabled");
        $("#SMS_CODE_BUTTON").attr("value", getCode);
        clearInterval(timerNum);
        setCookie("SMS_CODE_TIMER", "");
    }
}

function getSmsVerificationCode(th) {
    if ($("#PHONE").val() == '') {
        alert(phoneEmpty);
        return;
    }
    $(th).attr('disabled', 'disabled');
    var postData = "PHONE=" + $("#PHONE").val();
    var url = "/smsc";
    var dt = "html";
    $.ajax({
        type:"POST",
        url:url,
        data:postData,
        dataType:dt,
        success:function (response) {
            checkSmscResponse(response, th);
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