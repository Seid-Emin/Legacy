$(document).ready(function () {

    // toggle menu with animations
    $('.menu-icon').click(function () {
        $('.menu-icon-bar1').toggleClass('bar1-active');
        $('.menu-icon-bar2').toggleClass('bar2-active');
        $('.menu-icon-bar3').toggleClass('bar3-active');
        $('.nav').toggleClass('navActive');
    });


    // hover efect on projects
    $('.works_project-link-list li').hover(function () {
        var classOfHoveredLink = $(this).attr('class').replace('works_project-link-list-item ', '');
        var imgClassToShow = $('.works_bg-project-image-wrap-inner div').hasClass(`works_bg-project-${classOfHoveredLink}`);
        if (imgClassToShow) {
            $('.works_bg-project-' + classOfHoveredLink).toggleClass('projectBG-active');
            $('.menu-icon').toggleClass('hideItem');
            $('.logo').toggleClass('hideItem');
            $('.works_project-link-list-item').toggleClass('hideItem');
            $(this).removeClass('hideItem');
        }
    });






});