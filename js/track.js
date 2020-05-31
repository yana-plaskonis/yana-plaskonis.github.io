$(document).ready(function () {

    var currentplayobj;
    var namehref;

    $('.track').mouseenter(function () {
        var parentobj = $(this).parent();
        currentplayobj = $(".startplay");
        if (currentplayobj.length &&
            !parentobj.hasClass('active'))
            currentplayobj.css("opacity", 0);
    });

    $('.track').mouseleave(function () {
        var parentobj = $(this).parent();
        currentplayobj = $(".startplay");
        if (currentplayobj.length &&
            !parentobj.hasClass('active')) {
            currentplayobj.css("opacity", 1);
            currentplayobj.removeAttr('style');
        }
    });

    $('.track').click(function () {

        var parentelem = $('.track').parent();

        if (parentelem.hasClass('active'))
            $('.track').parent().removeClass('active');

        $(this).parent().addClass('active');

        if ($('.startplay').length) {
            $('.startplay').removeAttr('style');
            $('.startplay').removeClass('startplay');
        }

        $('#soundbox').removeAttr('class');
        $('#play').removeAttr('class');

        var trackstyle = $(this).parent().attr('id');

        namehref = 'sect_' + trackstyle;
        var id = '#' + namehref;
        $('#play a').attr("href", id);
        var tracklabel = '.' + trackstyle;
        var tracklabelobj = $(tracklabel);
        if (tracklabelobj.hasClass('startplay')) {
            tracklabelobj.removeClass('startplay');
        } else {
            tracklabelobj.addClass('startplay');
            currentplayobj = tracklabelobj;
        }

        $('#play').addClass('open');
        $('#play').addClass(trackstyle);
        $('#soundbox').addClass(trackstyle);
    });

    $('#play a').click(function (event) {
        event.stopPropagation();
        //        var id = '#' + namehref;
        //        $(this).attr("href", id);

        if ($('#soundbox').hasClass('play'))
            $('#soundbox').removeClass('play');

        $('#soundbox').addClass('play');
        if ($('#vinyl').hasClass('play'))
            $('#vinyl').removeClass('play');

        $('#vinyl').addClass('play');

        setTimeout(function () {
            $('#soundbox').removeClass('play');
            $('#vinyl').removeClass('play');
            //            $('#play a').attr("href", "");
        }, 4500);

        //        $('html, body').delay(5500).animate({
        //            scrollTop: target
        //        }, 500);
    });

    $('#lnkstyle').click(function (event) {

        event.stopPropagation();

        if ($('#nroll').hasClass('active'))
            $('#nroll').removeClass('active');

        $('#nroll').addClass('active');

        if ($('.startplay').length) {
            $('.startplay').removeAttr('style');
            $('.startplay').removeClass('startplay');
        }

        $('#soundbox').removeAttr('class');
        $('#play').removeAttr('class');

        namehref = 'sect_nroll';
        var id = '#' + namehref;
        $('#play a').attr("href", id);

        var tracklabel = '.nroll';
        var tracklabelobj = $(tracklabel);
        if (tracklabelobj.hasClass('startplay')) {
            tracklabelobj.removeClass('startplay');
        } else {
            tracklabelobj.addClass('startplay');
            currentplayobj = tracklabelobj;
        }

        $('#play').addClass('open');
        $('#play').addClass('nroll');
        $('#soundbox').addClass('nroll');
    });
});

function defaultplay() {

    if ($('#nroll').hasClass('active'))
        $('#nroll').removeClass('active');

    $('#nroll').addClass('active');

    if ($('.startplay').length) {
        $('.startplay').removeAttr('style');
        $('.startplay').removeClass('startplay');
    }

    $('#soundbox').removeAttr('class');
    $('#play').removeAttr('class');

    namehref = 'sect_nroll';
    var id = '#' + namehref;
    $('#play a').attr("href", id);

    var tracklabel = '.nroll';
    var tracklabelobj = $(tracklabel);
    if (tracklabelobj.hasClass('startplay')) {
        tracklabelobj.removeClass('startplay');
    } else {
        tracklabelobj.addClass('startplay');
        currentplayobj = tracklabelobj;
    }

    $('#play').addClass('open');
    $('#play').addClass('nroll');
    $('#soundbox').addClass('nroll');

    if ($('#soundbox').hasClass('play'))
        $('#soundbox').removeClass('play');

    $('#soundbox').addClass('play');
    if ($('#vinyl').hasClass('play'))
        $('#vinyl').removeClass('play');

    $('#vinyl').addClass('play');

    setTimeout(function () {
        $('#soundbox').removeClass('play');
        $('#vinyl').removeClass('play');
        $('#lnkstyle').removeClass('first');
        //            $('#play a').attr("href", "");
    }, 4500);
}
