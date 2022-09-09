/* ==============
 ========= js documentation =========

 * theme name: 
 * version: 1.0
 * description: 
 * author: Apex

    =========================

     01. wow init
     ---------------------------
     02. select language
     ---------------------------
     03. 
     ---------------------------
     04. 
     ---------------------------
     05. 
     ---------------------------
     06. 
     ---------------------------
     07. 
     ---------------------------
     08. 

    =========================
============== */


(function ($) {
    "use strict";

    jQuery(document).ready(function () {

        // wow init
        new WOW().init();

        // select language
        $(".language-select").niceSelect();

        // testimonial slider
        $(".testimonial__area")
            .not(".slick-initialized")
            .slick({
                infinite: true,
                autoplay: true,
                focusOnSelect: true,
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
                responsive: [
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                        },
                    }
                ],
            });

        // user type
        $("#userType").niceSelect();

        //counter
        $(".counter-item").counterUp({
            delay: 10,
            time: 1000,
        });
    });

})(jQuery);