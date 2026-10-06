var _PERCENT_FORM_NAME = "registerform";

function Percent() {
    /*var percentElement;*/

    this.updatePercent = function (element, percentElement) {
        updateFormAmount(element, _PERCENT_FORM_NAME, percentElement+"_INT", percentElement+"_FRAC", "");
        return element;
    };


    this.update = function (percentElement) {
        var percentElement1 = document[_PERCENT_FORM_NAME][percentElement]
        var percent = percentElement1 ? this.updatePercent(percentElement1, percentElement).value : 0;
        this.PERCENT_INPUT = percent;
    };

};

function PercentSplit (value) {
        var percent_f = new String(value);
        var parts = percent_f.split('.');
        if(parts[1] && parts[1].length == 1) parts[1] = parts[1] + '0';
        parts[0] = parseInt((parts[0] ? parts[0] : '0'), 10);
        parts[1] = parseInt((parts[1] ? parts[1] : '0'), 10);
        return parts;
};

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