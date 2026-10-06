function CPExchange() {

    var _ACTION_CHANGE_TYPE = 'change_type';
    var _ACTION_CP_EXCHANGE = 'cp_exchange';

    this.cpPriceMap = null;
    this.buyElement = null;
    this.forElement = null;
    this.targetAmountElement = null;
    this.form = null;
    this.action = null;

    this.init = function(_cpPriceMap,
                         _buyElementId,
                         _forElementId,
                         _formName,
                         _targetAmountElementName) {
        this.cpPriceMap = _cpPriceMap;
        this.buyElement = document.getElementById(_buyElementId);
        this.forElement = document.getElementById(_forElementId);
        this.form = document[_formName];
        this.action = this.form['action'];
        this.action.value = _ACTION_CHANGE_TYPE;
        this.targetAmountElement = this.form[_targetAmountElementName];
        for(var targetAmount in this.cpPriceMap){
            if('selected' in this.cpPriceMap[targetAmount]){
                this.buyElement.innerHTML = this.cpPriceMap[targetAmount]['formatTargetAmount'];
                this.forElement.innerHTML = this.cpPriceMap[targetAmount]['compoints'];
            }
        }
    };

    this.update = function() {
        var targetAmount = getOptionValue(this.targetAmountElement, this.targetAmountElement.options[0]);
        var formatTargetAmount = this.cpPriceMap[targetAmount]['formatTargetAmount'];
        var compoints = this.cpPriceMap[targetAmount]['compoints'];
        this.buyElement.innerHTML = formatTargetAmount;
        this.forElement.innerHTML = compoints;
    };

    this.changeType = function() {
        this.action.value = _ACTION_CHANGE_TYPE;
        this.form.submit();
    };

    this.doExchange = function() {
        this.action.value = _ACTION_CP_EXCHANGE;
        var targetAmount = getOptionValue(this.targetAmountElement, this.targetAmountElement.options[0]);
        this.form['CP_VALUE'].value = this.cpPriceMap[targetAmount]['compoints'];
        this.form.submit();
    };

    function getOptionValue(obj, defaultValue) {
        if (obj.selectedIndex != -1) {
            return obj.options[obj.selectedIndex].value;
        }
        return defaultValue;
    }

}
