$(document).ready(function(){
    $("#design").click(function(){
        $("#designs").toggle();
        $("#image1").toggle();
    });
    $("#development").click(function(){
        $("#developments").toggle();
        $("#image2").toggle();
    });
    $("#products").click(function(){
        $("#product").toggle();
        $("#image3").toggle();
    });

    $("#mouseclick").click(function(){
        $("#about").show();
    });
});