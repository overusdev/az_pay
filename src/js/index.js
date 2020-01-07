import jQuery from "jquery";
import popper from "popper.js";
import bootstrap from "bootstrap";

jQuery(function() {
    var $gamburger = $('.g_nav__top-gamburger');

    $gamburger.click(function () {
        $slideMenu.addClass('g_nav__slide-menu_state_active');
        $('.g_nav__top-left-dark-bg').addClass('g_nav__top-left-dark-bg_state_bg');
    });
});
