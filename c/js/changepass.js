function changePass() {
    var changePassContainer = $('#changePasswordContainer');
    $.blockUI({ message: changePassContainer, css: { width: '275px' } });
    changePassContainer.load('/cashier/changepassword?ajax=true',
                        null, function(responseText, status, res){
                            unblock();
                            $.blockUI({ message: $('#changePasswordContainer'), css: { width: '285px' } });    
                        });
}
function unblock() {
    $.unblockUI();
}