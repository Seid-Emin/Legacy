$(document).ready(function () {

    // toggle menu with animations
    $('.menu-icon').click(function () {
        $('.menu-icon-bar1').toggleClass('bar1-active');
        $('.menu-icon-bar2').toggleClass('bar2-active');
        $('.menu-icon-bar3').toggleClass('bar3-active');
        $('.nav').toggleClass('navActive');
    });
});