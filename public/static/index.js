// makes sure menu doesn't close when mouse is hovering
var mouseIn = false;

$(document).ready(function () {
    $("#tabs").hide();

    $("#top-bar").mouseenter(function () { 
        mouseIn = true;
        $("#tabs").show("slide");
    });
    $("#top-bar").mouseleave(function () { 
        mouseIn = false;
        setTimeout(() => { 
            if (!mouseIn) {
                $("#tabs").hide("slide");
            }
        }, 2000);
    });
});





