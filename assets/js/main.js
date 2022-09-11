/* ==============
 ========= js documentation =========

 * theme name: 
 * version: 1.0
 * description: 
 * author: Apex
 * author url: 

    =========================

     01. data background
     ---------------------------
     02. navbar
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

        // data background
        $("[data-background]").each(function () {
            $(this).css(
                "background-image",
                "url(" + $(this).attr("data-background") + ")"
            );
        });

        // navbar
        $(".nav__bar").on("click", function () {
            $(this).toggleClass("nav__bar-toggle");
            $(".nav__menu").toggleClass("nav__menu-active");
            $(".backdrop").toggleClass("backdrop-active");
            $("body").toggleClass("body-active");
        });

        $(".backdrop, .nav__menu-close").on("click", function () {
            $(".backdrop").removeClass("backdrop-active");
            $(".nav__bar").removeClass("nav__bar-toggle");
            $(".nav__menu").removeClass("nav__menu-active");
            $(".nav__menu-link--dropdown").next(".nav__dropdown").slideUp(500);
            $(".nav__menu-link--dropdown").removeClass("nav__menu-link--dropdown-active");
            $("body").removeClass("body-active");
        });

        $(window).on("resize", function () {
            $(".backdrop").removeClass("backdrop-active");
            $(".nav__bar").removeClass("nav__bar-toggle");
            $(".nav__menu").removeClass("nav__menu-active");
            $(".nav__dropdown").removeClass("nav__dropdown-active");
            $("body").removeClass("body-active");
        });

        if (window.matchMedia('(max-width: 1199px)').matches) {
            $(".nav__menu-link--dropdown").on("click", function () {
                $(this).next(".nav__dropdown").slideToggle(500);
                $(this).toggleClass("nav__menu-link--dropdown-active");
            });
        }

        // on window scroll
        $(window).on("scroll", function () {
            // position navbar on scroll
            var scroll = $(window).scrollTop();
            if (scroll < 100) {
                $(".header").removeClass("sticky-active");
            } else {
                $(".header").addClass("sticky-active");
            }
        });

        // invest amount progress
        $('.total-amount').each(function () {
            $(this).isInViewport(function (status) {
                if (status === "entered") {
                    $(this).find('.collected-amount').animate({
                        width: $(this).attr('data-percentage')
                    }, 1000);

                    $(this).find('.amount-tooltip').animate(
                        { "left": $(this).attr('data-percentage') },
                        {
                            duration: 1000,
                            step: function (now) {
                                var data = now.toFixed(2);
                                $(this).find('.percent').html(data + '%');
                            }
                        });
                };
            });
        });

        // open reply form
        $(".open-reply").on("click", function () {
            $(this).next(".reply-form").slideToggle();
        });

        // faq tab
        $(".faq__content-single").hide();
        $(".faq__content-single:first").show();
        $(".faq-button").on("click", function () {
            $(".faq-button").removeClass("cmn-button--active");
            $(this).addClass("cmn-button--active");
            $(".faq__content-single").hide();
            var faqActive = $(this).attr("href");
            $(faqActive).fadeIn(500);
            return false;
        });

        // works tab
        $(".works__tab-content").hide();
        $(".works__tab-content:first").show();
        $(".works__tab-button").on("click", function () {
            $(".works__tab-button").removeClass("works__tab-button--active");
            $(this).addClass("works__tab-button--active");
            $(".works__tab-content").hide();
            var worksActive = $(this).attr("href");
            $(worksActive).fadeIn(500);
            return false;
        });

        // case filter
        $(".case__filter-btn").on("click", function () {
            $(".case__filter-btn").removeClass("case__filter-btn-active");
            $(this).addClass("case__filter-btn-active");
            $(".case__filter-item").removeClass("outlet");
            $(".case__filter-item").addClass("outlet");

            var $caseItem = $(this).attr("data-case");

            if ($caseItem == "all") {
                $(".case__filter-item").removeClass("is-hidden");
            } else {
                $(".case__filter-item").addClass("is-hidden");
                $(".case__filter-item[data-case=" + $caseItem + "]").removeClass(
                    "is-hidden"
                );
            }
        });


        // explore tab
        $(".explore__tab-content").hide();
        $(".explore__tab-content:first").show();
        $(".explore__tab-btn").on("click", function () {
            $(".explore__tab-btn").removeClass("explore__tab-btn--active");
            $(this).addClass("explore__tab-btn--active");
            $(".explore__tab-content").hide();
            var exploreActive = $(this).attr("href");
            $(exploreActive).fadeIn(500);
            return false;
        });

        // project tab
        $(".in-con__des-tab__content").hide();
        $(".in-con__des-tab__content:first").show();
        $(".in-content__description-tab__btn").on("click", function () {
            $(".in-content__description-tab__btn").removeClass("in-content__description-tab__btn-active");
            $(this).addClass("in-content__description-tab__btn-active");
            $(".in-con__des-tab__content").hide();
            var projectActive = $(this).attr("href");
            $(projectActive).fadeIn(500);
            return false;
        });

    });

})(jQuery);