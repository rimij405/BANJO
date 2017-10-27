/*
    Navigation.js
    Ian Effendi
    
    Navigation.js offsets the margins when the open navigation button
    is pressed, and resets them when the window is resized
    or when the navigation panel is closed.
*/

var mq = window.matchMedia( "(min-width: 600px)" );

function openPushNav() {
    document.getElementById("desktop-nav").style.width = "275px";
    document.getElementById("main-content").style.marginLeft = "275px";
    document.body.style.backgroundColor = "rgba(5,5,5,0.4)";
}

function closePushNav() {
    document.getElementById("desktop-nav").style.width = "0px";

    if(mq.matches)
    {
        document.getElementById("main-content").style.marginLeft = "35px";   
        document.getElementById("main-content").style.marginRight = "35px";   
    }
    else
    {        
        document.getElementById("main-content").style.marginLeft = "0px";
        document.getElementById("main-content").style.marginRight = "0px";   
    
    }
    
    document.body.style.backgroundColor = "white";
}

window.addEventListener('resize', function (event) {
    closePushNav();
});