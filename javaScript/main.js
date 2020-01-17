$(document).ready(function () {

    // toggle menu with animations
    $('.menu-icon').click(function () {
        $('.menu-icon-bar1').toggleClass('bar1-active');
        $('.menu-icon-bar2').toggleClass('bar2-active');
        $('.menu-icon-bar3').toggleClass('bar3-active');
        $('.nav').toggleClass('navActive');
    });


    // hover efect on projects

    /* ------- Works hover ------- */
    $('.works_project-link-list-item').hover(function () {
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

    /* ------- Prev-Next hover ------- */
    $('.project-prevNext div').hover(function () {
        var classOfHoveredLinkPrev = $(this).attr('class').replace('project_prevProject-link-wrap ', '');
        var classOfHoveredLinkNext = $(this).attr('class').replace('project_nextProject-link-wrap ', '');
        var imgClassToShowPrev = $('.prev-nextProject-window div').hasClass(`project-${classOfHoveredLinkPrev}`);
        var imgClassToShowNext = $('.prev-nextProject-window div').hasClass(`project-${classOfHoveredLinkNext}`);
        if (imgClassToShowPrev || imgClassToShowNext) {
            $('.project-' + classOfHoveredLinkPrev).toggleClass('projectBG-active');
            $('.project-' + classOfHoveredLinkNext).toggleClass('projectBG-active');
            $('.menu-icon').toggleClass('hideItem');
            $('.logo').toggleClass('hideItem');
            $('.project-prevNext div').toggleClass('hideItem');
            $(this).removeClass('hideItem');
        }
    });




});