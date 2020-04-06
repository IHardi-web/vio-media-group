$(document).ready(function () {
    // Start animations
    $(function () {
        AOS.init({
            duration: 1200,
        });
    });

    $(".section-heading span").attr("data-aos", "zoom-in");

    // Carousel
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
    });

    // Navbar scroll
    $(window).scroll(function () {
        if ($(window).scrollTop() > 600) {
            $(".navbar").addClass(" fixed-top bg-dark");
        }
        else {
            $(".navbar").removeClass(" fixed-top bg-dark");
        }
    });
});