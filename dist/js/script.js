$(document).ready(function(){
    $('.feedback__wrapper').slick({
        dots: false,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="img/feedback/arrow_left.png"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/feedback/arrow_right.png"></button>',

        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                    speed: 500,
                }
            }
        ]
    });
});


var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 400);
    return false;
});