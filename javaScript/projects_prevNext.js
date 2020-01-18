$(document).ready(function () {

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


    // change background-color and text color according to the currect page
    var setBgColor = $('.project').attr('class').replace('project project_', '');
    $('.project_text').addClass('bg-' + setBgColor).addClass('project_text-' + setBgColor);
    $('.project_display-wrap').addClass('bg-' + setBgColor);
});