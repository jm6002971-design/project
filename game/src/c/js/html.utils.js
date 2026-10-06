var HtmlUtils = {

    setCookie:function (name, value, expires, path, domain, secure) {
        document.cookie = name + "=" + encodeURIComponent(value) +
                ((expires) ? "; expires=" + expires : "") +
                ((path) ? "; path=" + path : "") +
                ((domain) ? "; domain=" + domain : "") +
                ((secure) ? "; secure" : "");
    }, eraseCookie:function (name) {
        HtmlUtils.createCookie(name, "", -1);
    }, createCookie:function (name, value, days) {
        var expires;
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = date.toGMTString();
        }
        HtmlUtils.setCookie(name, value, expires, "/");
    }, readCookie:function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }, printTo:function printTo(elementId, text) {
        try {
            var elementById = document.getElementById(elementId);
            if (elementById) elementById.innerHTML = text;
        } catch (e) {
            console.log(elementId);
        }
    }, printToInput:function (formName, elementName, text) {
        try {
            var elementById = document[formName][elementName];
            if (elementById) elementById.value = text;
        } catch (e) {
            console.log('[' + formName + '][' + elementName + ']');
        }
    }, hideForId:function (elementId) {
        var elementById = document.getElementById(elementId);
        if (elementById) elementById.style.display = 'none';
    }, addClass:function (elementId, className) {
        var el = document.getElementById(elementId);
        if (el) {
            var oldClasses = el.getAttribute('class');
            if (!oldClasses || oldClasses == '') {
                oldClasses = el.getAttribute('className');
            }
            if (!oldClasses) {
                oldClasses = '';
            }
            oldClasses += ' ' + className;
            el.setAttribute('class', oldClasses);
            el.setAttribute('className', oldClasses);
        }
    }, clearClass:function clearClass(elementId) {
        var el = document.getElementById(elementId);
        if (el) {
            el.setAttribute('class', '');
            el.setAttribute('className', '');
        }
    }, showForId:function (elementId) {
        var elementById = document.getElementById(elementId);
        if (elementById) elementById.style.display = '';
    }, wrapTo:function (text, tagName) {
        return '<' + tagName + '>' + text + '</' + tagName + '>';
    }, createTextArea:function (parentId, text, name, cols, rows, id) {
        var taEl = document.createElement('textarea');
        taEl.setAttribute('class', 'textarea_common');
        taEl.setAttribute('className', 'textarea_common');
        if (id)taEl['id'] = id;
        taEl['name'] = name;
        taEl['cols'] = cols;
        taEl['rows'] = rows;
        if (text && text.length > 0) {
            taEl.innerHTML = text;
        }
        document.getElementById(parentId).appendChild(taEl);
    }, getElementsByClassName:function (classname, node) {
        if (!node) node = document.getElementsByTagName("body")[0];
        var a = [];
        var re = new RegExp('\\b' + classname + '\\b');
        var els = node.getElementsByTagName("*");
        for (var i = 0, j = els.length; i < j; i++)
            if (re.test(els[i].className))a.push(els[i]);
        return a;
    }
};