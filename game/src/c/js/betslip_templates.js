function DefaultTemplate() {

    DefaultTemplate.prototype.getTemplate =
            function(obj, length) {
            	if (length > 1) {
    	            var chBox = '<input type="checkbox" id="ch_'+obj.oddId+'" onclick="betSlip.tryCheckSlip(this, \''+ obj.id +'\')"/>';
	                if (obj.checked) {
	                    chBox = '<input type="checkbox" checked="checked" id="ch_'+obj.oddId+'" onclick="betSlip.tryCheckSlip(this, \''+ obj.id +'\')"/>';
	                }
                } else {
	                chBox = " ";
                }
                var returns = isNaN(parseFloat(obj.returns).toFixed(2)) ? "0.00" : parseFloat(obj.returns).toFixed(2);
                /*'<div class="item_top_bg">'+*/
                return  '<div class="item_content_bg">' +
                        '<div class="chbox_header_pos">'+
                        chBox +
                        '</div>' +
                        '<div class="item_header_pos" title="' + obj.ename + '">' +
                        this.getSlipName(obj.ename) +
                        '</div>' +
		                '<div class="clear_slip"><a href="#" onclick="betSlip.deleteSlip(\''+obj.id+'\')">&nbsp;</a></div>' +
                        '<div class="clear">&nbsp;</div>' +
	                    /*'</div>' +*/
		                '<div class="item_pos">' + obj.name + ' (' + obj.altName + ') @ <span class="odds_class">' + obj.odd + '</span></div>' +
                        '<div class="input_pos">' +
                        '<input type="text" id="' + obj.inputId + '" class="input_stake" maxlength="4" onkeyup="betSlip.saveStake(this, \''+obj.id+'\'); betSlip.redrawTotalDisplay()" value="'+obj.stake+'"/>' +
                        '</div>'+
                        '<div class="clear">&nbsp;</div>' +
                        '<div class="returns">' +
                        'Estimated returns: <span class="returns_number" id="r_' + obj.id + '">' + returns + '</span>' +
                        '</div>' +
		                '<input type="hidden" id="bsodd_' + obj.oddId + '" value="' + obj.oddId + '"/>' +
		                '<div class="clear">&nbsp;</div>' +
	                    '</div>';
            },

            DefaultTemplate.prototype.getSlipName = function(name) {
            	if (name.length > 30) {
            		return name.substring(0, 28) + "...";
            	}
            	return name;
            }
}