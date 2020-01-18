$(document).ready(function () {

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
});