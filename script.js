const log = console.log;

function toggleDebug() {

}

$(function () {
    $(window).on("scroll", function () {
       if ($(window).scrollTop() > 140) {
           $("body").addClass("scrolled");
       } else {
           $("body").removeClass("scrolled");
       }
    });

    $("#debug-btn").on("click", function () {
        $(":root").toggleClass("debug");
    });
});