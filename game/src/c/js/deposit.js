var _BUY_FORM_NAME = 'buyform';
var _AMOUNT_INT = 'AMOUNT_INT';
var _AMOUNT_FRAC = 'AMOUNT_FRAC';
var _BUTTON_SUBMIT_ID = "button_submit";

function Deposit() {

    var WALLET_CURRENCY_SELECT = "walletCCode";
    var CURRENCY_SELECT = "CURRENCY";
    var AMOUNT_INPUT = 'AMOUNT';

    var CURRENCY_RATE = "rate_today";
    var SOURCE_CURRENCY_RATE = "source_currency_rate";
    var DEST_CURRENCY_RATE = "dest_currency_rate";
    var TARGET_AMOUNT = "target_amount";
    var TARGET_WALLET_AMOUNT = "target_wallet_amount";
    var TARGET_FEE_AMOUNT = "target_fee_amount";
    var DEP_AMOUNT_TD = "dep_amount_td";
    var DEP_FEE_AREA = "deposit_fee_id";

    var amountElement;
    var amountCurrencyElement;
    var walletCurrencyElement;

    var targetAmount;
    var walletAmount;
    var feeAmount;
    var amountCurrency;
    var walletCurrency;
    var selectable;
    var amountPassed = true;
    var limitReached = false;

    var converter = new CurrencyConverter();
    var formatter = new MoneyFormatter();
    var feeAndLimits = new FeeAndLimits();
    var updateCurrencyListeners = new Array();

    var updateAmount = function (element, selectable) {
        if (selectable) {
            if (element.selectedIndex != -1) {
                return element.options[element.selectedIndex];
            }
        } else {
            updateFormAmount(element, _BUY_FORM_NAME, _AMOUNT_INT, _AMOUNT_FRAC, "");
        }
        return element;
    };

    this.INPUT_AMOUNT = 0;

    this.init = function (p) {
        amountElement = document[_BUY_FORM_NAME][AMOUNT_INPUT];
        amountCurrencyElement = document[_BUY_FORM_NAME][CURRENCY_SELECT];
        walletCurrencyElement = document[_BUY_FORM_NAME][WALLET_CURRENCY_SELECT];
        formatter.init(p['currencyList']);
        selectable = p['selectable'];
        if(amountElement) amountElement.updateAmount = updateAmount;
        var initAmount = p['initAmount'] == '' ? 0 : p['initAmount'];
        if (!selectable) {
            var parts = formatter.split(initAmount);
            if (document[_BUY_FORM_NAME][_AMOUNT_FRAC].getAttribute('type') == 'hidden') {
                parts = formatter.split(Math.ceil(initAmount));
            } else {
                parts = formatter.split(initAmount);
            }
            document[_BUY_FORM_NAME][_AMOUNT_INT].value = parts[0];
            document[_BUY_FORM_NAME][_AMOUNT_FRAC].value = parts[1];
        }
    };

    this.addUpdateCurrencyListener = function (listener) {
        if (listener) updateCurrencyListeners.push(listener);
    };

    this.updateDepositCurrency = function (callListeners) {
        var amount = amountElement ? amountElement.updateAmount(amountElement, selectable).value : 0;
        amountCurrency = getOptionValue(amountCurrencyElement);
        if (typeof (callListeners) == 'undefined' || callListeners == true) {
            for(var i in updateCurrencyListeners){
                var listener = updateCurrencyListeners[i];
                if(typeof listener == "function"){
                    try {
                        var p = {'currency':amountCurrency};
                        listener.call(p);
                    } catch (e) {
                    }
                }
            }
        }
        feeAndLimits.updateCurrency(amountCurrency);
        var limits = feeAndLimits.getLimit(amountCurrency);
        if ((limits && !limits.allow(amount))) {
            var parts = null;
            if (document[_BUY_FORM_NAME][_AMOUNT_FRAC].getAttribute('type') == 'hidden') {
                parts = formatter.split(Math.ceil(limits.minAmount.valueOf()));
            } else {
                parts = formatter.split(limits.minAmount.valueOf());
            }
            document[_BUY_FORM_NAME][_AMOUNT_INT].value = parts[0];
            document[_BUY_FORM_NAME][_AMOUNT_FRAC].value = parts[1];
        }
        this.update();
    };

    this.update = function () {
        var amount = amountElement ? amountElement.updateAmount(amountElement, selectable).value : 0;
        amountCurrency = getOptionValue(amountCurrencyElement);
        walletCurrency = getOptionValue(walletCurrencyElement);
        converter.update(
                formatter.rateByCurrencyId(amountCurrency),
                formatter.rateByCurrencyId(walletCurrency));
        targetAmount = parseFloat(converter.convert(amount));
        var range = feeAndLimits.getRange(amount, amountCurrency);
        feeAmount = 0;
        if (range) {
            feeAmount = converter.convert(range.calc(amount));
        }
        var limits = feeAndLimits.getLimit(amountCurrency);
        walletAmount = targetAmount - feeAmount;
        if ((limits && !limits.allow(amount)) || walletAmount < 0) {
            HtmlUtils.addClass(DEP_AMOUNT_TD, 'warning_amount');
            amountPassed = false;
            limitReached = true;
        } else {
            HtmlUtils.clearClass(DEP_AMOUNT_TD);
            amountPassed = true;
        }

        if (feeAmount <= 0) {
            HtmlUtils.hideForId(DEP_FEE_AREA);
        } else {
            HtmlUtils.showForId(DEP_FEE_AREA);
        }
        HtmlUtils.printTo(TARGET_AMOUNT, formatter.format(targetAmount, walletCurrency));
        HtmlUtils.printTo(TARGET_FEE_AMOUNT, formatter.format(feeAmount, walletCurrency));
        HtmlUtils.printTo(TARGET_WALLET_AMOUNT, formatter.format(walletAmount, walletCurrency));
        if (amountCurrency.indexOf(walletCurrency) == 0) {
            HtmlUtils.hideForId(CURRENCY_RATE);
        } else {
            HtmlUtils.showForId(CURRENCY_RATE);
            HtmlUtils.printTo(SOURCE_CURRENCY_RATE, formatter.format(1, amountCurrency, 4));
            HtmlUtils.printTo(DEST_CURRENCY_RATE, formatter.format(converter.crossRate(), walletCurrency, 4));
        }
    };

    this.doDeposit = function (message, limitMessage) {
        if (isSubmitButtonPressed) return;
        if (amountPassed) {
            isSubmitButtonPressed = true;
            if(amountElement){
                amountElement.updateAmount(amountElement, selectable);
            }
            var $form = $(document[_BUY_FORM_NAME]);
            $form.find("input[type=hidden]").each(function() {
                var id = $(this).attr("id");
                if (typeof($("#" + id + "_d").val()) != 'undefined') {
                    $(this).val(encodeURIComponent($("#" + id + "_d").val()));
                }
            });
            document[_BUY_FORM_NAME].submit();
        } else {
            if (limitReached) {
                alert(limitMessage);
            } else {
                alert(message);
            }
        }
    };

    this.addRange = function (p) {
        p['formatter'] = formatter;
        p['operation'] = 'deposit';
        feeAndLimits.addRange(p);
    };

    this.addLimit = function (p) {
        p['formatter'] = formatter;
        feeAndLimits.addLimit(p);
    };

    function getOptionValue(obj) {
        if(obj.selectedIndex && obj.options){
            if (obj.selectedIndex != -1) {
                return obj.options[obj.selectedIndex].value;
            }
        } else {
            return obj.value;
        }
        return '';
    }

}

function CashoutFee() {

    var FEE_DESCRIPTION_PREFIX = "fee_description_";
    var FEE_ROW_PREFIX = "cashout_fee_row_";
    var feeRanges = {};
    var formatter = new MoneyFormatter();

    this.init = function (p) {
        formatter.init(p['currencyList']);
    };

    this.addRange = function (p) {
        p['operation'] = 'transactions';
        p['formatter'] = formatter;
        var range = new FeeRange();
        range.init(p);
        if (!(p['payment_system'] in feeRanges)) {
            feeRanges[p['payment_system']] = {};
        }
        var ranges = feeRanges[p['payment_system']];
        if (!(p['currency'] in ranges)) {
            ranges[p['currency']] = new Array();
        }
        ranges[p['currency']].push(range);
    };

    this.update = function (selectedCurrency) {
        for (var system in feeRanges) {
            var ranges = feeRanges[system];
            if (typeof ranges != "function") {
                var text = '';
                for (var currency in ranges) {
                    if(selectedCurrency == currency){
                        var range = ranges[currency];
                        if (typeof range != "function") {
                            for (var i in range) {
                                if (typeof range[i] != "function") {
                                    text += '<p>' + range[i].getHTML() + '</p>';
                                }
                            }
                        }
                    }
                }
                if(text == ''){
                    //HtmlUtils.hideForId(FEE_ROW_PREFIX + system);
                    HtmlUtils.showForId(FEE_ROW_PREFIX + system);
                    HtmlUtils.printTo(FEE_DESCRIPTION_PREFIX + system, "Free");
                } else {
                    HtmlUtils.showForId(FEE_ROW_PREFIX + system);
                    HtmlUtils.printTo(FEE_DESCRIPTION_PREFIX + system, text);
                }
            }
        }
    };

}

function FeeAndLimits() {

    var FEE_DESCRIPTION = "fee_description";
    var FEE_AND_LIMITS_CONTAINER = "fee_and_limits_container";

    var feeRanges = {};
    var depositLimit = {};

    this.addRange = function (p) {
        var range = new FeeRange();
        range.init(p);
        if (!(p['currency'] in feeRanges)) {
            feeRanges[p['currency']] = new Array();
        }
        feeRanges[p['currency']].push(range);
    };

    this.addLimit = function (p) {
        var limit = new DepositLimit();
        limit.init(p);
        depositLimit[p['currency']] = limit;
    };

    this.getRange = function (amount, currency) {
        if (currency in feeRanges) {
            for (var i in feeRanges[currency]) {
                var rang = feeRanges[currency][i];
                if (typeof rang != "function" && rang.include(amount)) {
                    return rang;
                }
            }
        }
    };

    this.getLimit = function (currency) {
        return depositLimit[currency];
    };

    this.updateCurrency = function (srcCurrency) {
        var emptyInfoData = true;
        if (srcCurrency in feeRanges) {
            var text = '';
            for (var i in feeRanges[srcCurrency]) {
                var rang = feeRanges[srcCurrency][i];
                if (typeof rang != "function") {
                    var t1 = rang.getHTML();
                    if(t1 != '') emptyInfoData = false;
                    text += '<p>' + t1 + '</p>';
                }
            }
            HtmlUtils.printTo(FEE_DESCRIPTION, text);
        }
        if (srcCurrency in depositLimit) {
            if(depositLimit[srcCurrency].updateHTML()) emptyInfoData = false;
        }
        if(emptyInfoData){
            HtmlUtils.hideForId(FEE_AND_LIMITS_CONTAINER);
        } else {
            HtmlUtils.showForId(FEE_AND_LIMITS_CONTAINER);
        }
    };

}

function FeeRange() {

    this.currency = null;
    this.flatFee = 0;
    this.percentFee = 0;
    this.minFee = 0;
    this.maxFee = 0;
    this.depositRangeFrom = 0;
    this.depositRangeTo = 0;
    var formatter = null;
    var operationText = '';

    this.init = function (p) {
        this.flatFee = p['flat_fee'] == '' ? 0 : parseFloat(p['flat_fee']);
        this.percentFee = p['percent_fee'] == '' ? 0 : parseFloat(p['percent_fee']);
        this.minFee = p['min_fee'] == '' ? 0 : parseFloat(p['min_fee']);
        this.maxFee = p['max_fee'] == '' ? 0 : parseFloat(p['max_fee']);
        this.depositRangeFrom = p['deposit_range_from'] == '' ? 0 : parseFloat(p['deposit_range_from']);
        this.depositRangeTo = p['deposit_range_to'] == '' ? 0 : parseFloat(p['deposit_range_to']);
        this.currency = p['currency'];
        formatter = p['formatter'];
        operationText = p['operation'];
    };

    this.include = function (amount) {
        if (amount <= 0) {
            return false;
        }
        return (amount >= this.depositRangeFrom || this.depositRangeFrom == 0) &&
                (amount <= this.depositRangeTo || this.depositRangeTo == 0);

    };

    this.calc = function (amount) {
        var fAmount = new BigDecimal(amount.toString());
        var fPercentFee = new BigDecimal(this.percentFee.toString());
        var fFlatFee = new BigDecimal(this.flatFee.toString());
        var fee = fAmount.multiply(fPercentFee, 4);
        fee = fee.divide(new BigDecimal('100.0'), 4, BigDecimal.prototype.ROUND_HALF_EVEN);
        fee = parseFloat(fee.add(fFlatFee));
        if (this.minFee > 0) {
            fee = Math.max(fee, this.minFee);
        }
        if (this.maxFee > 0) {
            fee = Math.min(fee, this.maxFee);
        }
        return fee;
    };

    this.getHTML = function () {
        var text = '';
        if (this.flatFee > 0 || this.percentFee > 0) {
            if (this.flatFee > 0) {
                text += formatter.format(this.flatFee, this.currency);
                if (this.percentFee > 0) {
                    text += ' + ';
                }
            }
            if (this.percentFee > 0) {
                text += this.percentFee + '%';
            }
            text += ', ';
        } else {
            text += 'Free';
        }
        text = HtmlUtils.wrapTo(text, 'b');
        if (this.minFee > 0) {
            text += ' min ' + formatter.format(this.minFee, this.currency);
            if (this.maxFee > 0) {
                text += ',';
            }
        }
        if (this.maxFee > 0) {
            text += ' max ' + formatter.format(this.maxFee, this.currency);
        }
        if (this.depositRangeFrom > 0 || this.depositRangeTo > 0) {
            text += ' for ' + operationText + ' ';
            if (this.depositRangeFrom > 0) {
                text += 'from ' + formatter.format(this.depositRangeFrom, this.currency);
                if (this.depositRangeTo == 0) {
                    text += ' and more';
                }
            }
            if (this.depositRangeTo > 0) {
                if (this.depositRangeFrom == 0) {
                    text += ' up ';
                }
                text += ' to ' + formatter.format(this.depositRangeTo, this.currency);
            }
        }
        return text;
    }
}

function DepositLimit() {

    var SINGLE_DEPOSIT_LINE = "single_deposit_line";
    var SINGLE_DEPOSIT_DESCRIPTION = "single_deposit_description";
    var DEPOSIT_LIMITS_LINE = "deposit_limits_line";
    var DEPOSIT_LIMITS_DESCRIPTION = "deposit_limits_description";

    this.currency = null;
    this.maxAmount = 0;
    this.minAmount = 0;
    this.amount = 0;
    this.count = 0;
    this.period = 0;
    var formatter = null;

    this.init = function (p) {
        this.currency = p['currency'];
        this.maxAmount = p['max_amount'] == '' ? 0 : parseFloat(p['max_amount']);
        this.minAmount = p['min_amount'] == '' ? 0 : parseFloat(p['min_amount']);
        this.amount = p['amount'] == '' ? 0 : parseFloat(p['amount']);
        this.count = p['count'] == '' ? 0 : parseFloat(p['count']);
        this.period = p['period'] == '' ? 0 : parseFloat(p['period']);
        formatter = p['formatter'];

    };

    this.allow = function (amount) {
        return (amount >= this.minAmount) && (amount <= this.maxAmount || this.maxAmount == 0);
    };

    this.updateHTML = function () {
        var text = '';
        var empty = true;
        if (this.maxAmount == 0 && this.minAmount == 0) {
            HtmlUtils.printTo(SINGLE_DEPOSIT_DESCRIPTION, '');
            HtmlUtils.hideForId(SINGLE_DEPOSIT_LINE);
        } else {
            text = '';
            var fMaxAmount = formatter.format(this.maxAmount, this.currency);
            var fMinAmount = formatter.format(this.minAmount, this.currency);
            if (this.maxAmount > 0 && this.minAmount > 0) {
                text += fMinAmount + ' - ' + fMaxAmount;
            } else if (this.minAmount > 0) {
                text += 'min  ' + fMinAmount;
            } else {
                text += 'max  ' + fMaxAmount;
            }
            HtmlUtils.printTo(SINGLE_DEPOSIT_DESCRIPTION, HtmlUtils.wrapTo(text, 'b'));
            HtmlUtils.showForId(SINGLE_DEPOSIT_LINE);
            empty = false;
        }
        text = 'Up to ';
        var fAmount = formatter.format(this.amount, this.currency);
        if (this.amount > 0 && this.count > 0 && this.period > 0) {
            text += HtmlUtils.wrapTo(this.count, 'b') + ' deposits in total amount of ' +
                    HtmlUtils.wrapTo(fAmount, 'b') + ' per ' + HtmlUtils.wrapTo(this.period, 'b') + ' hours';
            empty = false;
            HtmlUtils.showForId(DEPOSIT_LIMITS_LINE);
        } else if (this.count > 0 && this.period > 0) {
            text += HtmlUtils.wrapTo(this.count, 'b') + ' deposits per ' + HtmlUtils.wrapTo(this.period, 'b') + ' hours';
            empty = false;
            HtmlUtils.showForId(DEPOSIT_LIMITS_LINE);
        } else if (this.amount > 0 && this.period > 0) {
            text += HtmlUtils.wrapTo(fAmount, 'b') + ' per ' + HtmlUtils.wrapTo(this.period, 'b') + ' hours';
            empty = false;
            HtmlUtils.showForId(DEPOSIT_LIMITS_LINE);
        } else {
            text = '';
            HtmlUtils.hideForId(DEPOSIT_LIMITS_LINE);
        }
        HtmlUtils.printTo(DEPOSIT_LIMITS_DESCRIPTION, text);
        return !empty;
    };

}