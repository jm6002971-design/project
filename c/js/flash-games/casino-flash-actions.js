function GoToHelp() {
	openPageForCasino('/client-redirect.html?to=' + helpHandler);
}

function GoToFAQ() {
    openPageForCasino('/redirect?to=helpcategories&sid=' + sid, '');
}
function GoToContactUs() {
    openPageForCasino('/redirect?to=contactus&sid=' + sid, '');
}
function GoToCashierBuy() { 
  if (closeAfterCashier == 'true') {
    CloseGame();
  }
  openPageForCasino(depositUrl, '');
}
function GoToCashierBalance() {
  if (closeAfterCashier == 'true') {
    CloseGame();
  }
  openPageForCasino('/redirect?to=cashierbalance&sid=' + sid, '');
}
function GoToCashierDeposit() {
  if (closeAfterCashier == 'true') {
    CloseGame();
  }
  openPageForCasino(depositUrl, '');
}
function GoToCashierProfile() {
    openPageForCasino('/redirect?to=cashierinfo&sid=' + sid, '');
}
function GoToCashierReferral() {
    openPageForCasino('/redirect?to=cashierreferrals&sid=' + sid, '');
}
function GoToViewHistory() {
    if (game.indexOf("for Free") > 0) return;
     openPageForCasino('/redirect?to=casinogamehistoryperiod&sid=' + sid + '&name=' + game + '&currentDate=true', '');
}
function GoToHistory() {
    if (game.indexOf("for Free") > 0) return;
    openPageForCasino('/redirect?to=casinogamehistoryperiod&sid=' + sid + '&name=' + game + '&currentDate=true', '');
}
function GoToSSLCertificateInfo() {
    openPageForCasino('/redirect?to=ssl-certificate-info-error&sid=' + sid, '');
}

function GoToLogin() {
    if (playerIsLoggedIn) {
        var newGameName;
        if (game.indexOf("_FREE") != -1) {
            newGameName = game.substring(0, game.indexOf("_FREE")) + "_" + walletType;
        }
        window.location.href = "/games/game?sid=" + sid + "&name=" + newGameName + "&action=play_for_real";
    } else {
        openPageForCasino('/redirect?to=login', '');
    }
}

function CloseGame() {
    window.top.close();
}

window.Exit = CloseGame;

function GoToRedirector(params) {
    window.location.href = "/redirect?to=gameactionshandler&sid=" + sid + "&"+params.replace(/^\?/, '');
}

function openPageForCasino(link, params) {
    if (link) {
        if (params) {
            var separator = (link.indexOf("?") == -1) ? "?" : "&";
            link += separator + params;
        }
        window.open(link, "", "scrollbars=1,status=1,toolbar=1,directories=1," +
                "menubar=1,location=1,resizable=1");
    }
}

function setFocus() {
    window.focus();
    if (window.top.opener) window.top.opener.setFocusTo(window.top);
}

function resizeWindow(x, y) {
    window.resizeTo(x, y);
}
