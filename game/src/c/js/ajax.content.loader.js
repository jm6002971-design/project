var AjaxPageLoader = {

    success:function (data, updatedAreaIds, changeTitle, backfn) {
        AjaxPageLoader.Preloader.stop();
        var $data = $(data);
        for (var i in updatedAreaIds) {
            var updatedAreaId = updatedAreaIds[i];
            if (typeof updatedAreaId != "function") {
                var areaId = '#' + updatedAreaId;
                var area = $data.find(areaId);
                if (area.length > 0) {
                    area.each(function () {
                        console.log('>>>> ' + areaId);
                        console.log($(this).html());
                        $(areaId).html($(this).html());
                    });
                }
            }
        }
        if (changeTitle) {
            var VRegExp = new RegExp(/<title>([.\s\S]*)<\/title>/);
            var VResult = VRegExp.exec(data);
            if (VResult && VResult.length) {
                if (VResult.length > 1) document.title = VResult[1];
            }
        }
        if (backfn) {
            backfn.call();
        }
    }, submitForm:function (formName, updatedAreaIds, backfn) {
        var $form = $('form[name=' + formName + ']');
        try {
            $form.ajaxSubmit({
                dataType:'html',
                success:function (data) {
                    AjaxPageLoader.success(data, updatedAreaIds, false, backfn);
                },
                error:function (x, e) {
                    console.log('ajax submit error');
                    console.log(e);
                    console.log(x);
                }
            });
        } catch (e) {
            console.log('ajax submit exception');
            console.log(e);
        }
        return false;
    }, processGet:function (url, updatedAreaIds, parameters, saveUrl, backfn, changeTitle) {
        try {
            AjaxPageLoader.Preloader.start();
            $.ajax({
                type:"POST",
                url:url,
                data:parameters,
                dataType:'html',
                success:function (data) {
                    AjaxPageLoader.success(data, updatedAreaIds, changeTitle, backfn);
                    if (saveUrl) {
                        request.baseLink = url;
                    }
                },
                error:function (x, e) {
                    console.log('ajax submit error');
                    console.log(e);
                    console.log(x);
                }
            });
        } catch (e) {
            console.log('ajax submit exception');
            console.log(e);
        }
        return false;
    }, Preloader:{
        message:'wait please...',
        img:null,
        containerId:null,
        start:function () {
            var PR = AjaxPageLoader.Preloader;
            if (PR.containerId && document.getElementById(PR.containerId)) {
                if (PR.img) {
                    document.getElementById(PR.containerId).innerHTML =
                            '<img src="' + PR.img + '" alt="' + PR.message + '" />';
                } else {
                    document.getElementById(PR.containerId).innerHTML =
                            '<span>' + PR.message + '</span>';
                }
                HtmlUtils.showForId(PR.containerId);
            }
        }, stop:function () {
            var PR = AjaxPageLoader.Preloader;
            if (PR.containerId && document.getElementById(PR.containerId)) {
                document.getElementById(PR.containerId).innerHTML = '';
                HtmlUtils.hideForId(PR.containerId);
            }
        }
    }, PageLoader:{

        updatedAreaIds:null,
        parameters:null,
        backfn:null,

        init:function (updatedAreaIds, backfn, parameters) {
            AjaxPageLoader.PageLoader.updatedAreaIds = updatedAreaIds;
            AjaxPageLoader.PageLoader.backfn = backfn;
            AjaxPageLoader.PageLoader.parameters = parameters;
        }, load:function (url) {
            try {
                var parts = url.split('/');
                var result = '';
                var count = 0;
                for (var i = parts.length - 1; i >= 0; i--) {
                    if (count > 0) {
                        var separator = count < parts.length - 1 ? '#' : '/';
                        result = parts[i] + separator + result;
                    } else {
                        result = parts[i];
                    }
                    count++;
                }
                window.location.href = result;
            } catch (e) {
                console.log('ajax submit exception');
                console.log(e);
            }
            return false;
        }, checkAjaxRedirect:function () {
            var winHref = window.location.href;
            var parts = winHref.split('#');
            var savedUrl = HtmlUtils.readCookie('ajax_redirect_url');
            if (parts && parts.length > 1) {
                var lastPart = parts[parts.length - 1];
                var testText = '.html';
                if (lastPart.lastIndexOf(testText) == lastPart.length - testText.length) {
                    if (!(savedUrl && savedUrl.length > 0)) {
                        var actualUrl = winHref.split('#').join('/');
                        HtmlUtils.createCookie('ajax_redirect_url', actualUrl, 2);
                        document.location.reload();
                        return;
                    }
                }
            }
            if (savedUrl && savedUrl.length > 0) {
                request.baseLink = unescape(savedUrl);
                HtmlUtils.eraseCookie('ajax_redirect_url');
            }
        }, actionHistory:function () {
            var hash = location.hash;
            if (hash && hash.length > 0) {
                var pathname = location.pathname;
                var actualUrl = (pathname + hash).split('#').join('/');
                AjaxPageLoader.processGet(actualUrl,
                        AjaxPageLoader.PageLoader.updatedAreaIds,
                        AjaxPageLoader.PageLoader.parameters, true,
                        AjaxPageLoader.PageLoader.backfn, true);
            }
        }
    }
};
