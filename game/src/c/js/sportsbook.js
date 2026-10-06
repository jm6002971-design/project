//var ajaxContainer;

function doRequest(url, postData, container, form, serializedForm, preloader, dataType, callback) {
		var ajaxContainer = "#" + container;
		postData = 'ajax=true&' + postData;
		var formParams = "";
		if (!serializedForm || serializedForm == 'undefined' || typeof(serializedForm) == 'undefined') {
			$("#" + form).find('input').each(function() {
				formParams += $(this).val() + ',';
			});
		} else {
			formParams = $("#"+form).formSerialize();
		}
		if (formParams != '') {
			postData += formParams;
		}
		$(preloader).show();
		var dt = dataType;
		if (dt == undefined || dt == '' || dt == null)  {
			dt = "html";
		}
		$.ajax({
			type: "POST",
			url: url,
			data: postData,
			dataType: dt,
			success: function(html) {
				if (dt == "html") {
					var response = $('<div />').html(html);
					if ($(response).find("#LOGIN_PAGE").length > 0) {
						window.location.href = "/login";
					} else {
						onSuccess(html, ajaxContainer, preloader);
					}
				}
                if (callback != null) {
                    callback(html);
                }
			},
			error: function(x,e){
				if(x.status==0){
					//alert('You are offline!!\n Please Check Your Network.');
				}else if(x.status==404){
					alert('Requested URL not found.');
				}else if(x.status==500){
					alert('Service is temporarily unavailable.');
				}else if(e=='parsererror'){
					alert('Error.\nParsing JSON Request failed.');
				}else if(e=='timeout'){
					alert('Request Time out.');
				}
			}
		});
}

function onSuccess(html, ajaxContainer, preloader) {
	$(preloader).hide();
	$(ajaxContainer).html('');
	$(ajaxContainer).html(html);
}


function showSubmenu(th, submenu) {
	$(th).toggleClass('button_expand');
	$(th).toggleClass('button_collapse');
	if ($(th).is('.button_expand')) {
		$(submenu).hide();
		$(th).closest("li").removeClass("main_menu_active");
	}
	if ($(th).is('.button_collapse')) {
		$(submenu).show();
		$(th).closest("li").addClass("main_menu_active");
	}
}

function makeActive(th, menu) {	
	$("#submenu_bg").find('a').each(function() {
		$(this).removeClass('active');
	});
	$(th).addClass('active');
}

function calculateReturn(a1, a2) {
	return a1*a2;
}

function showBets(url) {
	doRequest(url, '', 'odds_list');
}

function markOdd(th, id, pos, hashName, evId) {
	var curId = '';
	if ($(th).parent().hasClass('active')) {
		$(th).parent().removeClass('odd_number_a');
		$(th).parent().removeClass('odd_number');
		$(th).parent().removeClass('active');
		$(th).parent().addClass('odd_number');
	} else {
		showBubble($("#odd_" + evId));
		setTimeout('hideBubble()', 3000);
		$('#tr_' + pos + '_' + id).find('a').each(
			function() {
				if ($(this.parentNode).attr('class').split(' ')[0] != 'event_name') {
					$(this.parentNode).removeClass('odd_number_a');
					$(this.parentNode).removeClass('odd_number');
					$(this.parentNode).removeClass('active');
					$(this.parentNode).addClass('odd_number');
					if ($(this).attr('href').split('#')[1] == $(th).attr('href').split('#')[1]) {
						$(this.parentNode).removeClass('odd_number');
						$(this.parentNode).addClass('odd_number_a active');
				}
				}
			}
		);
	}
}

function hideBubble() {
	var bubble = $('#bubble');
	var fadeDistance = 1000;
	bubble.animate({
        opacity: 0, // fades out
	    top: '-='+fadeDistance+'px' // animate back the fade distance
	}, 0);
}

function showBubble(th) {
    var offset = th.offset(), // generate the offset position of the hinted element
        bubble = $('#bubble'), // cache the bubble as jQuery
        pointer = $('.pointer', bubble), // cache the pointer of the bubble
        fadeDistance = 50; // the distance from where the bubble will fade in
 
    // append the message to the bubble, position it and slowly fade it in
    bubble
        .find('span.content').html("Added To Slip").end() // insert the new message
        .css({
            top: offset.top - bubble.outerHeight() - pointer.outerHeight() + th.outerHeight()/4 - fadeDistance, // the element offset minus the height of the bubble, minus the height of the pointer, plus one quarter of the height of the element to be on top of it, minus the fading distance
            left: offset.left + th.outerWidth()*0.75 - 42 // the element offset + 3/4 of the element's width to position the bubble at the right side, minus the pixel width to the edge of the triangle
        })
        .animate({
            opacity: 1, // fades it in
            top: '+='+fadeDistance+'px' // moves it in from the fade distance that we substracted above
        }, 0);
 
}

function activateOdd(th) {
	if (th.className == 'odd_number_a active') {
		th.className='odd_number_a active';
	} else {
		th.className='odd_number_a';
	}
}

function deactivateOdd(th) {
	if (th.className == 'odd_number_a active') {
		th.className='odd_number_a active';
	} else {
		th.className='odd_number';
	}
}

function clearOdd(id, oddsId, pos) {
	$("#odd_" + oddsId).parent().parent().find('a').each(
		function() {
			if ($(this.parentNode).attr('class').split(' ')[0] != 'event_name') {
			$(this.parentNode).removeClass('odd_number_a');
			$(this.parentNode).removeClass('odd_number');
			$(this.parentNode).removeClass('active');
			$(this.parentNode).addClass('odd_number');
			}
		}
	);
	removeSlipsCookie(oddsId);
}

function setMenuCookies(id) {
	eraseCookie("SELECTED_SUB_MENU");
	eraseCookie("SELECTED_MENU");
	createCookie("SELECTED_MENU", id);
}

function setSubMenuCookies(id, parent) {
	setMenuCookies(parent);
	eraseCookie("SELECTED_SUB_MENU");
	createCookie("SELECTED_SUB_MENU", id);
}

function removeAllSlipsCookie() {
	$("#odds_list").find('a').each(
		function() {
			if ($(this.parentNode).attr('class').split(' ')[0] != 'event_name') {
			$(this.parentNode).removeClass('odd_number_a');
			$(this.parentNode).removeClass('odd_number');
			$(this.parentNode).removeClass('active');
			$(this.parentNode).addClass('odd_number');
			}
		}
	);
	eraseCookie("SLIPS");
}

function removeSlipsCookie(curId) {
	var slips = readCookie("SLIPS");
	if (typeof(slips) == undefined || slips == null) {
		slips = new Array();
	} else {
		slips = slips.split(",");
	}
	var newSlips = '';
	for(var key in slips) {
		if (slips[key] != curId) {
			newSlips += slips[key] + ',';
		}
	}
	newSlips = newSlips.substring(0, newSlips.length - 1);
	eraseCookie("SLIPS");
	createCookie("SLIPS", newSlips);
}

function setSlipsCookie(curId, newId) {
	var slips = readCookie("SLIPS");
	if (typeof(slips) == undefined || slips == null) {
		slips = new Array();
	} else {
		slips = slips.split(",");
	}
	var newSlips = '';
	for(var key in slips) {
		if (slips[key] != curId) {
			newSlips += slips[key] + ',';
		}
	}
	if (newId != '') {
		newSlips += newId;
	} else {
		newSlips += curId;
	}
	eraseCookie("SLIPS");
	createCookie("SLIPS", newSlips);
}

function markSelectedOdds() {
	var slips = readCookie("SLIPS");
	if (typeof(slips) == undefined || slips == null) {
		return;
	}
	slips = slips.split(",");	
	for(var key in slips) {		
		$("#odd_" + slips[key]).parent().removeClass('odd_number_a');
		$("#odd_" + slips[key]).parent().removeClass('odd_number');
		$("#odd_" + slips[key]).parent().removeClass('active');
		$("#odd_" + slips[key]).parent().addClass('odd_number_a active');
	}	
}

function checkSubmenu(bid, id, url, addParams) {
	if ($("#"+id).find("#competitions_menu").length > 0) {
		showSubmenu(bid, "#"+id);
		return false;
	}	
	doRequest(url, addParams, id, undefined, undefined, undefined);
	showSubmenu(bid, "#"+id);
}
