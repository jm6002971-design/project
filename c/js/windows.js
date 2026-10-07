function WindowsConstants() {
}
WindowsConstants.WINDOWS_STORAGE = "windows";


function WindowsParams() {
}
WindowsParams.DEFAULT_WIDTH = 884;
WindowsParams.DEFAULT_HEIGHT = 663;
WindowsParams.TYPE_GAME = "game";
WindowsParams.TYPE_LOBBY = "lobby";
WindowsParams.TYPE_MAIN_LOBBY = "MAIN_LOBBY";


function Windows() {

    this.windowsNamesList = new Array();
    this.windowsList = new Object();
    this.desktopWidth;
    this.desktopHeight;
    this.availLeft;
    this.availTop;
    this.windowsCount;
    this.storage = WindowsConstants.WINDOWS_STORAGE;

    Windows.prototype.init =
            function(windowsList, availWidth, availHeight, availLeft, availTop) {
			    this.desktopWidth = availWidth;
			    this.desktopHeight = availHeight;
			    this.availLeft = availLeft;
			    this.availTop = 0;
			    this.loadWindows();
                //this.addToPersistentStorage(this.storage, "");
            },

            Windows.prototype.loadWindows = function() {
                //if (Storage.active != undefined) {
                    var val = getCookie(this.storage);
                    if (val != '' && val != null) {
                        this.windowsNamesList = $.evalJSON(val);
                        if (this.windowsNamesList != null) {
						    this.windowsCount = this.windowsNamesList.length;
					    }
                    }
                //}
            },

            Windows.prototype.setStorageName = function(name) {
            	this.storage = name;
            },

            Windows.prototype.setDefaultSizeToAll = function() {
                for (var i = 0; i < this.windowsNamesList.length; i++) {
                	var windowInst = this.getWindowByName(this.windowsNamesList[i].name);
                	if (windowInst != null) {
						this.setSize(windowInst, WindowsParams.DEFAULT_WIDTH, WindowsParams.DEFAULT_HEIGHT, true);
					}
                }
            },

            Windows.prototype.setPosition = function(windowInst, x, y) {
            	//console.log("[Windows.setPosition]: " + windowName);
               	//var windowInst = window.open("", windowName);
				windowInst.moveTo(x + this.availLeft, y + this.availTop);
				windowInst.focus();
            },

            Windows.prototype.setSize = function(windowInst, w, h, inner) {
               	//var windowInst = window.open("", name, "");
               	//var windowInst = window.open("", windowName);
               	try {
	                if (inner) {
	                    var outerWidth = windowInst.outerWidth;
	                    var outerHeight = windowInst.outerHeight;
	                    if (!outerHeight || !outerWidth) {
	                        windowInst.resizeTo(w, h);
	                        outerHeight = h;
	                        outerWidth = w;
	                    }
	                    var innerWidth = windowInst.document.documentElement.clientWidth;
	                    var innerHeight = windowInst.document.documentElement.clientHeight;
	                    var dx = Math.abs(outerWidth - innerWidth);
	                    var dy = Math.abs(outerHeight - innerHeight);
	                    windowInst.resizeTo(w + dx, h + dy);
	                } else {
                        windowInst.resizeTo(w, h);
	                }
	            } catch (e) {
	            	//alert(e.name)
	            	console.log(e.name);
	            }
				//windowInst.focus();
            },

            Windows.prototype.setSizeByWindowName = function(name, w, h, inner) {
            	//console.log("[Windows.setSizeByWindowName]: " + name);
               	var windowInst = window.open("", name, "");
               	try {
	               	if (windowInst.document.documentElement.clientWidth == w && windowInst.document.documentElement.clientHeight == h) {
	               		return;
	               	}
               	} catch (e) {
               	}
				var topPos = 0;
				if ((windowInst.screenTop + h) > (this.availTop + this.desktopHeight)) {
					this.setPosition(windowInst, windowInst.screenLeft, this.desktopHeight - h);
					topPos = this.desktopHeight - h;
				}
				if ((windowInst.screenLeft + w) > (this.availLeft + this.desktopWidth)) {
					this.setPosition(windowInst, this.desktopWidth - w, windowInst.screenTop);
				}
				try {
                    this.setSize(windowInst, w, h, inner)
				} catch (e) {
				}
				windowInst.focus();
            },

            Windows.prototype.closeAll = function() {
            	try {
	                for (var i = 0; i < this.windowsNamesList.length; i++) {
	                	if (this.windowsNamesList[i].type != "MAIN_LOBBY") {
			               	var windowInst = this.getWindowByName(this.windowsNamesList[i].name);
		                	if (windowInst != null) {
			                	windowInst.close();
			                }
		                }
	                }
	                } catch (e) {
	            }
            },

            Windows.prototype.putWindow = function(window, type) {
			    this.loadWindows();
				//alert("Put: " + this.windowsList);
                if (window != null && window != undefined && window.name != undefined)  {
                    var name = window.name;
                    var hasElement = false;
                    for (var i = 0; i < this.windowsNamesList.length; i++) {
                        if (this.windowsNamesList[i].name == name) {
                            hasElement = true;
                        }
                    }
                    if (!hasElement) {
                        this.windowsNamesList.push({name :name, type: type});
                        this.windowsCount = this.windowsNamesList.length;
                    }
                    this.windowsList[name] = window;
                    this.addToPersistentStorage(this.storage, this.windowsNamesList);
                }
            },

            Windows.prototype.removeWindow = function(name) {
			    this.loadWindows();
				//alert("Before: " + this.windowsList)
            	var newWindowsArray = new Array();
            	for (var i = 0; i < this.windowsNamesList.length; i++) {
            		if (this.windowsNamesList[i].name != name && typeof(this.windowsNamesList[i].name) == "string") {
					    newWindowsArray.push(this.windowsNamesList[i]);
            		}
            	}
				this.windowsNamesList = newWindowsArray;
				//alert("After: " + this.windowsList)
				this.windowsCount = newWindowsArray.length;
                this.addToPersistentStorage(this.storage, this.windowsNamesList);
            },

            Windows.prototype.getWindowByName = function (windowName) {
                var wnd = this.windowsList[windowName];
                if (!wnd) {
	            	//console.log("[Windows.getWindowByName]: " + windowName);
                    wnd = window.open("", windowName);
                    if (wnd.location.href == "about:blank" || wnd.location.href == "about:Tabs") {
                        wnd.close();
                        return null;
                    }
                }
                return wnd.closed ? null : wnd;
            },

            Windows.prototype.changeTableName = function (oldName, newName) {
            	if (oldName && newName) {
	                for (var i = 0; i < this.windowsNamesList.length; i++) {
	                	if (this.windowsNamesList[i].name == oldName) {	                		
	                		this.windowsNamesList[i].name = newName;
	                		break;
	                	}
	                }
	                this.addToPersistentStorage(this.storage, this.windowsNamesList);
                }
            },

            Windows.prototype.getWindowByType = function (windowType) {
                for (var i = 0; i < this.windowsNamesList.length; i++) {
                   var windowsName = this.windowsNamesList[i];
                   if (windowsName.type == windowType) {
                       return this.getWindowByName(windowsName.name);
                   }
                }
                return null;
            },

            Windows.prototype.checkWindows = function() {
                this.loadWindows();
//            	var newWindowsArray = new Array();
//                for (var i = 0; i < this.windowsNamesList.length; i++) {
//	               	var windowInst = this.getWindowByName(this.windowsNamesList[i].name);
//                	if (windowInst != null) {
//					    newWindowsArray.push(this.windowsNamesList[i]);
//				    }
//				}
//				this.windowsNamesList = newWindowsArray;
//				this.windowsCount = newWindowsArray.length;
//                this.addToPersistentStorage(this.storage, this.windowsNamesList);
            },

            Windows.prototype.tile = function() {
			    this.loadWindows();
                var games = new Array();
                for (var i = 0; i < this.windowsNamesList.length; i++) {
                    if (this.windowsNamesList[i].type == WindowsParams.TYPE_GAME) {
                        games.push(this.windowsNamesList[i].name);
                    }
                }
                var count = games.length;
                if (count <= 1) {
                	return;
                }
            	var cols = Math.ceil(Math.sqrt(count));
            	var rows = Math.ceil(count/cols);
            	var wh = WindowsParams.DEFAULT_WIDTH/WindowsParams.DEFAULT_HEIGHT;
            	var hw = WindowsParams.DEFAULT_HEIGHT/WindowsParams.DEFAULT_WIDTH;
            	var newH = this.desktopHeight/rows;
            	var newW = newH*wh;
            	var inner = false;
            	if (cols > rows) {
	            	newW = this.desktopWidth/cols;
	            	newH = newW*hw;
            		if (cols == 2) {
            			if (newW > WindowsParams.DEFAULT_WIDTH) {
            				newW = WindowsParams.DEFAULT_WIDTH;
			            	newH = WindowsParams.DEFAULT_HEIGHT;
			            	inner = true;
            			}
            		}
            	}
            	var j = 0, k = 0;
            	for (var i in games) {
	               	var windowInst = this.getWindowByName(games[i]);
	              	//alert(windowInst + " = " + windowInst.name)
                	if (typeof(windowInst) != 'undefined' && windowInst != null) {
	                	this.setPosition(windowInst, newW*k, j*newH);
						this.setSize(windowInst, newW, newH, inner);
	                	k++;
	                	if (k >= cols) {
	                		k = 0;
	                		j ++;
	                	}
                	} else {
                		windowInst.close();
                	}
				}            	
			},

            Windows.prototype.cascade = function() {
                var stepX = 0;
                var stepY = 0;
                var j = 0;
			    this.loadWindows();
                var games = new Array();
                for (var i = 0; i < this.windowsNamesList.length; i++) {
                    if (this.windowsNamesList[i].type == WindowsParams.TYPE_GAME) {
                        games.push(this.windowsNamesList[i].name);
                    }
                }
                var count = games.length;
                if (count <= 1) {
                	return;
                }
                var desktopWidth = screen.availWidth;
                var desktopHeight = screen.availHeight;
               	for (var i in games) {
                    //var windowInst = this.getWindowByName(games[i]);
                    /*var windowInst;
                    if (typeof(games[i]) == 'string') {
                    	windowInst = window.open("", games[i]);
                    }*/
	               	var windowInst = this.getWindowByName(games[i]);
                	if (windowInst != null) {
						windowInst.resizeTo(WindowsParams.DEFAULT_WIDTH, WindowsParams.DEFAULT_HEIGHT);
						var dx = Math.abs(WindowsParams.DEFAULT_WIDTH - windowInst.document.documentElement.clientWidth);
						var dy = Math.abs(WindowsParams.DEFAULT_HEIGHT - windowInst.document.documentElement.clientHeight);
						if (count > 1) {
			               	stepX = (desktopWidth - WindowsParams.DEFAULT_WIDTH - dx)/(count - 1);
			                stepY = (desktopHeight - WindowsParams.DEFAULT_HEIGHT - dy)/(count - 1);
						}
						windowInst.resizeTo(WindowsParams.DEFAULT_WIDTH + dx, WindowsParams.DEFAULT_HEIGHT + dy);
						//this.setSize(windowInst, WindowsParams.DEFAULT_WIDTH, WindowsParams.DEFAULT_HEIGHT, true);
		               	this.setPosition(windowInst, stepX*j, stepY*j);
		               	j++;
	            	}
                }
            },

            Windows.prototype.addToPersistentStorage = function(name, arr) {
                if (this.windowsNamesList != null) {
                	var json = null;
                    try {
                        json = $.toJSON(arr);
                    } catch (e) {
                        setCookie(name,"0",null, "/");
                        return;
                    }
                    //setTimeout('setCookie(\'' + name + '\',\'' + json + '\',' + 'null,' + '\'/\'' + ')', 200);
                    setCookie(name, json, null, "/");
                } else {
                    setCookie(name,"0",null, "/");
                }
            },

            Windows.prototype.getWindows = function() {            		
            	this.loadWindows();
                return this.windowsNamesList;
            }
}