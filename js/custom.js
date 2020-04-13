$(function () {
    $(".slide-active").slick({
        dots: true,
        arrows: false,
    });



    $(".slick-dots li:nth-child(1) button").html('<i class="fa fa-home" aria-hidden="true"></i>');

    $(".single-slide").slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
    });


    //    venoBox

    $('.venobox').venobox({

    });


    //user feedback slide
    $('.fb-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.fb-img-slide'
    });
    $('.fb-img-slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.fb-slide',
        dots: true,
        centerMode: true,
        centerPadding: "0px",
        focusOnSelect: true,
        arrows: false,
        autoplay: true,
    });

    //    preloader js
    $(window).load(function () {
        $(".preloader").delay(2000).fadeOut();
    });

    //    sticky
    $(window).scroll(function () {
        var scrollAmount = $(window).scrollTop();
        if (scrollAmount > 400) {
            $(".navbar").addClass('sticky');
        } else {
            $(".navbar").removeClass("sticky");
        }

    });

    //    SmoothScroll
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 500,
        offset: 95,
        clip: true,
    });







});
