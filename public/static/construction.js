$(document).ready(function(){
    $("#main-header").hide();
    $("#main-header").slideToggle(1000);
        
});

setInterval(()=> {
    $("#dots").html(setDots());
}, 1000);

var i = 0;
var dots = ["",".",". .",". . ."];
function setDots() {
    i++;
    return dots[i%4];
}