var _FORM_NAME = "transferForm";
var _CREDIT_OPERATION_LABEL_ID = "CREDIT_OPERATION_LABEL";
var _FROM_OPT = "from";
var _TO_OPT = "to";
var _ACTION_TRANSFER = 'make_transfer';
var _ACTION_CHANGE = 'change_filter';

function AgentTransfer() {

    this.p = {};

    this.init = function(_p){
        this.p = _p;
    };

    this.updateCreditLabel = function(selector) {
        var label = document.getElementById(_CREDIT_OPERATION_LABEL_ID);
        var fromto = getOptionValue(selector);
        if(_TO_OPT == fromto){
            label.innerHTML = p['textIssueCredit'];
        } else if(_FROM_OPT = fromto){
            label.innerHTML = p['textCreditRepayment'];
        }
    };

    this.updateFilter = function() {
        document[_FORM_NAME]['action'].value = _ACTION_CHANGE;
        document[_FORM_NAME].submit();
    };

    this.make = function() {
        document[_FORM_NAME]['action'].value = _ACTION_TRANSFER;
        document[_FORM_NAME].submit();
    };

}

function getOptionValue(obj) {
    if (obj.selectedIndex != -1) {
        return obj.options[obj.selectedIndex].value;
    }
    return '';
}