$(document).ready(function () {
    $('#mainmenu_container table td a[rel]').each(function() {
        var currentClass = $(this).attr('class');
        var rel = $(this).attr('rel');
        if (currentClass.match('active')) {
            $('#' + rel).show();
        }
    });
    $('#mainmenu_container table td a[rel]').click(
            function () {
                var rel = $(this).attr('rel');
                if ($('#' + rel).is(':hidden')) {
                    $('#mainmenu_container table td a[rel]').each(function() {
                        $(this).attr('class', '');
                    });
                    $(this).attr('class', 'active');
                    $('.subitems').each(function() {
                        if (!$(this).is(':hidden')) {
                            $(this).fadeTo('normal', 0, function() {
                                $('.subitems').css({position: 'absolute'});
                                $(this).hide();
                                $('#' + rel).fadeTo('normal', 1, function() {
                                    $('.subitems').css({position: 'relative'});
                                    $('#' + rel).show();
                                });
                            });
                        }
                    });
                    if ($('#' + rel).is(':hidden')) {
                        $('.subitems').css({position: 'absolute'});
                        $('#' + rel).fadeTo('normal', 1, function() {
                            $('.subitems').css({position: 'relative'});
                            $('#' + rel).show();
                        });
                    }
                }
            });
});
