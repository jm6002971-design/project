function AJA(href, id) {
	this.span=null;
	this.id=id? id: 77700;
	this.handler=null;
	this.href=href;
}
AJA.prototype.handle = function(handler) {
	if (handler) this.handler=handler;
	var span = this.span = document.body.appendChild(document.createElement("SPAN"));
	span.style.display = 'none';
	span.innerHTML = 'Text for IE the ancient browser.<s'+'cript></' + 'script>';
	var href=this.href;
	var id= ++this.id;
	setTimeout(function() {
		var s = span.getElementsByTagName("script")[0];
		s.language = "JavaScript";
		if (s.setAttribute) s.setAttribute('src', href+(href.indexOf('?')>=0 ? '&' : '?')+'id='+id);
		else s.src = href;
	}, 50);
};
AJA.prototype.callback = function(text) {
	var span=this.span;
	if (span) {
		setTimeout(function() {
			span.parentNode.removeChild(span)
		}, 50);
	}
	if (this.handler) this.handler();
};

