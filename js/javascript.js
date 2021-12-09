$(document).ready(function(){

/*---------preload relevant images before doing anything------*/

    function preload(arrayOfImages) {
        $(arrayOfImages).each(function(){
            $('<img/>')[0].src = this;
            // Alternatively you could use:
            // (new Image()).src = this;
        });
    }
    // Usage:
    preload([
        '../1211/Boockup/images/book-cover.png',
        '../1211/Boockup/images/menubook-cover.png',
        '../1211/Boockup/images/menubook-back.png',
        '../1211/Boockup/images/crewbook-cover.png',
        '../1211/Boockup/images/crewbook-back.png'
    ]);


/*change to the grabbing cursor when clicking the invite,
letting the user know that they can rotate or drag the object*/



$('.container').mousedown(function(){
    console.log("mousedown");
    $('.boockup').css("cursor", "grabbing");
    $(".book-container").css("-webkit-animation-play-state", "paused");

/*--------3d rotation will go here if i figure it out--------*/

});
$('.container').mouseup(function(){
    $('.boockup').css("cursor", "grab");
    $(".book-container").css("-webkit-animation-play-state", "running");
});

});

/*Change the invite's image when the corresponding links are clicked;
so the menu will appear when the 'menu' button is pressed, etc.*/
$("#header").click(function(){
   /* $("#invite").fadeOut(200, function(){ */
        $(".book-back").css("background-image", "url('../1211/Boockup/images/book-cover.png')");
        $(".book-front").css("background-image", "url('../1211/Boockup/images/book-cover.png')");
   /* }).fadeIn(200); */
});

$("#menubutton").click(function(){
        $(".book-back").css("background-image", "url('../1211/Boockup/images/menubook-cover.png')");
        $(".book-front").css("background-image", "url('../1211/Boockup/images/menubook-back.png')");
});

$("#crewbutton").click(function(){
    $(".book-back").css("background-image", "url('../1211/Boockup/images/crewbook-cover.png')");
    $(".book-front").css("background-image", "url('../1211/Boockup/images/crewbook-cover.png')");
});

/*------------reload gallery on link click----------*/
$("#backbutton").click(function(){
    location.href = "/Users/michelajanower/Desktop/1211/index.html";
})