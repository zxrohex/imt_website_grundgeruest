const log = console.log;

function toggleDebug() {
    $(":root").toggleClass("debug");
}

$(function () {
    $(window).on("scroll", function () {
       if ($(window).scrollTop() > 140) {
           $("body").addClass("scrolled");
       } else {
           $("body").removeClass("scrolled");
       }
    });
});