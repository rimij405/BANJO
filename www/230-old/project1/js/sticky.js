/*
    Sticky.js
    Ian Effendi
    
    Sticky.js attaches the ".stick" class to elements
    after a pre-determined number of pixels has been scrolled to.
*/

// Sticky Scroll
// idValue = the #id of the element you want to modify.
// trigger = the number of pixels that must be scrolled past before triggering.
var stickyScroll = function(idValue, trigger) {
    
    // Get the element matching the indicated ID.
    elem = document.getElementById(idValue);
    
    // Get the current scroll position.
    var y = window.scrollY;
    
    // Determine the class to add or remove based on the idValue.
    var nameOfClass = "stick"; // Default.
    
    if(idValue === "nav-aside")
    {
        nameOfClass = "stick";
    }
    else if(idValue === "mobile-nav")
    {
        nameOfClass = "stick-nav";        
    }
        
    // If the current scroll position is /past/ the trigger pixel value.
    if(y >= trigger){        
        if (elem.classList)
        {
          elem.classList.add(nameOfClass);
        }
        else
        {
          elem.className += ' ' + nameOfClass;
        }
    }
    else 
    {
        if (elem.classList)
        {
            elem.classList.remove(nameOfClass);
        }
        else
        {   
            elem.className = elem.className.replace(new RegExp('(^|\\b)' + nameOfClass.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
        }
    }    
}

// Current Section
// idValue = the #id of the element you want to listen for.
// target = the #id of the element you want to modify.
// scrollValue = the number of pixels to scroll past before changing the current.



window.addEventListener("scroll", function(event) {
    stickyScroll("nav-aside", 525)
});

window.addEventListener("scroll", function(event) {
    stickyScroll("mobile-nav", 135)
});