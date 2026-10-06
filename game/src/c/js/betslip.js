function SlipConstants() {
}
SlipConstants.BET_SLIP_STORAGE = "betSlip";
SlipConstants.ALL_SLIPS_FLAG = "allSlipsFlag";
SlipConstants.MAX_SLIPS = 3;


function BetSlip() {

    this.betSlips = new Object();
    this.checkedAllSlips = false;

    BetSlip.prototype.init =
            function(container, slipsCountContainer, slipsChBox,
                    totalDisplayContainer, totalDisplayInputsContainer) {
                this.betSlips = new Object();
                this.betSlipContainer = container;
                this.slipsCountContainer = slipsCountContainer;
                this.allSlipsCheckBox = slipsChBox;
                this.totalDisplayContainer = totalDisplayContainer;
                this.totalDisplayInputsContainer = totalDisplayInputsContainer;
                if (Storage.active != undefined) {
                    var val = this.loadFromPersistentStorage(SlipConstants.BET_SLIP_STORAGE);
                    if (val != '' && val != null) {
                        this.betSlips = JSON.parse(val);
                    }
                    var chkd = this.loadFromPersistentStorage(SlipConstants.ALL_SLIPS_FLAG);
                    if (chkd != null) {
                        this.checkedAllSlips = chkd;
                    }
                    if (chkd == null) {
                        this.checkedAllSlips = true;
                    }
                }
            },

            BetSlip.prototype.getBetSlip = function() {
                return this;
            },

            BetSlip.prototype.getBetSlipContainer = function() {
                return this.betSlipContainer;
            },

            BetSlip.prototype.addToPersistentStorage = function(key, arr) {
                if (this.betSlips != null) {
                    Storage.put(key, JSON.stringify(arr));
                }
            },

            BetSlip.prototype.loadFromPersistentStorage = function(key) {
                if (Storage != null && Storage.getKeys().length > 0) {
                    if (Storage.get(key) != null) {
                        return Storage.get(key);
                    }
                }
                return null;
            },

            BetSlip.prototype.addSlip =
                    function(hashKey, oddId, eventName, oddName, altName, odd) {
                        if (this.betSlips == null) {
                            this.betSlips = new Object();
                        }

                        var checked = true;
                        var count = this.getCheckedSlipsCount();
                        if (count > SlipConstants.MAX_SLIPS - 1) {
                            checked = false;
                        }

                        var slip = new Object();
                        slip.id = hashKey;
                        slip.oddId = oddId;
                        slip.ename = eventName;
                        slip.name = oddName;
                        slip.altName = altName;
                        slip.odd = odd;
                        slip.checked = checked;
                        slip.inputId = "st_" + oddId;
                        slip.stake = "";
                        slip.returns = 0.00;

                        if (this.betSlips[hashKey] != null &&
                                (this.betSlips[hashKey].id == slip.id) &&
                                (this.betSlips[hashKey].oddId == slip.oddId)) {
                            delete this.betSlips[hashKey];
                        } else {
                            if (this.betSlips != null &&
                                    this.betSlips[hashKey] != null) {
                                delete this.betSlips[hashKey];
                            }
                            this.betSlips[hashKey] = slip;
                        }
                        var chCount = 0;
                        for (var i in this.betSlips) {
                            if (i.indexOf(hashKey.substring(34, hashKey.length)) >
                                    0 && this.betSlips[i].checked) {
                                chCount ++;
                            }
                        }
                        if (chCount >= 2) {
                            this.betSlips[hashKey].checked = false;
                        }
                        count = this.getCheckedSlipsCount();
                        if (count >= 2) {
                            var ch = this.loadFromPersistentStorage(SlipConstants.ALL_SLIPS_FLAG);
                            if (ch) {
                                $(this.allSlipsCheckBox).attr('checked', 'checked');
                            }
                            $(this.allSlipsCheckBox).show();
                        }
                        if (this.getSlipsCount() <= 1) {
	                        $(this.allSlipsCheckBox).hide();
                        }
                        this.addToPersistentStorage(SlipConstants.BET_SLIP_STORAGE, this.betSlips);
                        this.redrawBettingSlips();
                        this.setSlipsCount();
                        this.redrawTotalDisplay('true');
                    },

            BetSlip.prototype.saveStake = function(th) {
                this.addToPersistentStorage($(th).attr(id), $(th).val());
            },

            BetSlip.prototype.redrawTotalDisplay = function(inputs) {
                var totalDisplay = new TotalDisplay();
                totalDisplay.init(this.totalDisplayContainer, this.totalDisplayInputsContainer);
                totalDisplay.setBettingSlips(this.betSlips);
                if (inputs == 'true') {
                    totalDisplay.redrawInputs();
                }
                totalDisplay.redrawTotalInfo();
            },

            BetSlip.prototype.redrawEstimate = function(th) {
                var iid = "#s_" + $(th.id);
                $(iid).text();
            },

            BetSlip.prototype.deleteSlip = function(hashKey) {
                if (this.betSlips != null && this.betSlips[hashKey] != null) {
                    this.unmarkOddsSelections(this.betSlips[hashKey].oddId);
                    delete this.betSlips[hashKey];
                }
                this.addToPersistentStorage(SlipConstants.BET_SLIP_STORAGE, this.betSlips);
                if (this.getSlipsCount() == 0) {
                    this.addToPersistentStorage(SlipConstants.ALL_SLIPS_FLAG, true);
                }
                if (this.getSlipsCount() < 2) {
                    $(this.allSlipsCheckBox).hide();
                }
                this.redrawBettingSlips();
                this.setSlipsCount();
                this.redrawTotalDisplay('true');
            },

            BetSlip.prototype.clearSlips = function() {
                if (this.betSlips != null) {
                    for (var key in this.betSlips) {
                        this.unmarkOddsSelections(this.betSlips[key].oddId);
                        delete this.betSlips[key];
                    }
                }
                $(this.allSlipsCheckBox).hide();
                this.addToPersistentStorage(SlipConstants.BET_SLIP_STORAGE, this.betSlips);
                this.addToPersistentStorage(SlipConstants.ALL_SLIPS_FLAG, true);
                this.redrawBettingSlips();
                this.redrawOddsSelections();
                this.setSlipsCount();
                this.redrawTotalDisplay('true');
            },

            BetSlip.prototype.tryCheckSlip = function(chBox, id) {
                if (this.betSlips != null && this.betSlips[id] != null) {
                    if (chBox.checked) {
                        for (var i in this.betSlips) {
                            if (i.indexOf(id.substring(34, id.length)) > 0) {
                                if (i != id) {
                                    this.betSlips[i].checked = false;
                                }
                            }
                        }
                    }
                    if (!chBox.checked) {
                        this.betSlips[id].checked = false;
                        $(this.allSlipsCheckBox).removeAttr('checked');
                        this.addToPersistentStorage(SlipConstants.ALL_SLIPS_FLAG, false);
                    }
                    var count = this.getCheckedSlipsCount();
                    if (count < SlipConstants.MAX_SLIPS) {
                        this.betSlips[id].checked = chBox.checked;
                        var newCount = this.getCheckedSlipsCount();
                        var duplicate = this.getDuplicateSlipsCount();
                        var all = this.getSlipsCount();
                        if (newCount == SlipConstants.MAX_SLIPS) {
                            $(this.allSlipsCheckBox).attr('checked', 'checked');
                            this.addToPersistentStorage(SlipConstants.ALL_SLIPS_FLAG, true);
                        }
                    } else {
                        chBox.checked = false;
                        alert("Up to " + SlipConstants.MAX_SLIPS +
                                " items may be selected at time");
                    }
                    this.addToPersistentStorage(SlipConstants.BET_SLIP_STORAGE, this.betSlips);
                    this.redrawTotalDisplay('true');
                    this.redrawBettingSlips();
                }
            },

            BetSlip.prototype.checkForDuplicate = function() {
                for (var key in this.betSlips) {
                    for (var i in this.betSlips) {
                        if (i != key) {
                            if (key.indexOf(i.substring(34, i.length)) > 0) {
                                return i;
                            }
                        }
                    }
                }
            },

            BetSlip.prototype.getDuplicateSlipsCount = function() {
                var count = 0;
                var j = 0;
                for (var key in this.betSlips) {
                    j++;
                    var k = 0;
                    for (var i in this.betSlips) {
                        if (k != j) {
                            k++;
                            continue;
                        }
                        if (i != key) {
                            if (key.indexOf(i.substring(34, i.length)) > 0) {
                                count++
                            }
                        }
                    }
                }
                return count;
            },

            BetSlip.prototype.checkAllSlips = function(ch) {
                if (this.betSlips != null) {
                    var count = this.getSlipsCount();
                    if (ch.checked) {
                        var duplicate = this.getDuplicateSlipsCount();
                        if (count < SlipConstants.MAX_SLIPS + 1 + duplicate) {
                            var hash = this.checkForDuplicate();
                            for (var key in this.betSlips) {
                                /*if (hash != null && hash != '') {*/
                                    this.betSlips[key].checked =
                                            true;
                                /*}*/
                            }
                            //this.betSlips[hash].checked = true;
                            this.checkedAllSlips = true;
                        } else {
                            ch.checked = false;
                            this.checkedAllSlips = false;
                            alert("Up to " + SlipConstants.MAX_SLIPS +
                                    " items may be selected at time");
                        }
                    } else {
                        if (this.checkedAllSlips) {
                            for (var akey in this.betSlips) {
                                this.betSlips[akey].checked = false;
                            }
                            this.checkedAllSlips = false;
                        }
                    }
                    this.addToPersistentStorage(SlipConstants.BET_SLIP_STORAGE, this.betSlips);
                    this.addToPersistentStorage(SlipConstants.ALL_SLIPS_FLAG, this.checkedAllSlips);
                    this.redrawBettingSlips();
                    this.redrawTotalDisplay('true');
                }
            },

            BetSlip.prototype.getCheckedSlipsCount = function() {
                var count = 0;
                if (this.betSlips != null) {
                    for (var key in this.betSlips) {
                        if (this.betSlips[key].checked) {
                            count ++;
                        }
                    }
                }
                return count;
            },

            BetSlip.prototype.getSlipsCountWithValue = function() {
                var count = 0;
                if (this.betSlips != null) {
                    for (var key in this.betSlips) {
                        if (this.betSlips[key].stake != '') {
                            count ++;
                        }
                    }
                }
                return count;
            },

            BetSlip.prototype.getSlipsCount = function() {
                var count = 0;
                if (this.betSlips != null) {
                    for (var key in this.betSlips) {
                        count ++;
                    }
                }
                return count;
            },

            BetSlip.prototype.getCheckedAllSlips = function() {
                return this.checkedAllSlips;
            },

            BetSlip.prototype.getSerializedSlips = function() {
                var str = '';
                if (this.betSlips != null) {
                    for (var key in this.betSlips) {
                        str += this.betSlips[key].oddId + '#' +
                                this.betSlips[key].odd + '#' +
                                this.betSlips[key].stake + '#' +
                                this.betSlips[key].checked + ',';
                    }
                }
                return str;
            },

            BetSlip.prototype.saveStake = function(th, id) {
                if (this.betSlips != null) {
                    var newValue = $(th).val().replace(/[,]/g, ".");
                    newValue = newValue.replace(/[^0123456789.]/g, "");
                    $(th).val(newValue);
                    this.betSlips[id].stake = $(th).val();
                    this.betSlips[id].returns =
                            (this.betSlips[id].stake *
                                    this.betSlips[id].odd).toFixed(2);
                    if (isNaN(this.betSlips[id].returns)) {
                        this.betSlips[id].returns = 0.00;
                    }
                }
                this.redrawEstimatedReturns(id);
                this.addToPersistentStorage(SlipConstants.BET_SLIP_STORAGE, this.betSlips);
            },

            BetSlip.prototype.redrawEstimatedReturns = function(id) {
                $("#r_" + this.betSlips[id].id).text(this.betSlips[id].returns);
            },

            BetSlip.prototype.setSlipsCount = function() {
                $(this.slipsCountContainer).html('');
                $(this.slipsCountContainer).html(this.getSlipsCount());
            },

            BetSlip.prototype.redrawBettingSlips = function() {
                var template = new DefaultTemplate();
                $(this.getBetSlipContainer()).html('');
                if (this.betSlips != null) {
                    for (var key in this.betSlips) {
                        var html = template.getTemplate(this.betSlips[key], this.getSlipsCount());
                        $(this.getBetSlipContainer()).append(html);
                    }
                }
            },

            BetSlip.prototype.redrawOddsSelections = function() {
                if (this.betSlips != null) {
                    for (var key in this.betSlips) {
                        var tag = "#odd_" + this.betSlips[key].oddId;
                        $(tag).parent().removeClass('odd_number_a');
                        $(tag).parent().removeClass('odd_number');
                        $(tag).parent().removeClass('active');
                        $(tag).parent().addClass('odd_number_a');
                        $(tag).parent().addClass('active');
                    }
                }
            },

            BetSlip.prototype.unmarkOddsSelections = function(id) {
                var tag = "#odd_" + id;
                $(tag).parent().removeClass('odd_number_a');
                $(tag).parent().removeClass('odd_number');
                $(tag).parent().removeClass('active');
                $(tag).parent().addClass('odd_number');
            }

}

function TotalDisplay() {

    this.container = "#";
    this.inputsContainer = "#";
    this.bettingSlips = new Object();

    TotalDisplay.prototype.init = function(container, inputsContainer) {
        this.container = container;
        this.inputsContainer = inputsContainer;
    },

            TotalDisplay.prototype.setBettingSlips = function(bs) {
                this.bettingSlips = bs;
            },

            TotalDisplay.prototype.redrawInputs = function() {
                var display = new TotalDisplayDefaultTemplate();
                var tmpl1 = display.getInputsTemplate(this.bettingSlips);
                $(this.inputsContainer).html('');
                $(this.inputsContainer).html(tmpl1);
            },

            TotalDisplay.prototype.redrawTotalInfo = function() {
                var display = new TotalDisplayDefaultTemplate();
                var tmpl = display.getTemplate(this.bettingSlips);
                $(this.container).html('');
                $(this.container).html(tmpl);
            }

}