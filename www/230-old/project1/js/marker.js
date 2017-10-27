/*
    Marker.js
    Ian Effendi
    
    Marker.js attaches the "current" tag to the element when things are scrolled by and within
    a certain range.
*/

// Marker Scroll
// idValue = the #id of the element you want to modify.
var markerScroll = function(idValue) {
    
    // Get the element matching the indicated ID.
    elem = document.getElementById(idValue);
        
    // start = the number of pixels that must be scrolled past before triggering.
    start = elem.dataset.start;
    
    end = elem.dataset.end;
        
    // Get the current scroll position.
    var y = window.scrollY;
    
    // Determine the class to add or remove based on the idValue.
    var nameOfClass = "current"; // Default.
        
    // If the current scroll position is /past/ the trigger pixel value.
    if(y >= start && y < end){        
        setClassName(elem, nameOfClass);
    }
    else 
    {
        removeClassName(elem, nameOfClass);
    }    
}

var setClassName = function(elem, nameOfClass) {
    if (elem.classList)
    {
      elem.classList.add(nameOfClass);
    }
    else
    {
      elem.className += ' ' + nameOfClass;
    }   
}

var removeClassName = function(elem, nameOfClass) {
    if (elem.classList)
    {
        elem.classList.remove(nameOfClass);
    }
    else
    {   
        elem.className = elem.className.replace(new RegExp('(^|\\b)' + nameOfClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
    }
}

// Triggers should be page-specific and added per page.
// window.addEventListener("scroll", function(event) {
//    markerScroll("tagged", 455, 550)
// });