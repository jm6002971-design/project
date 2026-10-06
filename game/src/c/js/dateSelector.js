com.intrice.DateSelector = function(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    this.date = new Date();
    this.recalcDate();
};

com.intrice.DateRange = function (fromyear, frommonth, fromday, toyear, tomonth, today) {
    this.fromDateSelector = new com.intrice.DateSelector(fromyear, frommonth, fromday);
    this.toDateSelector = new com.intrice.DateSelector(toyear, tomonth, today);
};

com.intrice.DateSelector.prototype.recalcDate = function () {
    this.date = new Date(
            this.year.options[this.year.selectedIndex].text,
            this.month.options[this.month.selectedIndex].value,
            this.day.options[this.day.selectedIndex].text);
    var year = String(this.date.getFullYear());
    var month = String(this.date.getMonth());
    var day = String(this.date.getDate());
    com.intrice.DateSelector.select(this.year.options, year);
    com.intrice.DateSelector.select(this.month.options, month);
    com.intrice.DateSelector.select(this.day.options, day);
};

com.intrice.DateRange.prototype.recalcDate = function () {
    this.fromDateSelector.recalcDate();
    this.toDateSelector.recalcDate();
};

com.intrice.DateSelector.select = function(options, value) {
    for (var i = 0; i < options.length; i++) {
        if (options[i].value == value) {
            options[i].selected = true;
            return;
        }
    }
};

com.intrice.DateSelector.bind = function (fromyear, frommonth, fromday, toyear, tomonth, today) {
    var dateSelector = new com.intrice.DateRange(fromyear, frommonth, fromday, toyear, tomonth, today);
    fromyear.dateSelector = dateSelector;
    frommonth.dateSelector = dateSelector;
    fromday.dateSelector = dateSelector;
    toyear.dateSelector = dateSelector;
    tomonth.dateSelector = dateSelector;
    today.dateSelector = dateSelector;
};