const log = console.log;

function toggleDebug() {
    $(":root").toggleClass("debug");
}

/*
function selectElement(elem) {
    var test2 = elem.outerHTML;
    log(test2);
    for (var s of test2) {
        log(s);
        $("code").html($("<div>").text(test2).html());
    }
}

var isSelectorActive = false;

var selectorBtnText = () => isSelectorActive ? "Deaktivieren" : "Aktivieren";
*/

/*
function test1(ed) {

        if (ed.target !== $("#activate-selector-btn").get(0)) {
            console.log(ed);

            selectElement(ed.target);

            isSelectorActive = false;

        } else {
            ed.preventDefault();

            isSelectorActive = false;
        }

    ed.preventDefault();



}
 */

$(function () {

    /*$(document).on("selector", function (e) {
        log(isSelectorActive);

        if (isSelectorActive) {
            isSelectorActive = false;

            $(document).off("click", test1);
        } else {
            isSelectorActive = true;

            $(document).one("click", test1);
        }
        e.preventDefault();

    });

    $("#activate-selector-btn").on("click", function (e) {



  e.stopPropagation();
            $(document).trigger("selector");



    });*/


});