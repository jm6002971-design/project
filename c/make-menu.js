//JavaScript'овая реализация построения меню в agents,affiliators

var activateMenuName = "empty";
var NAME_SUBMENU = 0;
var VALUE_SUBMENU = 1;
var subMenuState = [['account',false],['Agents',false],['affistatistics',false]];

function makeMenu(){	
	loadConfigMenu();	
	for(var i=0;i<subMenuState.length;i++){
		setItemsMenuVisible(document.getElementById(subMenuState[i][NAME_SUBMENU]),subMenuState[i][VALUE_SUBMENU]);
	}
	saveConfigMenu();
}

function loadConfigMenu(){
	var cookie;
	for(var i=0;i<subMenuState.length;i++){
		cookie = getCookie(subMenuState[i][NAME_SUBMENU]);
		subMenuState[i][VALUE_SUBMENU] = (cookie == 'true');	
	}
	//activate submenu must be show
	setVisibleByNameSubMenu(activateMenuName,true);
}

function saveConfigMenu(){
	var cookie;
	for(var i=0;i<subMenuState.length;i++){
		setCookie(subMenuState[i][NAME_SUBMENU],subMenuState[i][VALUE_SUBMENU].toString(),"","/");
	}
}

function setItemsMenuVisible(obj,visible){
	if(!obj) return;
	childs = obj.children;
	if(!childs) return;
	for(var i=1;i<childs.length;i++){		
		childs.item(i).style.display = (visible) ? "" : "none";	
	}
}

function handlerMouseClick(itemName){
	obj = document.getElementById(itemName);
	setItemsMenuVisible(obj,!subMenuVisible(obj));
	setVisibleByNameSubMenu(itemName,subMenuVisible(obj));
	saveConfigMenu();
}

function subMenuVisible(submenu){
	if(!submenu) return false;
	return (submenu.children.item(1).style.display != 'none');
}

function setVisibleByNameSubMenu(name,value){
	for(var i=0;i<subMenuState.length;i++){
		if(name == subMenuState[i][NAME_SUBMENU])
			subMenuState[i][VALUE_SUBMENU] = value;
	}
}






