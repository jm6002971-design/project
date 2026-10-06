var all_urls = new Array(
    new Array("black", new Array("black", "pokermint.com"))
);

var skins = {
    "black" : {id: "black", name : "Pokermint", site : "pokermint.com"}
};

var errText = {
    "404" : {title: "HTTP Status 404", text: "The requested resource is not available."},
    "503" : {title: "HTTP Status 503", text: "The requested resource is not available."},
    "crit" : {title: "Critical Error", text: "Unknown error encountered. Please contact administrator with detailed explanation of your actions which preceded this error."},
    "serv" : {title: "Service Temporarily Unavailable", text: "The server is temporarily unable to service your request due to maintenance downtime or capacity problems. Please try again later."}
};


var skinName = "";
var skinNumber = 0;
var wwwPrefix = "www.";
var skin = skins.black;

function getHostName() {
    return location.hostname;
}

function defineSkinName() {
    var i, j;
    var isSkinFind = false;
    for (i = 0; i < all_urls.length; i++ ) {
        for (j = 0; j < all_urls[i][1].length; j++ ) {
            if (getHostName() ==  all_urls[i][1][j]
                || getHostName() ==  wwwPrefix + '' + all_urls[i][1][j]
                || getHostName().indexOf( all_urls[i][0] ) == 0 )  {
                isSkinFind = true;
                break;
            }
        }
        if (isSkinFind) {
            skinName = all_urls[i][0];
            skinNumber = i;
            skin = skins[skinName];
            break;
        }
    }

    return true;
}

defineSkinName();

function changeTitle(errorId){
    document.title = skin['name'] + ' -- ' + errText[errorId]['title'];
}

function errorTitle(errorId) {
    document.write('<h1 class="h1_title">' + errText[errorId]['title'] + '</h1>');
}

function generateErr(errorId) {
    document.write('<p>' + errText[errorId]['text'] +'</p>');
};

function generateIcon(){
    document.write('<link href="/skins/' + skin['id'] + '/favicon.ico" rel="shortcut icon"/>');
}

function generateLogo(){
    document.write('<a id="logo" title="' + skin['name'] + '" href="/index.html">');
    document.write('<img alt="' + skin['name'] + '" src="/c/i/logo.png"/></a>');
}

function generateCopyriht() {
    document.write('<p>&copy; 2012&nbsp;<a href="/">' + skin['site'] + '</a>&nbsp; All rights reserved.</p>')
}