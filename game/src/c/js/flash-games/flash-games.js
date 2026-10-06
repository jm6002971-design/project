// Major version of Flash required
var requiredMajorVersion = 8;
// Minor version of Flash required
var requiredMinorVersion = 0;
// Minor version of Flash required
var requiredRevision = 0;

// Inited by XSLT
var sid, tid, game, tidy_game, serverUrls, refresh_delay, flash, walletType, loggedInUrl, helpHandler, defaultLobbyWidth, defaultLobbyHeight,pokerWindow;

$(document).ready(function() {
    var wName = 'a_'+ sid.replace(/-/g,'_') + '_' + "PokerLobby";
    if (window.name == wName) {
        tables.putWindow(window, WindowsParams.TYPE_MAIN_LOBBY);
    }
});

var newsLightBox;
var newsByeBox;

var gameTypes = {
    "TEXAS_HOLDEM"      : "TEXAS_HOLDEM",
    "POKER32CARD"       : "POKER32CARD",
    "OMAHA"             : "OMAHA",
    "OMAHA_HIGH_LOW"    : "OMAHA_HIGH_LOW",
    "STUD7CARD"         : "STUD7CARD",
    "STUD7CARD|STUD7CARD_HIGH_LOW"         : "STUD7CARD",
    "STUD7CARD_HIGH_LOW": "STUD7CARD_HIGH_LOW",
    "AMERICANA"         : "AMERICANA",
    "HOLDEM_BLACKJACK"  : "HOLDEM_BLACKJACK",
    "REVERSE_HOLDEM"    : "REVERSE_HOLDEM",
    "STOPPA"            : "STOPPA"
};

var tournamentTypes = {
    "SCHEDULED_TOURNAMENT"  : 1,
    "SITANDGO_TOURNAMENT"   : 2
};

function CloseGame() {
    closeWindow()
}
function openInstanceWindow(_id, url, params, lastTableId) {
	var winName = 'a_'+ sid.replace(/-/g,'_') + '_' +  _id.replace(/[^\w]/g,'_');
//	alert("winName   :"+winName);
	pokerWindow = window.open('about:blank', winName, 'left=20,top=20,width=884,height=663,toolbar=0,resizable=1');	
}
function openPokerTable(tableId, lastTableId) {

    var width = 884;
    var height = 663;
    if (useSmallLauncher != undefined && useSmallLauncher != 'undefined' && useSmallLauncher != '') {
        width = 400;
        height = 190;
    }
    var tournamentParamId = (tid && tid != '') ? "&TOURNAMENTID=" + tid : '';
    var windowResizableStr = autoResizeTable ? "resizable=1" : "resizable=0";
    return openGameWindow(tableId, "/lobby/tableflash" + "?TABLEID=" + tableId + tournamentParamId
                          , "width=884"+ ",height=663" + ",menubar=0,toolbar=0,status=0," +
                windowResizableStr + ",scrollbars=0,dependent=yes,location=0", lastTableId);
}

function removeWindow() {
    tables.removeWindow(window.name);
}

function openGameWindow(_id, url, params, lastTableId) {
    var newName = 'a_'+ sid.replace(/-/g,'_') + '_' +  _id.replace(/[^\w]/g,'_');
    var winName = newName;
    var gameWin;
    if (isTableOpened(winName)) {
        //console.log("[openGameWindow]: Window already opened: id = " + _id + " lastTableId = " + lastTableId);
        gameWin = window.open("", winName, params);
        if(gameWin.location.href == "about:blank" || gameWin.location.href == "about:Tabs") {
            tables.removeWindow(winName);
            gameWin.close();
        }
        gameWin.focus();
    } else {
        if(lastTableId){
            winName = 'a_'+ sid.replace(/-/g,'_') + '_' +  lastTableId.replace(/[^\w]/g,'_');
            if (isTableOpened(winName)) {
                //console.log("[openGameWindow]: Last table id: lastTableId = " + lastTableId);
                gameWin = window.open("", winName, params);
                gameWin.name = newName;
                tables.changeTableName(winName, newName);
                gameWin.focus();
                if(gameWin.location.href == "about:blank" || gameWin.location.href == "about:Tabs") {
                    tables.removeWindow(winName);
                    gameWin.close();
                }
            }
        } else {
            //console.log("[openGameWindow]: New window opened");
            gameWin = window.open(url, winName, params);
            if ($.browser.msie || $.browser.safari) {
                tables.putWindow(gameWin, WindowsParams.TYPE_GAME)
            } else {
                tables.putWindow(gameWin, WindowsParams.TYPE_GAME);
                setTimeout(function() {tables.putWindow(gameWin, WindowsParams.TYPE_GAME)}, 1000);
            }
        }
    }
}

function openLobbyWindow(_id, url, params, lastTableId) {
    var winName = 'a_'+ sid.replace(/-/g,'_') + '_' +  _id.replace(/[^\w]/g,'_');
    var gameWin;
    if (isTableOpened(winName)) {
        //console.log("[openLobbyWindow]: 1 " + winName + " opened");
        gameWin = window.open("", winName, params);
        gameWin.focus();
    } else {
        if(lastTableId){
            winName = 'a_'+ sid.replace(/-/g,'_') + '_' +  lastTableId.replace(/[^\w]/g,'_');
            var lastName = winName;
            if (isTableOpened(winName)) {
                //console.log("[openLobbyWindow]: 2 " + lastName + " opened");
                gameWin = window.open("", winName, params);             
                tables.changeTableName(lastName, winName);
                gameWin.name = winName;
                gameWin.focus();
                if (tables) {
                    tables.putWindow(gameWin, WindowsParams.TYPE_LOBBY);
                }
            }
        } else {
            gameWin = window.open(url, winName, params);
            if (tables) {
                tables.putWindow(gameWin, WindowsParams.TYPE_LOBBY);
            }
        }
        //setTimeout(function() {tables.putWindow(gameWin, WindowsParams.TYPE_GAME)}, 1000);
    }

}


function helpwnd(name) {
    name = name || game;
    var hwin = window.open("/help/categories" + g_sid + "?type=players",
            "helpwndq", 'width=500,height=576,scrollbars=yes,toolbar=no');
    hwin.focus();
}

function onPokerClientLoad() {
}

function openNews(newsId) {
    window.open("/client-redirect?to=news#" + newsId);
}

function tilePokerTables() {
    tables.tile();
    tables.tile();
}

function cascadePokerTables() {
    tables.cascade();
    tables.cascade();
}

var timeout = -1;

var techResize = false;

function setDefaultSize(_id) {
    /*if (_id == undefined || _id == '' || _id == 'undefined') {
        if (tables != undefined) {
            tables.setSize(window, WindowsParams.DEFAULT_WIDTH, WindowsParams.DEFAULT_HEIGHT, true);
        }
    } else {
        var winName = 'a_'+ sid.replace(/-/g,'_') + '_' + _id.replace(/[^\w]/g,'_');
        tables.setSizeByWindowName(winName, WindowsParams.DEFAULT_WIDTH, WindowsParams.DEFAULT_HEIGHT, true);
    }*/
    if (tables != undefined && _id) {
        tables.setSize(window, WindowsParams.DEFAULT_WIDTH, WindowsParams.DEFAULT_HEIGHT, true);
    }
    $("#" + flash.params.container_id).addClass("flash_expand");
}

function setDefaultWindowSize(_id) {
    if (defaultSize == true || _id) {
        if ($.browser.msie || $.browser.safari) {
            timeout = window.setTimeout('setDefaultWindowSizeOneMoreTime("' + _id + '")', 4000);
        }
        setDefaultSize(_id);
    }
}

function setDefaultWindowSizeOneMoreTime(_id) {
    if (document.documentElement.clientWidth < WindowsParams.DEFAULT_WIDTH) {
        setDefaultSize(_id);
    }
    if (timeout != -1) {
        window.clearTimeout(timeout);
    }
}

function isTableOpened(name) {
    try {
        //tables.checkWindows();
        var wins = tables.getWindows();
        for (var i in wins) {
            if (wins[i].name) {
                //alert(wins[i].name + " = " + name)
                if (wins[i].name == name) {
                    return true;
                }
            }
        }
    } catch (e) {
    }
    return false;
}


function getMainLobby() {
    try {
        tables.checkWindows();
        var wins = tables.getWindows();
        for (var i in wins) {
            //console.log("[getMainLobby]: " + wins[i].name + " opened");
            var winInst = window.open("", wins[i].name);
            if (wins[i].type == 'MAIN_LOBBY') {
                return winInst;
            }
        }
    } catch (e) {
    }
}

function openLobby() {
    var mainLobby = tables.getWindowByType(WindowsParams.TYPE_MAIN_LOBBY);
    if (mainLobby != null) {
        mainLobby.focus();
    }
}

/*
* should be called in time reseating tournament players
* */
function changeTableId(newTableId, lastTableId){
    var winName = 'a_'+ sid.replace(/-/g,'_') + '_' +  lastTableId.replace(/[^\w]/g,'_');
    if (isTableOpened(winName)) {
        //console.log("[changeTableId]: Reseating happens..." )
        var gameWin = window.open("", winName, params);
        winName = 'a_'+ sid.replace(/-/g,'_') + '_' +  newTableId.replace(/[^\w]/g,'_');
        gameWin.name = winName;
    }
}

function openTournamentLobby(tournamentId, tableId, prevTableId) {
    var width = 884;
    var height = 663;
    if (useSmallLauncher != undefined && useSmallLauncher != 'undefined' && useSmallLauncher != '') {
        width = 400;
        height = 190;
    }
    tables.loadWindows();
    /*console.debug("[openTournamentLobby] Windows loaded");
    var tList = tables.getWindows();
    for (var i in tList) {
        console.debug("[openTournamentLobby] Name: " + tList[i].name + " Type: " + tList[i].type);      
    }*/
    var tableName, prevTableName;

    var hasTable = false;
    try {
        if (tableId) {
            tableName = 'a_'+ sid.replace(/-/g,'_') + '_' +  tableId.replace(/[^\w]/g,'_');
        }
        if (prevTableId) {
            prevTableName = 'a_'+ sid.replace(/-/g,'_') + '_' +  prevTableId.replace(/[^\w]/g,'_');
        }
        if (prevTableName) {
            //console.debug("[openTournamentLobby]: prevTableName: " + prevTableName)
            if (isTableOpened(prevTableName)) {
                //console.debug("[openTournamentLobby]: prevTableName opened");
                var win = window.open("", prevTableName);
                win.name = tableName;
                tables.changeTableName(prevTableName, tableName);
                //console.debug("[openTournamentLobby]: changing name...");
                /*var tList = tables.getWindows();
                for (var i in tList) {
                    console.debug("[openTournamentLobby] Name: " + tList[i].name + " Type: " + tList[i].name);      
                }*/
                hasTable = true;
            }
        }
        if (tableName) {
            //console.debug("[openTournamentLobby]: tableName: " + tableName)
            if (isTableOpened(tableName)) {
                //console.debug("[openTournamentLobby]: tableName opened");
                hasTable = true;
            }
        }
    } catch (e) {
    }
    //console.debug("[openTournamentLobby]: is table opened: " + hasTable);
    if (!hasTable) {
        var windowResizableStr = autoResizeLobby ? "resizable=1" : "resizable=0";
        return openLobbyWindow(tournamentId, "/lobby/tourneylobbyflash" + g_sid +
                          "?TOURNAMENTID=" + tournamentId, "width=884" + ",height=663" + ",menubar=0,toolbar=0,status=0," +
            windowResizableStr + ",scrollbars=0");
    }
}

function closeWindow() {
    unload.closeWindow();
    if (window.parent != null) {
        //window.parent.close();
    } else {
        upload_detected = false;
    }
    window.close();
    tables.removeWindow(window.name);
}

function closePokerTable() {
    closeWindow();
}

var unload = new function () {
    var needUnload = true;
    var needBeforeUnload = false;
    var beforeUnload = false;
    var close = false;
    this.isNeedUnload = function() {
        return needUnload;
    },
    this.isClose = function() {
        return close;
    },
    this.isNeedBeforeUnload = function() {
        needUnload = (beforeUnload & !needBeforeUnload) ? true : needUnload;
        var result = needBeforeUnload | beforeUnload | needUnload;
        beforeUnload = !(beforeUnload | !needBeforeUnload);
        needBeforeUnload = false;
        close = (close) ? !needUnload : false;
        return result;
    },
    this.closeWindow = function() {
        needUnload = false;
        close = true;
        needBeforeUnload = true;
    },
    this.f5 = function() {
        needUnload = false;
    }
}();

function unloadWindow(evt) {
    tables.removeWindow(window.name);
    upload_detected = true;
    if(flash && flash.params) {
        var flashMovie = document.getElementById(flash.params.flash_id);
        try {
            flashMovie.handleBrowserWindowClosing();
        } catch (err) {
        }
    }
}

var resizeTimeout = -1;

var newWidth = 0;
var newHeight = 0;

setTimeout("getWindowSize()", 500);

var dx = 0;
var dy = 0;

function getWindowSize() {
    //var barsW = 0, barsH = 0;
    try {
    if (document.all){
        cW = window.document.documentElement.clientWidth;
        cH = window.document.documentElement.clientHeight;
        window.resizeTo(500,500);
        var barsW = 500 - window.document.documentElement.clientWidth;
        var barsH = 500 - window.document.documentElement.clientHeight;
        wW = barsW + cW;
        wH = barsH + cH;
        window.resizeTo(wW,wH);
    } else {
        wW = window.outerWidth;
        wH = window.outerHeight;
    }
    dx = barsW;
    if (isNaN(dx)) {
        dx = 0;
    }
    dy = barsH - 3;
    } catch (e) {
    }
}


if (isNaN(dy)) {
    dy = 0;
}

var fullscreen = false;
//console.log("+++++++++++++++++++++++++ fullscreen set to FALSE")
var doubleCheck = false;

function autoResizeWindow(event) {
    doubleCheck = false;
    newWidth = window.document.documentElement.clientWidth + dx;
    newHeight = window.document.documentElement.clientHeight + dy;    
    var w = newWidth, h = window.outerHeight ? window.outerHeight : newHeight;
    //console.log("Size: " + w + "x" + h)
    //console.log("Screen Size: " + screen.availWidth + "x" + screen.availHeight)
    if (w >= screen.availWidth && h >= screen.availHeight) {
        fullScreenSize();
        return;
    }
    /*if (resizeTimeout > 0) {
        clearInterval(resizeTimeout);
    }*/
    if (resizeTimeout < 0) {
        resizeTimeout = setInterval('timeoutResize()', 1000);
        //console.log("***************** Resize start: " + resizeTimeout);
    }
}

function clearInt() {
    if (resizeTimeout > 0) {
        clearInterval(resizeTimeout);
        resizeTimeout = -1;
    }
}

function resizeEnd() {
    setTimeout('clearInt()', 300);
    clearInt();
}

function setFlashMaximize() {
    try {
        flash.getFlash().handleBrowserWindowFullScreen();
    } catch(e) {
    }
}

var flashW = 0, flashH = 0;

function windowSize(w, h) {
    //console.log("Flash event: " + w + " : " + h)
    flashW = parseInt(w);
    flashH = parseInt(h);
}

var wideResizeMode = false;

function timeoutResize() {
    //console.log(new Date() + ": [timeoutResize()]")
    //console.log("****************************** fullscreen: " + fullscreen)
    if (fullscreen) {
        if (!doubleCheck) {
            setTimeout('checkLastSize()', 2000);
            fullscreen = false;
        }
        //console.log("EXITING FROM HELL !!!: " + fullscreen)
        resizeEnd();
        return;
    }
    var defWidth = flash.params.defWidth;
    var defHeight = flash.params.defHeight;
    /*var maxHeight = flash.params.maxHeight;
    var maxWidth = flash.params.maxWidth;*/
    var maxWidth = screen.availWidth;
    var maxHeight = screen.availHeight;
    var defDiv = defWidth/defHeight;
    var wWidth = window.document.documentElement.clientWidth;
    var wHeight = window.document.documentElement.clientHeight;
    var ratio = 884/663;
    if (defaultLobbyWidth != '' && defaultLobbyHeight != '') {
        ratio = defaultLobbyWidth / defaultLobbyHeight;
    }
    if (!isWideResizeEnabled) {
        maxHeight = flash.params.maxHeight;
        maxWidth = flash.params.maxWidth;
    }
    var width = wWidth;
    var height = wHeight;
    width = width < defWidth ? defWidth : width;
    height = height < defHeight ? defHeight : height;
    if (isWideResizeEnabled) {
    var hh = window.document.documentElement.clientHeight - 3;
    if ($.browser.msie) {
        hh = hh + dy;
    }
    if (window.outerHeight) {
        newHeight = window.outerHeight - dy;
    }
    //console.log("height = " + (newHeight + dy) + "; maxHeight = " + maxHeight)
    if ((newHeight + dy) >= maxHeight) {
        console.log("Wide mode ON");
        if (!wideResizeMode) {
            console.log("******************************* External call: setWindowMode = WIDE");
            try {
                flash.getFlash().setWindowMode('wide');
            } catch (e) {
                //no wide support
            }
        }
        resizeEnd();
        wideResizeMode = true;
        height = maxHeight;
        tables.setSize(window, width, height, false);
        /*if (window.outerHeight) {
            tables.setSize(window, width, height, false);
        } else {
            tables.setSize(window, width, height, true);
        }*/
    } else {
        //console.log("Wide mode OFF 1");
        if (wideResizeMode) {
            //console.log("******************************* External call: setWindowMode = NORMAL");
            try {
                flash.getFlash().setWindowMode('normal');
            } catch (e) {
                //no wide support
            }
        }
        wideResizeMode = false;
    }
    //console.log(flashH + " < " + (hh - dy));
    if (flashH < (hh - dy)) {
        //console.log("Wide mode OFF 2");
        if (wideResizeMode) {
            //console.log("******************************* External call: setWindowMode = NORMAL");
            try {
                flash.getFlash().setWindowMode('normal');
            } catch (e) {
                //no wide support
            }
        }
        wideResizeMode = false;
    }
    }
    //console.log("TechResize: " + techResize);
    if (!isWideResizeEnabled) {
        wideResizeMode = false;
    }
    if (!wideResizeMode) {
        if (!techResize) {
            var div = width/height;
            if (defDiv > div) {
                height = width/defDiv;
            } else {
                width = height*defDiv;
            }
            if (height > maxHeight) {
                height = maxHeight;
            }
            if (width > maxWidth) {
                width = maxWidth;
                setFlashMaximize();
            }
            if (wWidth != width || wHeight != height) {
                try {
                    techResize = true;
                    tables.setSize(window, width, height, true);
                } catch (e) {
                    techResize = false;
                }
            } else {
                techResize = false;
            }
        } else {
            techResize = false;
        }
        var ww = window.document.documentElement.clientWidth;
        hh = window.document.documentElement.clientHeight;
        //console.log(ratio + "=" + ww/hh);
        if (ratio == ww/hh) {
        //if ((flashW >= newWidth - 3) && (flashW <= newWidth + 3) && (flashH >= newHeight - 3) && (flashH <= newHeight + 3)) {
            //console.log("***************** Resize END");
            resizeEnd();
        }       
    }
    setTimeout('checkLastSize()', 2000);
}

function checkLastSize() {
    var wWidth = window.document.documentElement.clientWidth;
    var wHeight = window.document.documentElement.clientHeight;
    //console.log("checkLastSize")
    //console.log(wWidth + "=" + flashW + " : " + wHeight + " = " + flashH);
    if ((flashW >= wWidth - 3) && (flashW <= wWidth + 3) && (flashH >= wHeight - 3) && (flashH <= wHeight + 3)) {
        resizeEnd();
    } else {
        doubleCheck = true;
        setTimeout('timeoutResize()', 1000);
    }
}

var Flash = function(params) {
    var defaults = {
        url : '/',
        flash_id: "movie",
        width: "663",
        defWidth: 500,
        height: "400",
        defHeight: 375,
        maxWidth: 1200,
        maxHeight: 900,
        version: "9.0.0",
        background: "#ffffff",
        flashvars: "",
        allowFullScreen: false,
        base: "",
        autoresize: false,
        container_id: "flash_container",
        quality: "high",
        xiRedirectUrl: "",
        redirectUrl: "http://www.adobe.com/go/getflashplayer",
        detectKey: "detectflash",
        onunload: unloadWindow,
        noLoadContainer: null,
        wmode: null
    };

    this.params = $.extend(defaults, params || {});

    this.flash = new SWFObject(
            this.params.url, this.params.flash_id,
            this.params.width, this.params.height,
            this.params.version, this.params.background,
            this.params.quality, this.params.xiRedirectUrl,
            this.params.redirectUrl, this.params.detectKey);
    this.flash.addParam("flashvars", this.params.flashvars);
    if(this.params.wmode && this.params.wmode != ''){
        this.flash.addParam("wmode", this.params.wmode);
    }
    this.flash.addParam("allowFullScreen", this.params.allowFullScreen);
    this.flash.addParam("allowscriptaccess", this.params.allowscriptaccess);
    this.getFlash = function() {
        return document.getElementById(this.params.flash_id);
    };
    if(this.params.base != ''){
        this.flash.addVariable("base", this.params.base);
    }
    if (this.params.autoresize) {
        hook(window, "resize", autoResizeWindow);
        //hook(window, "mouseout", resizeEnd);
        //hook(window, "blur", resizeEnd);
        //hook(window, "focus", resizeEnd);
        //hook(window, "move", resizeEnd);        
    }
    hook(window, "unload", this.params.onunload);
    window.document.onkeydown = function(evt) {
        evt = evt || window.event;
        var key = (window.event)? evt.keyCode : evt.which;
        if (evt.keyCode == 116 || evt.ctrlKey && key == 114) {
            unload.f5();
        }
    };
    this.load = function(){
        if(!this.flash.write(this.params.container_id) && this.params.noLoadContainer){
            $('#' + this.params.noLoadContainer).show();
        }
    };
    this.onLoad = function(){
        //
    }
};
Flash.prototype.write = function () {
    this.flash.write(this.params.container_id);
};

var confirmString = '';
var logged = false;

function checkUserSession () {
        var checkUrl = '/testxml/index';
	    if (typeof(loggedInUrl) != 'undefined' && loggedInUrl != '') {
	    	checkUrl = loggedInUrl;
	    }
        var instance = this;
        $.ajax({
            url: checkUrl,
            cache: false,
            async: false,
            dataType: 'xml',
            success: function(data) {
                var $dom = $(data);
                if ($dom.find('LOGGEDIN').length > 0) {
                    tables.checkWindows();
                    var count = tables.getWindows().length;
                    confirmString = ASK_CLOSE_LOBBY;
                    if (count > 0) {
                        confirmString = ASK_CLOSE_ALL_TABLES.replace('{0}', count);
                    }
                } else {
                    confirmString = '';
                }
            }
        });
    }

function beforeCloseLobby (event) {
    openNewsByebox();
    if (unload.isNeedBeforeUnload()) {
        event = event || window.event;
        checkUserSession();
        if (confirmString == "") {
            return null;
        }
        event.returnValue = confirmString;
        return confirmString;
    } else {
        return null;
    }
}

function unloadLobby(event) {
    if (unload.isNeedUnload() || unload.isClose()) {
        if (newsLightBox) {
	        newsLightBox.close();
        }
        tables.closeAll();
    }
}

function activateLobby() {
    openPokerLobby();
}

function setFocus() {
    window.focus();
}

function loadFlashEvent(){
    flash.onLoad();
}

function openPokerHistory(gameType, tournamentType) {
    var tour = tournamentTypes[tournamentType];
    var game = gameTypes[gameType];
    if (tour != undefined && tour != 'undefined') {
        openPage("GAMES_HISTORY", "name=" + game + "&tourney=" + tour);
    } else {
        openPage("GAMES_HISTORY", "name=" + game);
    }
}

function openHistory(gameType, tournamentType) {
    var tour = tournamentTypes[tournamentType];
    var game = gameTypes[gameType];
    if (!tour) tour = "";
    openPage("GAMES_HISTORY", "game=" + game + "&tourney=" + tour);
}

function openPokerHandHistory(historyId, handNum, type) {
    if (handNum) {
        if ("SINGLE_TABLE" == type) {
            openPage("GAME_HISTORY_DETAIL", "sid=" + sid + "&sessionId=" +
                    historyId + "&hand=" + handNum);
        } else {
            openPage("GAME_HISTORY_DETAIL", "sid=" + sid + "&tourneyId=" +
                    historyId + "&hand=" + handNum);
        }
    } else {
        if ("SINGLE_TABLE" == type) {
            openPage("GAME_HISTORY", "sid=" + sid + "&sessionId=" + historyId);
        } else {
            openPage("HANDS_LIST", "sid=" + sid + "&tourneyId=" + historyId);
        }
    }
}

function openHelp(page) {
    openPage(page);
}

function gotoDfCashierFromFlash(action, params){
    var url = "/cashier/dfcashier"+ g_sid;
    createCookie("DF_AUTO_LOGIN", "1", "1");
    var link = url + "?action=" + action + '&sid=' + sid;
    goto(link, false);
}


function openCashier(page) {
    var action = pages[page];
    if( action == 'DFDEPOSIT') {
        gotoDfCashierFromFlash('deposit');
        return;
    }
    if( action == 'DFCASHOUT') {
        gotoDfCashierFromFlash('cashout');
        return;
    }

    openPage(page, "sid=" + sid);
}

function openPage(page, params) {
    var isNew = true;
    var link = pages[page] + g_sid;
    if (link) {
        if (params) {
            var separator = (link.indexOf("?") == -1) ? "?" : "&";
            link += separator + params;
        }
        goto(link, isNew);
    } else {
        if (page != "FAQ") {
            openPage("FAQ", "type=players");
        }
    }
}

function createLink(base, params, jsession) {
    var link = base;
    if (jsession) {
        link += jsession;
    }
    if (params) {
        var strParams = "";
        var first = true;
        for (var param in params) {
            var obj = params[param];
            if (!(obj instanceof Function)) {
                if (!first) {
                    strParams += "&"
                }
                strParams += param + "=" + obj;
                first = false;
            }
        }
        if (strParams != "") {
            link += "?" + strParams;
        }
    }
    return link;
}

function openPokerLobby() {
    var windowResizableStr = autoResizeLobby ? "resizable=1" : "resizable=0";
    return openLobbyWindow("PokerLobby","/lobby/lobbyflash",
            "width=884,height=663,menubar=0,toolbar=0,status=0," + windowResizableStr + "," +
            "scrollbars=0");
}

function getServerUrls() {
    return serverUrls;
}

function setTitle(_title) {
    document.title = _title;
}

function setMinWindowSize() {
    $("#flash_container").attr("class", "flash_container_big");
}

function getTopWindowWithToolbar() {
    var tmp = window.top.opener;
    var wind;
    while (tmp != null) {
        wind = tmp;
        try {
            if (tmp != tmp.top.opener) {
                tmp = tmp.top.opener
            } else {
                if (tmp.toolbar.visible) {
                    wind = tmp;
                } else {
                    wind = null;
                }
                tmp = null;
            }
        } catch (e) {
            tmp = null;
            wind = null;
        }
    }
    return wind;
}
function goto(location, isNew){
    var wind;
    if(location.startsWith("mailto:")){
        wind = window.open(location);
        if(wind){
            wind.close();
        }
    }else{
        wind = getTopWindowWithToolbar();
        var type = "_top";
        try {
            if (wind == null || !wind.toolbar.visible || isNew) {
                type = "_blank";
                wind = window;
            }
            wind = wind.open(location, type);
        }  catch (e) {
            wind = window.open(location, "_blank");
        }
        if (wind) wind.focus();
    }
}


/*
Rsize windows from flash
 */

var wdim = {
    x: 0,
    y: 0,
    h: 0,
    w: 0
};

function fullScreenSize() {
    if (!fullscreen) {
        initSize();
        initPos();
    }
    fullscreen = true;
    var mw = screen.availWidth;
    var mh = screen.availHeight;
    var innerSize = false;
    if (isWideResizeEnabled) {
        try {
            flash.getFlash().setWindowMode('wide');
        } catch (e) {
            //no wide support
        }
    }
    if (!isWideResizeEnabled) {
    	innerSize = true;
        mw = flash.params.maxWidth;
        mh = flash.params.maxHeight;
    }
    wideResizeMode = true;
    techResize = true;
    console.log("************************ SCREEN BECOMES: Width: " + mw + " Height: " + mh);
    try {
        setTimeout("window.moveTo(0, 0)", 500);
        //setTimeout("tables.setSize(window, mw, mh, true)", 500);
        window.moveTo(0, 0);
    } catch (e) {
    	//alert(e.name)
    }
    tables.setSize(window, mw, mh, innerSize);
    setTimeout("setFlashMaximize();", 500)
}

function restoreScreenSize() {
    fullscreen = false;
    //console.log("+++++++++++++++++++++++++ fullscreen set to FALSE")
    restoreSize();
    window.moveTo(wdim.x, wdim.y);
    wideResizeMode = false;
    try {
        flash.getFlash().setWindowMode('normal');
    } catch (e) {
        //no wide support
    }
    //console.log("************************ NORMAL SCREEN !!!!!")
}

function restoreSize() {
    techResize = true;
    tables.setSize(window, wdim.w, wdim.h, true);
}

function initSize() {
    wdim.w = document.documentElement.clientWidth;
    wdim.h = document.documentElement.clientHeight;
    console.log("************************ " + wdim.w + " : " + wdim.h)
}

function initPos() {
    if (window.screenX != undefined) {
        wdim.x = window.screenX;
        wdim.y = window.screenY;
    } else {
        wdim.x = window.screenLeft;
        wdim.y = window.screenTop;
    }
}

function getFlashMovieObject(win, movieName){
    if (win.document[movieName]){
        return win.document[movieName];
    }
    if (navigator.appName.indexOf("Microsoft Internet")==-1){
        if (win.document.embeds && win.document.embeds[movieName])
            return win.document.embeds[movieName];
    }
    else{
        return win.document.getElementById(movieName);
    }
}


function broadcastFlashEvent(params) {
    try {
        if (!$.browser.opera) {
            tables.checkWindows();
            var wins = tables.getWindows();
            var fl;
            for (var i in wins) {
                if (isTableOpened(wins[i].name)) {
                    if (window.name != wins[i].name) {
                        var winInst = window.open("", wins[i].name);
                        if(winInst.location.href == "about:blank" || winInst.location.href == "about:Tabs") {
							tables.removeWindow(wins[i].name);
							winInst.close();
						}
                        var type;
                        if (wins[i].type == "lobby") {
                            type = "pokertourneylobby";
                        } else if (wins[i].type == 'MAIN_LOBBY') {
                            type = "pokerlobby";
                        } else {
                            type = "pokertable";
                        }
                        fl = getFlashMovieObject(winInst, type);
                        fl.broadcastFlashEvent(params);
                    }
                }
            }
        }
    } catch (e) {
    }
}

function reloadWindow() {
    window.location.reload();
}

function setWindowID(_id) {
    //alert("[setWindowID]: called");
    var newName = 'a_'+ sid.replace(/-/g,'_') + '_' + _id.replace(/[^\w]/g,'_');    
    if (isTableOpened(newName)) {
        if (window.location.href == "about:blank" || window.location.href == "about:Tabs") {
            window.close();
        }       
        tables.removeWindow(newName);
        //alert("[setWindowID]: Window already opened. Close it: " + newName);      
        /*tables.removeWindow(newName);
        window.close();*/
    }
    tables.changeTableName(window.name, newName);
    window.name = newName;
}

var lobbyTimer = -1;

function setLobbyDefaultSize() {
    var dw = 884;
    var dh = 663;
    if (defaultLobbyWidth != '') {
        dw = defaultLobbyWidth;
    }
    if (defaultLobbyHeight != '') {
        dh = defaultLobbyHeight;
    }
    tables.setSize(window, dw, dh, true);
    var wWidth = window.document.documentElement.clientWidth;
    var wHeight = window.document.documentElement.clientHeight;
    console.log("************* [setLobbyDefaultSize]: width = " + wWidth + " : height = " + wHeight);
    if (wWidth == dw && wHeight == dh) {
        //console.log("Resize ENDED !!!!!!")
        clearInterval(lobbyTimer);
        lobbyTimer = -1;
    }
}

function setLobbyDefaultWidth(height) {
    var dw = 884;
    if (defaultLobbyWidth != '') {
        dw = defaultLobbyWidth;
    }
    tables.setSize(window, dw, height, true);
    var wWidth = window.document.documentElement.clientWidth;
    //console.log("************* [setLobbyDefaultSize]: width = " + wWidth + " : height = " + wHeight);
    if (wWidth == dw) {
        //console.log("Resize ENDED !!!!!!")
        clearInterval(lobbyTimer);
        lobbyTimer = -1;
    }
}

function setLobbyDefaultHeight(width) {
    var dh = 663;
    if (defaultLobbyHeight != '') {
        dh = defaultLobbyHeight;
    }
    tables.setSize(window, width, dh, true);
    var wHeight = window.document.documentElement.clientHeight;
    //console.log("************* [setLobbyDefaultSize]: width = " + wWidth + " : height = " + wHeight);
    if (wHeight == dh) {
        //console.log("Resize ENDED !!!!!!")
        clearInterval(lobbyTimer);
        lobbyTimer = -1;
    }
}


function checkDimensions() {
	try {
	    var wWidth = window.document.documentElement.clientWidth;
	    var wHeight = window.document.documentElement.clientHeight;
        console.log(wWidth + " < " + defaultLobbyWidth + " : " + wHeight + " > " + defaultLobbyHeight);
//		console.log("[checkDimensions]: " + wWidth + " : " + wHeight)
	    if (wWidth < defaultLobbyWidth && wHeight >= defaultLobbyHeight) {
	        if (lobbyTimer < 0) {
	            lobbyTimer = setInterval('setLobbyDefaultWidth(' + wHeight + ')', 500);
	        }
	    }
	    if (wWidth >= defaultLobbyWidth && wHeight < defaultLobbyHeight) {
	        if (lobbyTimer < 0) {
	            lobbyTimer = setInterval('setLobbyDefaultHeight(' + wWidth + ')', 500);
	        }
	    }
	    if (wWidth < defaultLobbyWidth && wHeight < defaultLobbyHeight) {
        if (lobbyTimer < 0) {
	            lobbyTimer = setInterval('setLobbyDefaultSize()', 500);
	        }
	    }
    } catch(e) {
    	console.log(e);
    }
}

var isMin = true;

function detectWindowState() {
    setTimeout('detectMinMax()', 500);
}

function detectMinMax(){
    var mov = getFlashMovieObject(window, "pokertable");
    //console.log(mov)
    try {
        if(!isMin&&((window.screenLeft&&window.screenLeft < 0)||(window.screenX&&window.screenX < 0))){
            // window has just been minimized!
            //console.log("Window MINIMIZED");
            if (mov) {
                mov.setWindowState("minimized");
            }
            isMin = true;
        } else if(isMin&&((window.screenLeft&&window.screenLeft > 0)||(window.screenX&&window.screenX > 0))){
            // window has just been unminized!
            //console.log("Window MAXIMIZED");
            var mov = getFlashMovieObject(window, "pokertable");
            if (mov) {
                mov.setWindowState("maximized");
            }
            isMin = false;
        }
    } catch(e) {
    }
}

function doClientRedirect(handlerName, paramsJSON) {
    var winName = 'client_' + sid.replace(/-/g, '_');
    var additionalParams = "";
    var params = eval('(' + paramsJSON + ')');
    if(params){
        for(var pName in params){
            additionalParams += '&' + pName + '=' + params[pName];
        }
    }
    var winURL = "/client-redirect?to=" + handlerName + "&sid=" + sid + additionalParams;
    var win = window.open(winURL, winName);
    if (win) {
        win.focus();
    }
}

function getClientBannerUrl(lang) {
//	alert("lang ------ "+lang);
    return '/client-redirect.html?to=client-banner&LANG=' + lang;
}

function openNewsLightbox() {
    if (isLoggedIn()) {
        var winH = 450;
        var winW = 690;
        var params = "width=" + winW + ",height=" + winH + ",menubar=0,toolbar=0,status=0," +
                "resizable=0,scrollbars=1";
        var winName = 'lnb_' + sid.replace(/-/g, '_');
        var winURL = "/client-redirect?to=newslightbox&sid=" + sid;
        newsLightBox = window.open(winURL, winName, params);
        var parentWidth = window.document.documentElement.clientWidth;
        var parentHeight = window.document.documentElement.clientHeight;
        var parentY = window.screenTop;
        var parentX = window.screenLeft;
        if (parentY == undefined) {
            parentY = window.screenY;
        }
        if (parentX == undefined) {
            parentX = window.screenX;
        }
        var xPos = parentX + parentWidth / 2;
        var yPos = parentY + parentHeight / 2;
        if (newsLightBox) {
            newsLightBox.moveTo(xPos - winW / 2, yPos - winH / 2);
            newsLightBox.focus();
        }
    }
}

function openNewsByebox() {
    var boxTimer = -1;
    $.ajax({
        url: "/client-redirect?to=news-byebox",
        cache: false,
        async: false,
        dataType: 'html',
        success: function(res, status, xhr) {
            try {
                var matchedStr = res.match("::.*::").toString();
                var bbTT = matchedStr.split("::");
                if (bbTT.length == 3) {
                    boxTimer = bbTT[1];
                }
            } catch(e) {}
        }
    });
    if (boxTimer <= 0) {
        return;
    }
    if (isLoggedIn()) {
        var winH = 450;
        var winW = 690;
        var params = "width=" + winW + ",height=" + winH + ",menubar=0,toolbar=0,status=0," +
                "resizable=0,scrollbars=1";
        var winURL = "/client-redirect?to=news-byebox&sid=" + sid;
        var winName = 'lnb_' + sid.replace(/-/g, '_');
        newsByeBox = window.open(winURL, winName, params);
        var parentWidth = window.document.documentElement.clientWidth;
        var parentHeight = window.document.documentElement.clientHeight;
        var parentY = window.screenTop;
        var parentX = window.screenLeft;
        if (parentY == undefined) {
            parentY = window.screenY;
        }
        if (parentX == undefined) {
            parentX = window.screenX;
        }
        var xPos = parentX + parentWidth / 2;
        var yPos = parentY + parentHeight / 2;
        if (newsByeBox) {
            newsByeBox.moveTo(xPos - winW / 2, yPos - winH / 2);
            newsByeBox.focus();
        }
    }
}

function isLoggedIn() {
    var checkUrl = '/testxml/index';
    if (typeof(loggedInUrl) != 'undefined' && loggedInUrl != '') {
    	checkUrl = loggedInUrl;
    }
    var result = false;
    $.ajax({
        url: checkUrl,
        cache: false,
        async: false,
        dataType: 'xml',
        success: function(data) {
            var $dom = $(data);
            result = $dom.find('LOGGEDIN').length > 0;
        }
    });
    return result;
}


