//Code for quiz builder
$(document).ready(function () {

    function getType() {
        var selection = $("#quizSelectorList").
        console.log(selection);
    }
    
    function shortAnswer() {

    }

    function buildSelect() {

    }

    function buildTrueFalse() {

    }

    function buildMultiple() {

    }

    function calculateScore() {

    }

    function textArea() {

    }

    $("#btnAddQuestion").click(function () {
        var selection = $("#quizSelectorList").val();
    }); //end of click even handler for btnAddQuestion
});//end ready




/*JQuery for menu burger*/
$(document).ready(function () {
    $('#nav-btn').click(function () {
        $(this).next().toggle();
    });
});

$(window).resize(function () {
    if ($(window).width() > 600)
        $('.navList').css("display", "block");
    else
        $('.navList').css("display", "none");
});