$(document).ready(function() {
    var carousel = $("#screenshorts").waterwheelCarousel({
        flankingItems: 4,
    });

    $('#prev').bind('click', function() {
        carousel.prev();
        return false
    });

    $('#next').bind('click', function() {
        carousel.next();
        return false;
    });
});








//owl carousel hero slider
$(document).ready(function() {

    $('.testimonials_slider').owlCarousel({
        loop: false,
        margin: 115,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            960: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    $('.testimonials_slider_page').owlCarousel({
        loop: false,
        margin: 115,
        nav: false,
        dots: false,
        items: 1,


    })
    $('.blog_slider').owlCarousel({
        loop: false,
        margin: 20,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            767: {
                items: 1
            },
            960: {
                items: 2
            },
            1200: {
                items: 3
            }
        }
    })
    /*for updates, latest events, news  */
    $('.update-slider-notification').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        items: 1,
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        autoplay: true,
        autoplayTimeout:3000

    })

    $('.update-slider-event').owlCarousel({
       loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        items: 1,
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        autoplay: true,
        autoplayTimeout:4000


    })

    $('.update-slider-tol').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        dots: false,
        items: 1,
        autoplayHoverPause: true,
        animateOut: 'slideOutUp',
        animateIn: 'slideInUp',
        autoplay: true,
        autoplayTimeout:5000


    })


});


$(document).ready(function() {

    var checkWidth = $(document).width();

    if (checkWidth <= 767) {
        $('.choose-slider-mob').addClass("owl-carousel");
        $('.choose-slider-mob').owlCarousel({
            loop: false,
            margin: 0,
            nav: true,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,
            items: 1

        })
    }

});

