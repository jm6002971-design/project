function Casino() {

    var casinoFields = ['loggedInCheckURL', 'width', 'height', 'sessionId',
        'resizable', 'scrollbars', 'walletSelectorElement', 'walletDivElement', 'wallet', 'notLoggedUrl',
        'historyUrl', 'checkSessionForFree', 'gamePrefix', 'nameSeparator'];
    this.p = new Parameter({});

    Casino.prototype.init = function (p) {
        if (p) {
            for (var i in casinoFields) {
                if (casinoFields[i] in p) {
                    this.p.set(casinoFields[i], p[casinoFields[i]]);
                }
            }
        }
    },Casino.prototype.clone = function () {
        var cloneCasino = new Casino();
        cloneCasino.init(this.p.clone());
        return cloneCasino;
    },Casino.prototype.setSize = function (width, height) {
        this.p.set('width', width);
        this.p.set('height', height);
    },Casino.prototype.openHistiry = function (id, _name, p) {
        var name = this.p.get('gamePrefix', p) + this.p.get('nameSeparator', p)
            + _name + this.p.get('nameSeparator', p) + this.getWalletType(p);
        if (checkUserSession(this.p.get('loggedInCheckURL'))) {
            var historyUrl = this.p.get('historyUrl' ,p);
            openCasinoGameWindow(id, historyUrl + "?sessionId=" + id + "&name=" + name,
                "width=" + this.p.get('width', p) +
                    ",height=" + this.p.get('height', p) +
                    ",menubar=0,toolbar=0,status=0," +
                    "resizable=" + this.p.get('resizable', p) + ",scrollbars=" +
                    this.p.get('scrollbars', p) + ",fullscreen=0");
        } else {
            if (this.p.get('notLoggedUrl')) {
                window.location.href = this.p.get('notLoggedUrl');
            } else {
                window.location.href = '/redirect?to=login';
            }
        }
    },Casino.prototype.openForReal = function (_name, p) {
        var name = 'CASINO_' + _name + '_' + this.getWalletType(p);
        var parameters = "width=" + this.p.get('width', p) + ",height=" + this.p.get('height', p) +
            ",menubar=0,toolbar=0,status=0," +
            "resizable=" + this.p.get('resizable', p) + ",scrollbars=" +
            this.p.get('scrollbars', p) + ",fullscreen=0";

        var blankWindow = openPopupWindow('about:blank',name,parameters);
        if (checkUserSession(this.p.get('loggedInCheckURL'))) {
            openCasinoGameWindowNew(name, "/games/game" + "?name=" + name + "&real=1&walletCCode=" + this.getWalletType(p)
                , "width=" + this.p.get('width', p) + ",height=" + this.p.get('height', p) +
                    ",menubar=0,toolbar=0,status=0," +
                    "resizable=" + this.p.get('resizable', p) + ",scrollbars=" +
                    this.p.get('scrollbars', p) + ",fullscreen=0",blankWindow);
        } else {
            if (this.p.get('notLoggedUrl')) {
                window.location = this.p.get('notLoggedUrl');
                blankWindow.location.replace(this.p.get('notLoggedUrl'));
            } else {
                window.location = '/redirect?to=login';
                blankWindow.location.replace('/redirect?to=login');
            }
        }
    },Casino.prototype.openForFun = function (_name, p) {
        var needToCheckSession = this.p.get('checkSessionForFree', p);
        if(!needToCheckSession || checkUserSession(this.p.get('loggedInCheckURL'))){
            var name = 'CASINO_' + _name + '_FREE';
            openCasinoGameWindow(name, "/games/game" + "?name=" + name + "&walletCCode=FREE"
                , "width=" + this.p.get('width', p) + ",height=" + this.p.get('height', p) +
                    ",menubar=0,toolbar=0,status=0," +
                    "resizable=" + this.p.get('resizable', p) + ",scrollbars=" +
                    this.p.get('scrollbars', p) + ",fullscreen=0");
        } else {
            if (this.p.get('notLoggedUrl')) {
                window.location.href = this.p.get('notLoggedUrl');
            } else {
                window.location.href = '/redirect?to=login';
            }
        }
    },Casino.prototype.openForRealBoG = function (_bogID, _playerName, _PlayerNick,
                                                  _BGPath,_walletcode, title, cur, min, max) {
        if (!checkUserSession(this.p.get('loggedInCheckURL'))) {
            if (this.p.get('notLoggedUrl')) {
                window.location.href = this.p.get('notLoggedUrl');
            } else {
                window.location.href = '/redirect?to=login';
            }
            return;
        }
        var login = getURLtoOpen(5, _bogID,_playerName, _PlayerNick, _walletcode);
        if(login == "true")
        {
            var bal = getURLtoOpen(2,_bogID, _playerName, "2", _walletcode);
            var win = window.open("", _playerName+_bogID, "scrollbars=1,status=1,toolbar=0," +
                "menubar=1,location=1,resizable=1, width=800, height=600");
            win.document.title = _PlayerNick;
            var url="";
            var balance = 0;
            $(win.document).ready( function(){
                var BalEntered = getBalance(win,bal,_bogID, _playerName,_walletcode,
                    6, _BGPath, title, cur, min, max);
            });

            win.onunload = function(){
                getURLtoOpen(7, _bogID, _playerName, "4",_walletcode);
            };
        }
    },Casino.prototype.openForFunBoG = function (_bogID, _playerName, _PlayerNick,
                                                 _BGPath, _walletcode, title, cur, min, max) {
        if (!checkUserSession(this.p.get('loggedInCheckURL'))) {
            if (this.p.get('notLoggedUrl')) {
                window.location.href = this.p.get('notLoggedUrl');
            } else {
                window.location.href = '/redirect?to=login';
            }
            return;
        }
        var login = getURLtoOpen(1, _bogID,_playerName, _PlayerNick, _walletcode);
        if(login == "true")
        {
            var bal = 1000;
            var win = window.open("", _playerName+_bogID, "scrollbars=1,status=1,toolbar=0," +
                "menubar=1,location=1,resizable=1, width=800, height=600");
            var url="";
            var balance = 0;
            $(win.document).ready( function(){
                win.document.body.style.background_image = _BGPath.toLowerCase();

                var BalEntered = getBalance(win,bal,_bogID, _playerName,_walletcode,
                    3, _BGPath, title, cur, min, max);
            });
            win.onunload = function(){
                getURLtoOpen(4, _bogID, _playerName, "4",_walletcode);
            };
        }
    };
    function getBalance(winmain,bal,_bogID, _playerName, walletcode, code, bgPath,
                        _title, cur, min, max)
    {
        var divback = winmain.document.createElement("DIV");
        //winmain.style.background_color = "#000000";
        divback.setAttribute("id","backlayout");
        divback.style.position = "absolute";
        divback.style.zIndex = "0";
        divback.style.opacity = "0.5";
        divback.style.background_color = "#000000";
        divback.style.top = "1.5%";
        divback.style.left = "1.5%";
        divback.style.width = "97%";
        divback.style.height = "97%";

        var img = winmain.document.createElement("IMG");
        img.style.background_image = bgPath.toLowerCase();
        img.setAttribute("src", bgPath.toLowerCase());
        img.style.top = "0%";
        img.style.left = "0%";
        img.style.width = "100%";
        img.style.height = "100%";
        divback.appendChild(img);

        var div_bg = winmain.document.createElement("DIV");
        div_bg.setAttribute("id","bglayout");
        div_bg.style.position = "absolute";
        div_bg.style.position = "absolute";
        div_bg.style.zIndex = "200";
        div_bg.style.background_color = "yellow";
        div_bg.style.width = "300px";
        div_bg.style.height = "200px";
        div_bg.style.top = "25%";
        div_bg.style.left = "25%";


        winmain.document.body.appendChild(divback);
        //winmain.document.body.appendChild(div_bg);

        var div = winmain.document.createElement("DIV");
        div.setAttribute("id","frontlayout");
        div.style.backgroundimage = "url(c/i/BOGBuyCredits.png)";
        div.style.position = "absolute";
        div.style.zIndex = "200";
        div.style.background_color = "grey";
        div.style.width = "300px";
        div.style.height = "200px";
        div.style.top = "25%";
        div.style.left = "25%";

        var img_main = winmain.document.createElement("IMG");
        img_main.setAttribute("src", "http://"+document.location.hostname+":"+
            document.location.port+"/c/i/BOGBuyCredits.png");
        img_main.style.top = "0%";
        img_main.style.left = "0%";
        img_main.style.width = "100%";
        img_main.style.height = "100%";
        div.appendChild(img_main);

        var title = winmain.document.createElement("DIV");
        title.style.position = "absolute";
        title.style.top = "-10px";
        title.style.left = "110px";
        title.innerHTML = "<p>"+_title+"</p>";
        div.appendChild(title);

        var div1 = winmain.document.createElement("DIV");
        div1.setAttribute("id", "textID");
        div1.style.position = "absolute";
        div1.style.top = "35px";
        div1.style.left = "17px";
        div1.innerHTML= "<p>"+cur+" 1</p>";
        div.appendChild(div1);

        var b1 = parseFloat(bal);
        if(b1>65000)
            b1 = 65000;
        var div2 = winmain.document.createElement("DIV");
        div2.setAttribute("id", "textID1");
        div2.style.position = "absolute";
        div2.style.top = "60px";
        div2.style.left = "17px";
        div2.innerHTML= "<p>"+min+" 1</p>";
        div.appendChild(div2);
        var div3 = winmain.document.createElement("DIV");
        div3.setAttribute("id", "textID2");
        div3.style.position = "absolute";
        div3.style.top = "85px";
        div3.style.left = "17px";
        div3.innerHTML= "<p>"+max+" "+String(b1)+"</p>";
        div.appendChild(div3);
        var slider = winmain.document.createElement("INPUT");
        slider.setAttribute("type", "range");
        slider.setAttribute("id", "BuyIn");
        if(b1>0){
            slider.setAttribute("min", "1");
            slider.setAttribute("value", "1");
            slider.setAttribute("step", "1");
            slider.setAttribute("max", String(b1));
        }
        else{
            slider.setAttribute("min", "0");
            slider.setAttribute("value", "0");
            slider.setAttribute("step", "0");
            slider.setAttribute("max", "0");

        }
        slider.style.position = "absolute";
        slider.style.top = "130px";
        slider.style.left = "10px";
        $(slider).bind('input', function() {
            winmain.document.getElementById("textID").innerHTML="<p>"+cur+""+
                winmain.document.getElementById("BuyIn").value+"</p>";
        });
        div.appendChild(slider);
        var button = winmain.document.createElement("BUTTON");
        button.innerHTML = "OK";
        button.setAttribute("value", "BuyInBtn");
        button.setAttribute("id", "BuyInBtn");
        button.setAttribute("type", "button");
        button.setAttribute("class", "close");
        button.style.position = "absolute";
        button.style.left = "110px";
        button.style.top = "160px";
        button.style.width = "80px";
        button.style.height = "23px";
        $(button).bind('click', function(){
            winmain.document.getElementById("BuyInBtn").disabled = true;
            var balance = winmain.document.getElementById("BuyIn").value;
            winmain.document.getElementById("BuyInBtn").visibility = 'hidden';
            var url = getURLtoOpen(code,_bogID, _playerName, (balance), walletcode);
            if(url.length==0)
                url = getURLtoOpen(code, _bogID, _playerName, (balance), walletcode);
            prepareFrame(winmain, url);
            //win.close();
        });
        div.appendChild(button);

        var buttonX = winmain.document.createElement("BUTTON");
        buttonX.innerHTML = "X";
        buttonX.setAttribute("value", "BuyInBtn");
        buttonX.setAttribute("id", "BuyInBtn");
        buttonX.setAttribute("type", "button");
        buttonX.setAttribute("class", "submit");
        buttonX.style.position = "absolute";
        buttonX.style.opacity = "0.1";
        buttonX.style.left = "270";
        buttonX.style.top = "6px";
        buttonX.style.width = "20px";
        buttonX.style.height = "22px";
        $(buttonX).bind('click', function(){
            winmain.close();
        });
        div.appendChild(buttonX);

        winmain.document.body.appendChild(div);
        //div.show();

    }
    function prepareFrame(win,_url) {
        console.log("Preparing frame");
        var divback = win.document.createElement("DIV");
        divback.setAttribute("id","Game");
        divback.style.position = "absolute";
        divback.style.zIndex = "1000";
        divback.style.opacity = "1";
        divback.style.background_color = "#ff0000";
        divback.style.left = "1.5%";
        divback.style.top = "1.5%";
        divback.style.width = "97%";
        divback.style.height = "97%";
        var ifrm = win.document.createElement("IFRAME");
        ifrm.setAttribute("id", "frameid");
        ifrm.setAttribute("src", _url);
        ifrm.style.position = "absolute";
        ifrm.style.opacity = "1";
        ifrm.style.left = "0px";
        ifrm.style.top = "0x";
        ifrm.style.width = "100%";
        ifrm.style.height = "100%";
        divback.appendChild(ifrm);
        win.document.body.appendChild(divback);
        console.log("completed");
    }

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }
    function getURLtoOpen(funcID,bogID,playerName,param1, param2){
        var result = false;
        var variab = "?funcID="+funcID+"&bogID="+bogID+"&playerName="+playerName+"&param_="+param1+"&param="+param2;
        $.ajax({
            type: "GET",
            url: "/BoGHelper"+variab,
            cache: false,
            async: false,
            dataType: "text",
            success: function(data) {
                result = data;
            }
        });
        return result;
    }

    this.getWalletType = function(p){
        if(p && 'wallet' in p){
            return p['wallet'];
        }
        if(this.p.get('walletSelectorElement')){
            var walletElement = document.getElementById(this.p.get('walletSelectorElement'));
            if(walletElement && walletElement.selectedIndex != -1){
                return walletElement.options[walletElement.selectedIndex].value;
            }
        } else if(this.p.get('walletDivElement')){
            var walletElement = document.getElementById(this.p.get('walletDivElement'));
            for (var childItem in walletElement.childNodes) {
                if (walletElement && walletElement.childNodes[childItem].nodeType == 1)
                    return walletElement.childNodes[childItem].value;
            }
        }
        return this.p.get('wallet');
    };

    function checkUserSession(url) {
        var checkUrl = url != '' ? '/testxml' + url : '/testxml/casino/index';
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

    function openCasinoGameWindow(_id, url, params) {
        var winName = 'a_' + sid.replace(/-/g, '_') + '_' + _id.replace(/[^\w]/g, '_');
        var gameWin = window.open("", winName, params);
        if (! gameWin || ! gameWin.document.getElementById('flash_container')) {
            gameWin = window.open(url, winName, params);
        }
        if (gameWin)gameWin.focus();
    }

    function openPopupWindow(url,_id, params){
        var winName = 'a_' + sid.replace(/-/g, '_') + '_' + _id.replace(/[^\w]/g, '_');
        return window.open(url, winName, params);
    }

    function openCasinoGameWindowNew(_id, url, params,gameWin) {
        if (! gameWin || ! gameWin.document.getElementById('flash_container')) {
            gameWin.location.replace(url);
        }
        if (gameWin)gameWin.focus();
    }

    function Parameter(list) {

        this.list = list;

        this.get = function(name, p) {
            if (name && name != '') {
                if (p && (name in p)) {
                    return p[name];
                } else {
                    return this.list[name];
                }
            }
        },this.set = function(name, value) {
            if (name && name != '') {
                this.list[name] = value;
            }
        },this.clone = function() {
            var cl = {};
            for (var i in this.list) {
                cl[i] = this.get(i);
            }
        }
    }

}

var casino = new Casino();
