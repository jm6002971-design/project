function AgmoDeposit() {

    var _SHORT_NUMBER = "short_number_id";
    var _MESSAGE = "message_id";
    var _SMS_TEXT = "sms-text-2";
    var _SMS_PHONE = "sms-phone-2";
    var _AMOUNT_INPUT = 'AMOUNT';

    var _BONUS_CODE_TITLE = "bonus_code_title";
    var _BONUS_CODE_INPUT = "bonus_code_input";
    var _SUBMIT_ROW = "submit_row";
    var _DEPOSIT_MESSG_TEXT = "deposit_messg_text";

    var listForHide = [_BONUS_CODE_TITLE, _BONUS_CODE_INPUT, _SUBMIT_ROW, _DEPOSIT_MESSG_TEXT];
    var numbersTable;
    var amountElement;

    var updateAmount = function (element) {
        if (element.selectedIndex != -1) {
            return element.options[element.selectedIndex];
        }
        return element;
    };

    this.init = function (p) {
        numbersTable = {};
        amountElement = document[_BUY_FORM_NAME][_AMOUNT_INPUT];
        if(amountElement) amountElement.updateAmount = updateAmount;
        for (var i in listForHide) {
            HtmlUtils.hideForId(listForHide[i]);
        }
    };

    this.addShortNumber = function (p) {
        var cost = p['cost'];
        var short_number = p['short_number'];
        var message = p['message'];
        numbersTable[cost] = {short_number:short_number, message:message};
    };

    this.update = function () {
        var amount = amountElement ? amountElement.updateAmount(amountElement).value : 0;
        var selectedTable = numbersTable[amount];
        if(selectedTable){
            var short_number = selectedTable['short_number'];
            var message = selectedTable['message'];
            HtmlUtils.printTo(_SHORT_NUMBER, short_number);
            HtmlUtils.printTo(_SMS_PHONE, short_number);
            HtmlUtils.printTo(_MESSAGE, message);
            HtmlUtils.printTo(_SMS_TEXT, message);
        }
    }


}