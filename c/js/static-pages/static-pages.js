var langs = {
    "es" : {name: "Español", dateFormat: "dd/mm/yyyy HH:MM"},
    "en" : {name: "English", dateFormat: "dd/mm/yyyy HH:MM"},
    "cs" : {name: "Český", dateFormat: "d. m. yyyy HH:MM"},
    "ua" : {name: "Український", dateFormat: "dd.mm.yyyy HH:MM"},
    "id" : {name: "Indonesia", dateFormat: "dd-mm-yyyy HH:MM"},
    "ka" : {name: "საქართველოს", dateFormat: "dd-mm-yyyy HH:MM"},
    "ru" : {name: "Русский", dateFormat: "dd.mm.yyyy HH:MM"}
};

var gTime;

function getCookie(name) {
    var cookie = " " + document.cookie;
    var search = " " + name + "=";
    var setStr = null;
    var offset = 0;
    var end = 0;
    if (cookie.length > 0) {
        offset = cookie.indexOf(search);
        if (offset != -1) {
            offset += search.length;
            end = cookie.indexOf(";", offset);
            if (end == -1) {
                end = cookie.length;
            }
            setStr = unescape(cookie.substring(offset, end));
        }
    }
    return(setStr);
}

function refreshPage() {
    if (window.location.pathname == '/service_error.html') {
        window.location.href = "/";
    } else {
        window.location.reload();
    }
}

function changeLang(lang) {
    $("#langTextActive").html(langs[lang].name);
    $("#langText").html(langs[lang].name);
    $(".langComboActive").hide();
    $(".langCombo").show();
    changeTexts(lang);
}

function init(time) {
    var cookieLang = getCookie("USER_LANGUAGE");
    var langId = window.location.hash.substr(1);
    if (cookieLang != "") {
        langId = cookieLang.toLowerCase();
    }
    $("#langTextActive").html(langs[langId].name);
    $("#langText").html(langs[langId].name);
    var split = window.location.href.split("#");
    window.location.href = split[0] + "#" + langId;
    gTime = time;
    changeTexts(langId);
}

function changeTexts(langId) {
    $(".langCombo").click(function() {
        $(".langComboActive").show();
        $(this).hide();
    });
    $("span.time").each(function() {
        $(this).html(dateFormat(gTime, langs[langId].dateFormat, false));
    });
    var now = new Date();
    var $langVar = $("#" + langId);
    $(".header h1").html($langVar.find(".title").html());
    $("#line1").html($langVar.find(".line1").html());
    if (typeof($("#line2")) != 'undefined') {
        if (now.getTime() < gTime.getTime()) {
            $("#line2").html($langVar.find(".line2").html());
        } else {
            $("#line2").html('');
        }
    }
}
