

/**
 *  * Created by ManjunathKulkarni on 3/28/2018.
 *   */
function apiLoadURL(link,params) {
    var stringParams = "";
    var i;
    for (i = 0; i < params.length; i++) {
        stringParams += params[i]+"&";
    }
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
                stringParams +="mobilepremium=true";
        }
   var url = link+"?"+stringParams;
        window.open(url, "_self", "scrollbars=1,status=1,toolbar=1,directories=1," +
            "menubar=1,location=1,resizable=1");

    /*var ifrm = document.createElement("iframe");
 *     ifrm.setAttribute("src", stringURL);
 *         ifrm.style.width = "100%";
 *             ifrm.style.height = "600px";
 *                 var el = document.getElementById('marker');
 *                     el.parentNode.insertBefore(ifrm, el);*/
}

