// makes sure menu doesn't close when mouse is hovering
var mouseIn = false;
var clicked = false;
var opened = false;

$(document).ready(function () {
    $("#tabs").hide();

    // $("#top-bar").mouseenter(function () { 
    //     mouseIn = true;
    // });
    // $("#top-bar").mouseleave(function () { 
    //     mouseIn = false;
    //     setTimeout( () => { 
            
    //     }, 2000);
    // });

    $("#bar-main").click(function (e) { 
        e.preventDefault();
        if(opened) {
            $("#tabs").hide("slide");
            opened = false;
        }
        else {
            $("#tabs").show("slide");
            opened = true;
        }
    });


    // $("#tabs").click(function (e) { 
    //     e.preventDefault();
    //     $("#tabs").hide("slide");
    // });
});






