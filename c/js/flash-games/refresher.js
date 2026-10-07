var refreshTimeout;
var id = Math.floor(Math.random() * 10000);

$(document).ready(function () {
    refreshTimeout = setTimeout('refreshSession()', refresh_delay);
});

function refreshSession() {
    try {
        $.ajax({
            url:refresh_url,
            dataType:'html',
            success:function (html) {
                refreshTimeout = setTimeout('refreshSession()', refresh_delay);
            }
        });
    } catch (e) {
        console.log('refreshSession exception');
        console.log(e);
    }
}
