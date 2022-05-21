(function ($) {
    "use strict";
    
    //One Page Nav
    var top_offset = $('.header-area').height() - 10;
    $('.main-menu nav .main-nav').onePageNav({
        currentClass: 'active',
        scrollOffset: top_offset,
    });
    
    //sticky Menu
    $(window).on('scroll', function () {
        var scroll = $(window).scrollTop();
        if (scroll < 150) {
            $(".header-area").removeClass("sticky");
        } else {
            $(".header-area").addClass("sticky");
        }
    });
    
    
    // scrollToTop
    $.scrollUp({
        scrollName: 'scrollUp', // Element ID
        topDistance: '300', // Distance from top before showing element (px)
        topSpeed: 300, // Speed back to top (ms)
        animation: 'fade', // Fade, slide, none
        animationInSpeed: 200, // Animation in speed (ms)
        animationOutSpeed: 200, // Animation out speed (ms)
        scrollText: '<i class="fas fa-angle-up"></i>', // Text for element
        activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    });
    
    // WOW active
    new WOW().init();
    /* ===================================
       Owl Carousel
      ====================================== */

    //Testimonial Slider

    $("#testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
        dots: true,
        dotsContainer: "#testimonials-avatar",
        autoplayTimeout: 6000,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });
    //branding-slider-active
    $('#branding-slider').owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });
    //counter active
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    //PRELOADER
    $(window).on('load', function() {
        $("#proloader").delay(1000).fadeOut(500);
    });


})(jQuery);



//PRELOADER
$(window).on('load', function() {
    $("#proloader").delay(1000).fadeOut(500);
});

//HUMBARGAR_MENU
function openNav(){
    document.getElementById("myNav").style.width = "100%";
}
function closeNav(){
    document.getElementById("myNav").style.width = "0%";
}


// window.addEventListener("scroll", function(){
//     var header = document.querySelector(".headerArea");
//     header.classList.toggle("sticky", window.scrollY > 0);

// });