$(document).ready(function(){
    $("#design").click(function(){
        $("#designs").toggle();
        // $("#design").toggle();
    });
    $("#development").click(function(){
        $("#developments").toggle();
        $("img#development").toggle();
    });
    $("#products").click(function(){
        $("#product").toggle();
    });
});