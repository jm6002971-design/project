function TotalDisplayDefaultTemplate() {

    /*this.INPUT = '<tr>' +
     '<td><b>#CAPTION#:</b></td>' +
     '<td class="right">' +
     '<input type="text" class="input_stake" id="#INPUT_ID#" onkeyup="betSlip.redrawTotalDisplay(\'false\')"/>' +
     '</td>' +
     '</tr>';*/

    this.INPUT = '<div class="total_display_bg">' +
            '<div class="item_caption_pos"><b>#CAPTION#:</b></div>' +
            '<div class="stake_input_pos">' +
            '<input type="text" class="input_stake" id="#INPUT_ID#" maxlength="4" onkeyup="betSlip.redrawTotalDisplay(\'false\');"/>' +
            '</div>' +
            '<div class="clear">&nbsp;</div>' +
            '<div class="stake_returns">Estimated returns: <span id="#S_INPUT_ID#">#RETURNS#</span></div>' +
            '</div>';

    this.INPUTS_TEMPLATE = /*'<table class="place_bet_table">' +
     '<tr>' +
     '<td><b>Double(s): #MULTIPLE_ODDS#</b></td>' +
     '<td class="right">' +
     '<input type="text" class="input_stake" id="input_multi_odds" onkeyup="betSlip.redrawTotalDisplay(\'false\')"/>' +
     '</td>' +
     '</tr>' +*/
            '<br/>' +
                    '#HEADER#' +
                    '#MULTI#' +
                //'#DOUBLE#' +
                //'#TREBLE#' +
                    '#TRIXIE#' +
                    '#PATENT#';
    /*'</table>';*/

    this.DEFAULT_TEMPLATE = '<table class="place_bet_table">' +
            '<tr>' +
            '<td><b>Number of bets:</b></td>' +
            '<td class="right">' +
            '#NUMBER_OF_BETS#' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><b>Stake:</b></td>' +
            '<td class="total_odds right">' +
            defaultCurrency +
            '#STAKE#' +
            '</td>' +
            '</tr>' +
            '<tr>' +
            '<td><b>Possible Payout:</b></td>' +
            '<td class="win_amount right">' +
            defaultCurrency +
            '#POSSIBLE_PAYOUTS#' +
            '</td>' +
            '</tr>' +
            '<tr><td colspan="2" align="center"><div class="breaker" style="height:20px;">&nbsp;</div>' +
            '<a href="/sportsbook/index#" class="button_placebet" maxlength="4" id="button_placebet" onclick="placeBet()">Place Bet</a>' +
            '</td></tr>' +
            '</table>';

    this.singleReturns = 0.00;
    this.doublesReturns = 0.00;
    this.treblesReturns = 0.00;
    this.trixieReturns = 0.00;
    this.patentReturns = 0.00;
    this.multiReturns = 0.00;

    TotalDisplayDefaultTemplate.prototype.getCount = function(betSlips) {
        var count = 0;
        if (betSlips != null) {
            for (var key in betSlips) {
                count++;
            }
        }
        return count;
    },

            TotalDisplayDefaultTemplate.prototype.getCheckedCount =
                    function(betSlips) {
                        var count = 0;
                        if (betSlips != null) {
                            for (var key in betSlips) {
                                if (betSlips[key].checked) {
                                    count++;
                                }
                            }
                        }
                        return count;
                    },

            TotalDisplayDefaultTemplate.prototype.getMultipleOdds =
                    function(betSlips) {
                        var mulitOdds = 1;
                        for (var key in betSlips) {
                            if (betSlips[key].checked) {
                                mulitOdds *= parseFloat(betSlips[key].odd);
                            }
                        }
                        return this.floorValue(mulitOdds);
                    },

            TotalDisplayDefaultTemplate.prototype.getNumberOfBets =
                    function(betSlips) {
                        var count = 0;
                        var trixie = 0;
                        var patent = 0;
                        var multi = 0;
                        var doubles = 0;
                        var treble = 0;
                        if ($("#input_double_odds").val() != '' &&
                                $("#input_double_odds").val() != undefined) {
                            var checkedCount = this.getCheckedCount(betSlips);
                            if (checkedCount == 3) {
                                doubles = 3;
                            }
                            if (checkedCount == 4) {
                                doubles = 6;
                            }
                        }
                        if ($("#input_treble_odds").val() != '' &&
                                $("#input_treble_odds").val() != undefined) {
                            treble = 4;
                        }
                        if ($("#input_multi_odds").val() != '' &&
                                $("#input_multi_odds").val() != undefined) {
                            multi = 1;
                        }
                        if ($("#input_trixie_odds").val() != '' &&
                                $("#input_trixie_odds").val() != undefined) {
                            trixie = 4;
                        }
                        if ($("#input_patent_odds").val() != '' &&
                                $("#input_patent_odds").val() != undefined) {
                            patent = 7;
                        }
                        if (betSlips != null) {
                            for (var key in betSlips) {
                                if ($("#" + betSlips[key].inputId).val() !=
                                        '' &&
                                        $("#" + betSlips[key].inputId).val() !=
                                                undefined) {
                                    count++;
                                }
                            }
                        }

                        return count + multi + trixie + patent + doubles +
                                treble;
                    },

            TotalDisplayDefaultTemplate.prototype.getStake =
                    function(betSlips) {
                        var count = 0;
                        var trixie = 0;
                        var patent = 0;
                        var multi = 0;
                        var doubles = 0;
                        var treble = 0;
                        var checkedCount = 0;
                        if ($("#input_multi_odds").val() != '' &&
                                $("#input_multi_odds").val() != undefined) {
                            multi = parseFloat($("#input_multi_odds").val());
                        }
                        if ($("#input_double_odds").val() != '' &&
                                $("#input_double_odds").val() != undefined) {
                            checkedCount = this.getCheckedCount(betSlips);
                            if (checkedCount == 3) {
                                doubles = 3 *
                                        parseFloat($("#input_double_odds").val());
                            }
                            if (checkedCount == 4) {
                                doubles = 6 *
                                        parseFloat($("#input_double_odds").val());
                            }
                        }
                        if ($("#input_trixie_odds").val() != '' &&
                                $("#input_trixie_odds").val() != undefined) {
                            trixie =
                                    4 * parseFloat($("#input_trixie_odds").val());
                        }
                        if ($("#input_treble_odds").val() != '' &&
                                $("#input_treble_odds").val() != undefined) {
                            treble =
                                    4 * parseFloat($("#input_treble_odds").val());
                        }
                        if ($("#input_patent_odds").val() != '' &&
                                $("#input_patent_odds").val() != undefined) {
                            patent =
                                    7 * parseFloat($("#input_patent_odds").val());
                        }
                        if (betSlips != null) {
                            for (var key in betSlips) {
                                if ($("#" + betSlips[key].inputId).val() !=
                                        '' &&
                                        $("#" + betSlips[key].inputId).val() !=
                                                undefined) {
                                    count += parseFloat($("#" +
                                            betSlips[key].inputId).val());
                                }
                            }
                        }
                        var total = count + multi + trixie + patent + doubles +
                                treble;
                        return this.floorValue(total);
                    },

            TotalDisplayDefaultTemplate.prototype.getPayouts =
                    function(betSlips) {
                        var singles = 0;
                        var doubles = 0;
                        var trebles = 0;
                        var trixie = 0;
                        var patent = 0;
                        var multi = 0;

                        var trixieTotal = 0;
                        var doublesTotal = 0;
                        var treblesTotal = 0;
                        var patentTotal = 0;
                        var multipleTotal = 0;

                        var isTrixie = false;
                        var isPatent = false;
                        var isMulti = false;
                        var isDouble = false;
                        var isTreble = false;

                        if ($("#input_double_odds").val() != '' &&
                                $("#input_double_odds").val() != undefined) {
                            isDouble = true;
                            doubles = parseFloat($("#input_double_odds").val());
                        }
                        if ($("#input_treble_odds").val() != '' &&
                                $("#input_treble_odds").val() != undefined) {
                            isTreble = true;
                            trebles = parseFloat($("#input_treble_odds").val());
                        }
                        if ($("#input_multi_odds").val() != '' &&
                                $("#input_multi_odds").val() != undefined) {
                            isMulti = true;
                            multi = parseFloat($("#input_multi_odds").val());
                        }
                        if ($("#input_trixie_odds").val() != '' &&
                                $("#input_trixie_odds").val() != undefined) {
                            isTrixie = true;
                            trixie = parseFloat($("#input_trixie_odds").val());
                        }
                        if ($("#input_patent_odds").val() != '' &&
                                $("#input_patent_odds").val() != undefined) {
                            isPatent = true;
                            patent = parseFloat($("#input_patent_odds").val());
                        }

                        var singlesArray = new Array();
                        if (betSlips != null) {
                            var array = new Array();
                            var checkedCount = 0;
                            for (var key in betSlips) {
                                if (betSlips[key].checked) {
                                    checkedCount++;
                                    singlesArray.push(parseFloat(betSlips[key].odd));
                                } else {
                                    singlesArray.push(1);
                                }
                                array.push(betSlips[key].odd *
                                        parseFloat($("#" +
                                                betSlips[key].inputId).val()));
                            }

                            var s = 0;
                            for (var k in singlesArray) {
                                if (!isNaN(singlesArray[k])) {
                                    s += singlesArray[k];
                                }
                            }
                            var mSinglesArray = new Array();
                            mSinglesArray = singlesArray;
                            for (k in mSinglesArray) {
                                if (isNaN(mSinglesArray[k]) ||
                                        mSinglesArray[k] == undefined) {
                                    mSinglesArray[k] = 1;
                                }
                            }
                            for (var i = 0; i < 4 && mSinglesArray.length != 4;
                                 i++) {
                                mSinglesArray.push(1);
                            }

                            for (k in array) {
                                if (!isNaN(array[k])) {
                                    singles += array[k];
                                }
                            }
                            if (isDouble) {
                                if (checkedCount == 3) {
                                    doublesTotal =
                                            this.getSpecificPayout(mSinglesArray, BetType.DOUBLE_3);
                                }
                                if (checkedCount == 4) {
                                    doublesTotal =
                                            this.getSpecificPayout(mSinglesArray, BetType.DOUBLE_4);
                                }
                                doublesTotal *= doubles;
                            }
                            if (isTreble) {
                                if (checkedCount == 3) {
                                    treblesTotal =
                                            this.getSpecificPayout(mSinglesArray, BetType.TREBLE_3);
                                }
                                if (checkedCount == 4) {
                                    treblesTotal =
                                            this.getSpecificPayout(mSinglesArray, BetType.TREBLE_4);
                                }
                                treblesTotal *= trebles;
                            }
                            if (isMulti) {
                                multipleTotal = 1;
                                for (key in mSinglesArray) {
                                    multipleTotal *= mSinglesArray[key];
                                }
                                multipleTotal *= multi;
                            }
                            if (isTrixie) {
                                trixieTotal =
                                        this.getSpecificPayout(mSinglesArray, BetType.TRIXIE);
                                trixieTotal *= trixie;
                            }
                            if (isPatent) {
                                patentTotal =
                                        this.getSpecificPayout(mSinglesArray, BetType.PATENT);
                                patentTotal = patentTotal * patent;
                            }
                        }

                        this.singleReturns = singles;
                        this.doublesReturns = doublesTotal;
                        this.treblesReturns = treblesTotal;
                        this.trixieReturns = trixieTotal;
                        this.patentReturns = patentTotal;
                        this.multiReturns = multipleTotal;

                        if ($("#s_input_multi_odds")) {
                            $("#s_input_multi_odds").text(this.floorValue(this.multiReturns));
                        }
                        if ($("#s_input_trixie_odds")) {
                            $("#s_input_trixie_odds").text(this.floorValue(this.trixieReturns));
                        }
                        if ($("#s_input_patent_odds")) {
                            $("#s_input_patent_odds").text(this.floorValue(this.patentReturns));
                        }

                        var total = singles + multipleTotal + trixieTotal +
                                patentTotal + doublesTotal + treblesTotal;
                        if (isNaN(total)) {
                            total = 0;
                        }
                        return this.floorValue(total);
                    },

            TotalDisplayDefaultTemplate.prototype.getSpecificPayout =
                    function(odds, slips) {
                        var res = 0;
                        for (var slip in slips) {
                            var tmpRes = 1;
                            var changed = false;
                            for (var idx in slips[slip]) {
                                if (odds[slips[slip][idx]] == undefined) {
                                    continue;
                                }
                                tmpRes *= odds[slips[slip][idx]];
                                changed = true;
                            }
                            if (changed) {
                                res += tmpRes;
                            }
                        }
                        return res;
                    },

            TotalDisplayDefaultTemplate.prototype.floorValue = function(val) {
                return Math.floor(val*100)/100;
            },

            TotalDisplayDefaultTemplate.prototype.getInputsTemplate =
                    function(betSlips) {
                        var tmpl = "";
                        var count = this.getCount(betSlips);
                        var checkedCount = this.getCheckedCount(betSlips);
                        tmpl = this.INPUTS_TEMPLATE;
                        if (count == 0) {
                            tmpl = tmpl.replace("#HEADER#", "");
                        }
                        if (checkedCount < 2) {
                            tmpl = tmpl.replace("#HEADER#", "");
                            tmpl = tmpl.replace("#MULTI#", "");
                            tmpl = tmpl.replace("#DOUBLE#", "");
                            tmpl = tmpl.replace("#TREBLE#", "");
                            tmpl = tmpl.replace("#TRIXIE#", "");
                            tmpl = tmpl.replace("#PATENT#", "");
                        } else if (checkedCount == 2) {
                            var doubles = this.INPUT;
                            doubles =
                                    doubles.replace("#CAPTION#", "Standard combo (" +
                                            checkedCount + ") 1 Bet");
                            doubles =
                                    doubles.replace("#INPUT_ID#", "input_multi_odds");
                            doubles =
                                    doubles.replace("#S_INPUT_ID#", "s_input_multi_odds");
                            doubles =
                                    doubles.replace("#RETURNS#", this.floorValue(this.multiReturns));
                            tmpl = tmpl.replace("#MULTI#", doubles);
                            tmpl = tmpl.replace("#DOUBLE#", "");
                            tmpl = tmpl.replace("#TREBLE#", "");
                            tmpl = tmpl.replace("#TRIXIE#", "");
                            tmpl = tmpl.replace("#PATENT#", "");
                        } else if (checkedCount == 3) {
                            doubles = this.INPUT;
                            doubles =
                                    doubles.replace("#CAPTION#", "Standard combo (" +
                                            checkedCount + ") 1 Bet");
                            doubles =
                                    doubles.replace("#INPUT_ID#", "input_multi_odds");
                            doubles =
                                    doubles.replace("#S_INPUT_ID#", "s_input_multi_odds");
                            doubles =
                                    doubles.replace("#RETURNS#", this.floorValue(this.doublesReturns));
                            tmpl = tmpl.replace("#MULTI#", doubles);

                            var treble = this.INPUT;
                            treble =
                                    treble.replace("#CAPTION#", "Treble(s) 1 Bet");
                            treble =
                                    treble.replace("#INPUT_ID#", "input_multi_odds");
                            treble =
                                    treble.replace("#S_INPUT_ID#", "s_input_multi_odds");
                            treble =
                                    treble.replace("#RETURNS#", this.floorValue(this.treblesReturns));
                            tmpl = tmpl.replace("#TREBLE#", treble);

                            var trixie = this.INPUT;
                            trixie =
                                    trixie.replace("#CAPTION#", "Trixie 4 Bets");
                            trixie =
                                    trixie.replace("#INPUT_ID#", "input_trixie_odds");
                            trixie =
                                    trixie.replace("#S_INPUT_ID#", "s_input_trixie_odds");
                            trixie =
                                    trixie.replace("#RETURNS#", this.floorValue(this.trixieReturns));
                            tmpl = tmpl.replace("#TRIXIE#", trixie);

                            var patent = this.INPUT;
                            patent =
                                    patent.replace("#CAPTION#", "Patent 7 Bets");
                            patent =
                                    patent.replace("#INPUT_ID#", "input_patent_odds");
                            patent =
                                    patent.replace("#S_INPUT_ID#", "s_input_patent_odds");
                            patent =
                                    patent.replace("#RETURNS#", this.floorValue(this.patentReturns));
                            tmpl = tmpl.replace("#PATENT#", patent);
                            tmpl = tmpl.replace("#MULTI#", "");
                        } else if (checkedCount == 4) {
                            var accumulator = this.INPUT;
                            accumulator =
                                    accumulator.replace("#CAPTION#", "Standard combo (4) 1 Bet");
                            accumulator =
                                    accumulator.replace("#INPUT_ID#", "input_multi_odds");
                            accumulator =
                                    accumulator.replace("#S_INPUT_ID#", "s_input_multi_odds");
                            accumulator =
                                    accumulator.replace("#RETURNS#", this.floorValue(this.multiReturns));
                            tmpl = tmpl.replace("#MULTI#", accumulator);
                            doubles = this.INPUT;
                            doubles =
                                    doubles.replace("#CAPTION#", "Double(s) 6 Bet");
                            doubles =
                                    doubles.replace("#INPUT_ID#", "input_double_odds");
                            doubles =
                                    doubles.replace("#S_INPUT_ID#", "s_input_double_odds");
                            doubles =
                                    doubles.replace("#RETURNS#", this.floorValue(this.doublesReturns));
                            tmpl = tmpl.replace("#DOUBLE#", doubles);
                            treble = this.INPUT;
                            treble =
                                    treble.replace("#CAPTION#", "Treble(s) 4 Bet");
                            treble =
                                    treble.replace("#INPUT_ID#", "input_treble_odds");
                            treble =
                                    treble.replace("#S_INPUT_ID#", "s_input_treble_odds");
                            treble =
                                    treble.replace("#RETURNS#", this.floorValue(this.treblesReturns));
                            tmpl = tmpl.replace("#TREBLE#", treble);
                            tmpl = tmpl.replace("#TRIXIE#", "");
                            tmpl = tmpl.replace("#PATENT#", "");
                        } else if (checkedCount > 4) {
                            var multi = this.INPUT;
                            multi =
                                    multi.replace("#CAPTION#", "Standard combo (" +
                                            checkedCount + ") 1 Bet");
                            multi =
                                    multi.replace("#INPUT_ID#", "input_multi_odds");
                            multi =
                                    multi.replace("#S_INPUT_ID#", "s_input_multi_odds");
                            multi =
                                    multi.replace("#RETURNS#", this.floorValue(this.multiReturns));
                            tmpl = tmpl.replace("#MULTI#", multi);
                            tmpl = tmpl.replace("#DOUBLE#", "");
                            tmpl = tmpl.replace("#TREBLE#", "");
                            tmpl = tmpl.replace("#TRIXIE#", "");
                            tmpl = tmpl.replace("#PATENT#", "");

                        } else if (count > 0) {
                            multi = this.INPUT;
                            multi =
                                    multi.replace("#CAPTION#", "Multiple (1) Bet");
                            multi.replace("#CAPTION#", "Multiple (1) Bet");
                            multi =
                                    multi.replace("#INPUT_ID#", "input_multi_odds");
                            multi =
                                    multi.replace("#S_INPUT_ID#", "s_input_multi_odds");
                            multi =
                                    multi.replace("#RETURNS#", this.floorValue(this.multiReturns));
                            tmpl = tmpl.replace("#MULTI#", multi);
                            tmpl = tmpl.replace("#DOUBLE#", "");
                            tmpl = tmpl.replace("#TREBLE#", "");
                            tmpl = tmpl.replace("#TRIXIE#", "");
                            tmpl = tmpl.replace("#PATENT#", "");
                        } else {
                            tmpl = tmpl.replace("#MULTI#", "");
                            tmpl = tmpl.replace("#DOUBLE#", "");
                            tmpl = tmpl.replace("#TREBLE#", "");
                            tmpl = tmpl.replace("#TRIXIE#", "");
                            tmpl = tmpl.replace("#PATENT#", "");
                        }
                        tmpl = tmpl.replace("#HEADER#", '<div class="total_stakes_header">Accumulators / Multiples</div>');
                        return tmpl;
                    },

            TotalDisplayDefaultTemplate.prototype.getTemplate =
                    function(betSlips) {
                        var count = this.getCount(betSlips);
                        if (count == 0) {
                            return '<div class="betslip_text">To place a bet, please click on the offer you wish to bet on</div>';
                        }
                        var str = this.DEFAULT_TEMPLATE;
                        var numberOfBets = this.getNumberOfBets(betSlips);
                        var stake = this.getStake(betSlips);
                        var payouts = this.getPayouts(betSlips);
                        str = str.replace("#NUMBER_OF_BETS#", numberOfBets);
                        str = str.replace("#STAKE#", stake);
                        str = str.replace("#POSSIBLE_PAYOUTS#", payouts);
                        return str;
                    }
}