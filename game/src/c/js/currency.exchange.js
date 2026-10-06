var _FORM_NAME = 'exchange';
var _AMOUNT_INT = 'AMOUNT_INT';
var _AMOUNT_FRAC = 'AMOUNT_FRAC';
var _AMOUNT = 'AMOUNT';
var _SUMMARY = 'SUMMARY';
var _AMOUNT_DEST = 'AMOUNT_DEST';
var _ADJUSTMENT = 'ADJUSTMENT';
var _BUY = 'BUY';
var _SELL = 'SELL';

function CurrencyExchangeInputListener() {

    this.pocket = null;
    this.maxAmount = 0.0;
    this.scrCurrencyCode = null;
    this.destCurrencyCode = null;
    this.summaryElement = null;
    this.elementSufix = null;
    this.converter = new CurrencyConverter();
    this.formatter = new MoneyFormatter();

    var adjustmentAmount = 0;

    this.init = function(_pocket,
                         _currencyList,
                         _scrCurrencyCode,
                         _destCurrencyCode,
                         _initAmount,
                         _maxAmount) {
        this.elementSufix = '_' + _pocket + '_' + _destCurrencyCode;
        this.formatter.init(_currencyList);
        this.pocket = _pocket;
        this.maxAmount = _maxAmount;
        this.scrCurrencyCode = _scrCurrencyCode;
        this.destCurrencyCode = _destCurrencyCode;
        var parts = this.formatter.split(_initAmount);
        document[_FORM_NAME][_AMOUNT_INT + this.elementSufix].value = parts[0];
        document[_FORM_NAME][_AMOUNT_FRAC + this.elementSufix].value = parts[1];
        this.converter.update(
                this.formatter.rateByCurrencyId(this.scrCurrencyCode),
                this.formatter.rateByCurrencyId(this.destCurrencyCode));
    };

    this.getSummaryElement = function() {
        if (!this.summaryElement) {
            this.summaryElement = document.getElementById(_SUMMARY + '_' + this.pocket);
            if (!('summary' in this.summaryElement)) {
                this.summaryElement['summary'] = 0;
            }
        }
        return this.summaryElement;
    };

    this.adjustment = function(){
        if(adjustmentAmount > 0){
            var amountParts = this.formatter.split(adjustmentAmount);
            HtmlUtils.printToInput(_FORM_NAME, _AMOUNT_INT + this.elementSufix, amountParts[0]);
            HtmlUtils.printToInput(_FORM_NAME, _AMOUNT_FRAC + this.elementSufix, amountParts[1]);
            this.update();
        }
        return false;
    };

    this.update = function() {
        var amountElement = document[_FORM_NAME][_AMOUNT + this.elementSufix];
        var oldValue = parseFloat(amountElement.value);
        var amount = updateFormAmount(amountElement, _FORM_NAME,
                _AMOUNT_INT, _AMOUNT_FRAC, this.elementSufix).value;
        var destAmount = this.converter.convert(amount);
        this.getSummaryElement();
        this.summaryElement['summary'] = parseFloat(this.summaryElement['summary']) - oldValue + parseFloat(amount);
        this.summaryElement.innerHTML = this.formatter.format(this.summaryElement['summary'], this.scrCurrencyCode);
        HtmlUtils.printTo(_AMOUNT_DEST +this.elementSufix, this.formatter.format(destAmount, this.destCurrencyCode));
        var maxValue = this.maxAmount;
        /*Check amount adjustment*/
        var destAmountBD = new BigDecimal(destAmount.toString()).setScale(2, BigDecimal.prototype.ROUND_UP);
        var maxAvailableSrc = this.converter.reversConvert(destAmountBD);
        var maxAvailableSrcBD = new BigDecimal(maxAvailableSrc.toString()).setScale(2, BigDecimal.prototype.ROUND_DOWN);
        var ONE_CENT = new BigDecimal('0.01');
        var testDestAmount = this.converter.convert(maxAvailableSrcBD.add(ONE_CENT));
        if(testDestAmount.subtract(destAmountBD).signum() <= 0 && destAmountBD > 0){
            maxAvailableSrcBD = maxAvailableSrcBD.add(ONE_CENT);
        }
        var srcAmountBD = new BigDecimal(amount.toString()).setScale(2, BigDecimal.prototype.ROUND_DOWN);
        if(maxAvailableSrcBD.subtract(srcAmountBD).signum() == 1 && destAmount <= maxValue){
            adjustmentAmount = parseFloat(maxAvailableSrcBD.toString());
            HtmlUtils.showForId(_ADJUSTMENT + this.elementSufix);
            HtmlUtils.printTo(_BUY + this.elementSufix, this.formatter.format(maxAvailableSrcBD, this.scrCurrencyCode));
            HtmlUtils.printTo(_SELL + this.elementSufix, this.formatter.format(destAmountBD, this.destCurrencyCode));
        } else {
            adjustmentAmount = 0;
            HtmlUtils.hideForId(_ADJUSTMENT + this.elementSufix);
        }
        /*Check amount limits*/
        if(destAmount <= 0){
            document.getElementById(_AMOUNT_DEST + this.elementSufix).parentNode.
                    setAttribute('class', 'negative');
        } else if(destAmount > maxValue) {
            document.getElementById(_AMOUNT_DEST + this.elementSufix).parentNode.
                    setAttribute('class', 'excess');
        } else {
            document.getElementById(_AMOUNT_DEST + this.elementSufix).parentNode.
                    removeAttribute('class');
        }
    };

}
