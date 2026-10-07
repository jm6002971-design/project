(function ($) {
    $.fn.leaderboardSlider = function (options) {

        var defaults = {
            slides:'.leaderboard_box_slides',
            autoStart:0, // Set to positive number for auto interval and interval time
            fadespeed:300 // Speed of fade animation
        };

        this.each(function () {
            var obj = $(this);
            var o = $.extend(defaults, options);
            var size = $(o.slides, obj).children().size();
            var index = 0;
            var lock = false;

            for (var i = 0; i < size; i++) {
                if (i != index) {
                    $(o.slides, obj).children(':eq(' + i + ')').hide();
                }
            }

            if (size > 1) setInterval(function () {
                if (lock === false) {
                    animate();
                }
            }, o.autoStart);

            function animate() {
                if (index == size) {
                    index = 0;
                }
                var oldIndex = index == 0 ? size - 1 : index - 1;
                var current = $(o.slides, obj).children(':eq(' + index + ')');
                var prev = $(o.slides, obj).children(':eq(' + oldIndex + ')');
                if (!$(current).is(':hidden') || !$(prev).is(':hidden')) {
                    lock = true;
                    current.fadeIn(o.fadespeed);
                    prev.fadeOut(o.fadespeed, function () {
                        lock = false;
                    });
                    index++;
                }
            }

        });
    };
})(jQuery);