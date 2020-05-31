$(document).ready(function(){
	$('#slider-01').slick({
        autoplay:false,
        autoplaySpeed:7000,
		arrows: false,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350
	}).on("mousewheel", function (event) {
        event.preventDefault();
        if (event.deltaX > 0 || event.deltaY < 0) {
            $(this).slick('slickNext');
        } else if (event.deltaX < 0 || event.deltaY > 0) {
            $(this).slick('slickPrev');
        };
        event.stopPropagation();
    }).on('mousedown touchstart', function () {
    }).on('mousemove touchmove', function () {
        event.stopPropagation();
    }).on('mouseleave touchend mouseup', function () {
    });
});