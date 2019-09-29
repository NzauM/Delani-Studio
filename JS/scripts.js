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

    // $("#mouseclick").click(function(){
    //     $("#about").slideUp("slow");
    // });

    // $("#submit").click(function(){
    //     $("alert")("Message received");
    // });

    // $(".form").submit(function(){
    //     alert("Message received" );
    // });
    // $("#submit").click(function(submit){
    //     alert("Message received" + name);
    // });
// });

    $("#submit").click(function(){
        submit();
        event.preventDefault();
    })
        
});

function submit(){
    var name=document.getElementById("name").value;
    var messages = document.getElementById("message").value;
    if(name,messages == ''){
        alert("Please fill out the fields")
    }
    else{
    alert("Thankyou for contacting us.Message received" + ' ' + name );
    }
};

