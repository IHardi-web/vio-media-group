

$(document).ready(function () {
    AOS.init();

    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        slideBy: 'page',
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            577: {
                items: 3,
            },
            993: {
                items: 4,
            }
        }
    })
});