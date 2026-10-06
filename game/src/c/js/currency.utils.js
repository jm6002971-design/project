function CurrencyConverter() {

    var MONEY_FRACTION_DIGITS = 4;
    this.rateFrom = BigDecimal.prototype.ONE;
    this.rateTo =BigDecimal.prototype.ONE;

    this.update = function(_rateFrom, _rateTo) {
        this.rateFrom = new BigDecimal(_rateFrom.toString());
        this.rateTo = new BigDecimal(_rateTo.toString());
    };

    this.crossRate = function(){
        return this.rateTo.divide(this.rateFrom, MONEY_FRACTION_DIGITS, BigDecimal.prototype.ROUND_DOWN);
    };

    this.convert = function(value) {
        value = new BigDecimal(value.toString());
        var step1 = this.rateFrom.equals(BigDecimal.prototype.ONE) ? value : this.convertToChips(value, this.rateFrom);
        var result = this.rateTo.equals(BigDecimal.prototype.ONE) ? step1 : this.convertFromChips(step1, this.rateTo);
        result = result.setScale(MONEY_FRACTION_DIGITS, BigDecimal.prototype.ROUND_HALF_DOWN);
        //console.log('convert: ' + value + ' to: ' + result);
        return result;
    };

    this.reversConvert = function(value) {
        value = new BigDecimal(value.toString());
        var step1 = this.rateTo.equals(BigDecimal.prototype.ONE) ? value : this.convertToChips(value, this.rateTo);
        var result = this.rateFrom.equals(BigDecimal.prototype.ONE) ? step1 : this.convertFromChips(step1, this.rateFrom);
        result = result.setScale(MONEY_FRACTION_DIGITS, BigDecimal.prototype.ROUND_HALF_EVEN);
//        console.log('revert: ' + value + ' to: ' + result);
        return result;
    };

    this.convertToChips = function(oldValue, rate) {
        return oldValue.divide(rate, MONEY_FRACTION_DIGITS, BigDecimal.prototype.ROUND_DOWN);
    };

    this.convertFromChips = function(oldValue, rate) {
        return oldValue.multiply(rate, MONEY_FRACTION_DIGITS);
    };

}

function MoneyFormatter() {

    var _LF = {'en':{'dec_point':'.','thousands_sep':','},
        'es':{'dec_point':',','thousands_sep':'.'},
        'pt':{'dec_point':',','thousands_sep':'.'},
        'de':{'dec_point':',','thousands_sep':'.'},
        'el':{'dec_point':',','thousands_sep':'.'},
        'ru':{'dec_point':',','thousands_sep':' '},
        'it':{'dec_point':',','thousands_sep':','}};

    this.numberLocaleFormat = function (_number){
        function obj_merge(obj_first, obj_second){
            var obj_return = {};
            for (key in obj_first){
                if (typeof obj_second[key] !== 'undefined') obj_return[key] = obj_second[key];
                else obj_return[key] = obj_first[key];
            }
            return obj_return;
        }
        function thousands_sep(_num, _sep){
            if (_num.length <= 3) return _num;
            var _count = _num.length;
            var _num_parser = '';
            var _count_digits = 0;
            for (var _p = (_count - 1); _p >= 0; _p--){
                var _num_digit = _num.substr(_p, 1);
                if (_count_digits % 3 == 0 && _count_digits != 0 && !isNaN(parseFloat(_num_digit))) _num_parser = _sep + _num_parser;
                _num_parser = _num_digit + _num_parser;
                _count_digits++;
            }
            return _num_parser;
        }
        if (typeof _number !== 'number'){
            _number = parseFloat(_number);
            if (isNaN(_number)) return false;
        }
        var _cfg_default = {before: '', after: '', decimals: 2, dec_point: '.', thousands_sep: ','};
        var lang = getCookie("USER_LANGUAGE");
        lang = lang == null? 'en': lang.toString().toLowerCase();
        lang = lang in _LF ? lang : 'en';
        var _cfg = _LF[lang];
        if (_cfg && typeof _cfg === 'object'){
            _cfg = obj_merge(_cfg_default, _cfg);
        }
        else _cfg = _cfg_default;
        /* _number = _number.toFixed(_cfg.decimals); */
        _number = _number.toString();
        if(_number.indexOf('.') != -1){
            var _number_arr = _number.split('.');
            console.log(_number);
            _number_arr[1] = _number_arr[1].length == 1? _number_arr[1] + '0': _number_arr[1];
            _number = thousands_sep(_number_arr[0], _cfg.thousands_sep) + _cfg.dec_point + _number_arr[1];
        }
        else _number = thousands_sep(_number, _cfg.thousands_sep);
        return _cfg.before + _number + _cfg.after;
    }


    // {'USD':{'rate':0.45,'sumbol':'$','precedes':false,'text':'Dollar'}}
    this.currencyList = {};

    this.init = function(_currencyList) {
        this.currencyList = _currencyList;
        console.log("_currencyList:"+_currencyList);
    };

    this.format = function(value, currencyId, digits) {
        digits = digits ? digits : 2;

        console.log("currencyId:"+currencyId);
        console.log("currencyList:"+this.currencyList);
        var currency = this.currencyList[currencyId];
        console.log("currency:"+currency);
        var space = currency['space_required'] ? " " : "";
        var prefix = currency['precedes'] ? currency['sumbol'] + space : "";
        var sufix = !currency['precedes'] ? space + currency['sumbol'] : "";
        var _value = new BigDecimal(value.toString()).setScale(digits, BigDecimal.prototype.ROUND_UP);
        return prefix + this.numberLocaleFormat(_value) + sufix;
    };

    this.rateByCurrencyId = function(currencyId) {
        return this.currencyList[currencyId]['rate'];
    };

    this.split = function(value) {
        var amount_f = new String(value);
        amount_f = amount_f.replace(',', '.');
        var parts = amount_f.split('.');
        if(parts[1] && parts[1].length == 1) parts[1] = parts[1] + '0';
        parts[0] = parseInt((parts[0] ? parts[0] : '0'), 10);
        parts[1] = parseInt((parts[1] ? parts[1] : '0'), 10);
        return parts;
    }

}

function updateFormAmount(element, _form_name, _int_name, _frac_name, _name_sufix) {
    var int_value = document[_form_name][_int_name + _name_sufix].value;
    var frac_value = document[_form_name][_frac_name + _name_sufix].value;
    if (frac_value == '0') {
    	frac_value = '00';
    }
    if (!int_value || !isInteger(int_value)) {
        int_value = '0';
        document[_form_name][_int_name + _name_sufix].value = int_value;
    }
    if (!frac_value || !isInteger(frac_value)) {
        frac_value = '00';
        document[_form_name][_frac_name + _name_sufix].value = frac_value;
    }
    if(frac_value.length == 1){
        frac_value = '0' + frac_value;
    }
    element.value = int_value + "." + frac_value;
    return element;
}
