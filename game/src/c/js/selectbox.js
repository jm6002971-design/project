/**
 * jQuery custom selectboxes
 *
 * Copyright (c) 2010 Dyomin Andrey
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * @version 0.1
 * @category visual
 * @package jquery
 * @subpakage ui.selectbox
 * @author Dyomin Andrey <radiment@inteice.ru>
 **/
if (!window.console && !console) {
    var console = {
        log: function(msg) {
        }
    }
}

(function ($) {

    var
    // selectbox Default Settings.
    defaults = {
        className: 'selectbox',
        animationSpeed: "normal",
        listboxMaxSize: 10,
        replaceInvisible: false,
        debug: false,
        hoverClass: "hover",
        currentClass: "selected",
        switchKeyCode: -1,
        autoWidth: true
    };

    $.fn.extend({
        selectbox: function(options) {
            return this.each(function(i) {
                this.selectbox = new $.SelectBox(this, options, i);
            });
        }
    });

    $.SelectBox = function(selectobj, options, i) {

        var opt = $.extend(defaults, options || {});

        var elm_id = selectobj.id;
        var disabled = selectobj.disabled;
        var className = selectobj.className;
        var active = -1;
        var inFocus = false;
        var afterFocus = false;
        var hasfocus = 0;
        //jquery object for select element
        var $select = $(selectobj);
        // jquery container object
        var $container = setupContainer(opt);
        //jquery input object
        var $input = setupInput(opt);



        var $listcontainer;

        // hide select and append newly created elements
        placeToDom();

        init();

        if (!disabled) {
            $input
            .click(function() {
                if (!inFocus || !afterFocus) {
                    $listcontainer.toggle();
                }
                afterFocus = false;
            })
            .bind("mouseenter mouseleave", function(e){
                if (opt.debug) console.log("on " + e.type +': ' + this.id);
                $input.toggleClass(opt.hoverClass);
            })
            .keydown(function(event) {
                switch (event.keyCode) {
                    case 38: // up
                        event.preventDefault();
                        moveSelect(-1);
                        break;
                    case 40: // down
                        event.preventDefault();
                        moveSelect(1);
                        break;
                    //case 9:  // tab
                    case 13: // return
                        event.preventDefault(); // seems not working in mac !
                        $('li.' + opt.hoverClass).trigger('click');
                        break;
                    case 27: //escape
                        hideMe();
                        break;
                    case opt.switchKeyCode:
                        toggle();
                        break;
                }
            });
            $container.blur(function(event) {
                if ($listcontainer.is(':visible') && hasfocus > 0) {
                    if (opt.debug) console.log('container visible and has focus')
                } else {
                    hideMe();
                }
            })
            .focus(function() {
                if ($listcontainer.not(':visible')) {
                    inFocus = true;
                    afterFocus = true;
                    $listcontainer.show();
                }
            });

            $select.keydown(function(event) {
                switch (event.keyCode) {
                    case opt.switchKeyCode:
                        toggle();
                        break;
                }
            });
        }

        function placeToDom() {
            var width;
            if (opt.autoWidth) {
                width = Math.round($select.width());
            }
            $container.append($input);
            $select.before($container);
            if (opt.autoWidth) {
                width = Math.round(width + getPadding($input) - 5);
                if (opt.debug)
                    console.log("#"+elm_id+"."+className+" width="+width);
                if ($.browser.safari)
                    width = width * 0.94;
                $container.css("width", width + "px");
            }
            $select.hide();
        }

        function getPadding(elem) {
            var width = parseFloat(elem.css("paddingRight"));
            width += parseFloat(elem.css("paddingLeft"));
            if (opt.debug) console.log("padding=" + width);
            return width;
        }

        function hideMe() {
            hasfocus = 0;
            $listcontainer.hide();
        }

        function init() {
            $listcontainer = getSelectOptions($input.attr('id'));
            $listcontainer.hide();
            $container.append($listcontainer);
        }

        function setupContainer(options) {
            var container = document.createElement("div");
            $container = $(container);
            $container.attr('id', elm_id + '_list');
            $container.addClass(options.className + " " + className + " select_" + i);
            $container.attr("disabled", disabled);
            $container.attr("tabIndex", $select.attr("tabindex")); // "I" capital is important for ie
            return $container;
        }

        function setupInput(options) {
            var input = document.createElement("span");
            var $input = $(input);
            $input.addClass(options.className + "-box");
            $input.html("&nbsp;");
            return $input;
        }

        function toggle() {
            $container.toggle();
            $select.toggle();
        }

        function moveSelect(step) {
            var lis = $("li", $container);
            if (!lis) return;

            active += step;

            if (active < 0) {
                active = 0;
            } else if (active >= lis.size()) {
                active = lis.size() - 1;
            }

            lis.removeClass(opt.hoverClass);

            $(lis[active]).addClass(opt.hoverClass);
        }

        function setCurrent(li, previos_id) {
            var ar = ('' + li.id).split('-_-');
            var el = ar[ar.length - 1];
            $select.val(el);
            $input.addClass("selected_" + li.id);
            if (previos_id) $input.removeClass("selected_" + previos_id);
            $input.html($(li).html());
            return true;
        }

        // select value
        function getCurrentSelected() {
            return $select.val();
        }

        // input value
        function getCurrentValue() {
            return $input.html();
        }

        function getSelectOptions(parentid) {
            var select_options = new Array();
            var ul = document.createElement('ul');
            $select.children('option').each(function() {
                var li = document.createElement('li');
                li.setAttribute('id', parentid + '-_-' + $(this).val());
                li.innerHTML = "&nbsp;" + $(this).html();
                if ($(this).is(':selected')) {
                    $(li).addClass(opt.currentClass);
                    setCurrent(li, null);
                }
                ul.appendChild(li);
                $(li)
                .mouseover(function(event) {
                    hasfocus = 1;
                    if (opt.debug) console.log('over on : ' + this.id);
                    $(event.target, $listcontainer).addClass(opt.hoverClass);
                })
                .mouseout(function(event) {
                    hasfocus = -1;
                    if (opt.debug) console.log('out on : ' + this.id);
                    $(event.target, $listcontainer).removeClass(opt.hoverClass);
                })
                .click(function(event) {
                    var fl = $('li.' + opt.hoverClass, $listcontainer).get(0);
                    if (opt.debug) console.log('click on :' + this.id);
                    var previous = $('li.' + opt.currentClass);
                    previous.removeClass(opt.currentClass);
                    $(this).addClass(opt.currentClass);
                    setCurrent(this, previous.attr("id"));
                    hideMe();
                    //if ($change)
                    //eval($change);
                    $select.trigger("onchange");
                });
            });
            return $(ul);
        }

    };
}(jQuery));