// >>>>Change image on the accordion with the click!
// >> Section for Organisation!
// Select all labels (since they contain the headings and SVGs)
var labels = document.querySelectorAll("#accordion label");
var imageElement = document.querySelector(".image-swap");

labels.forEach(function(label, index) {
    label.addEventListener("click", function() {
        var imageSrc = "Images/power1.htm";
        if (index === 0) {
            imageSrc = "Images/power1.htm";
        } else if (index === 1) {
            imageSrc = "Images/power2.htm";
        } else if (index === 2) {
            imageSrc = "Images/power3.htm";
        }

        // Remove the active class from the current image
        imageElement.classList.remove("active");

        // Change the image source after a short delay
        setTimeout(function() {
            imageElement.src = imageSrc;
            imageElement.classList.add("active");
        }, 650); // Delay slightly less than transition time
    });
});


//change from radio to the checkbox for easy slidershow (up-down)!

const radioInputs = document.querySelectorAll("[name='accordion']");
const mediaQuery = window.matchMedia("(max-width: 925px)");

function handleMediaQuery(e) {
  radioInputs.forEach(radioInput => {
    if (e.matches) {
      radioInput.type = "checkbox"; // Change to checkbox on smaller screens
    } else {
      radioInput.type = "radio"; // Change back to radio on larger screens
    }
  });
}

mediaQuery.addEventListener("change", handleMediaQuery);
handleMediaQuery(mediaQuery);

//-----------------------

// >>>>Move the slider one!
// >> For Products!
var group1 = document.querySelector('.group-1');
var group2 = document.querySelector('.group-2');
var group3 = document.querySelector('.group-3');
var currentPositionGroup = 0;
var slideWidthGroup = 100; 
var maxPositionGroup = -slideWidthGroup * 2; 

function updateSlideWidth() {
    if (window.innerWidth <= 540) {
        slideWidthGroup = 50; 
        maxPositionGroup = -slideWidthGroup * 5;
    } else {
        slideWidthGroup = 100;
        maxPositionGroup = -slideWidthGroup * 2;        
    }
}

updateSlideWidth();
window.addEventListener('resize', updateSlideWidth);
document.querySelector(".left-arrow-group").classList.add("disabled-arrow");
document.querySelector('.arrows-group .right-arrow-group').addEventListener('click', function() {
    if (currentPositionGroup > maxPositionGroup) {
        currentPositionGroup -= slideWidthGroup;
        group1.style.transform = 'translateX(' + currentPositionGroup + '%)';
        group2.style.transform = 'translateX(' + currentPositionGroup + '%)';
        group3.style.transform = 'translateX(' + currentPositionGroup + '%)';

        document.querySelector(".left-arrow-group").classList.remove("disabled-arrow");
    }

    if (currentPositionGroup === maxPositionGroup) {
        document.querySelector(".right-arrow-group").classList.add("disabled-arrow");
    }
});

document.querySelector('.arrows-group .left-arrow-group').addEventListener('click', function() {
    if (currentPositionGroup < 0) {
        currentPositionGroup += slideWidthGroup;
        group1.style.transform = 'translateX(' + currentPositionGroup + '%)';
        group2.style.transform = 'translateX(' + currentPositionGroup + '%)';
        group3.style.transform = 'translateX(' + currentPositionGroup + '%)';

        document.querySelector(".right-arrow-group").classList.remove("disabled-arrow");
    }

    if (currentPositionGroup === 0) {
        document.querySelector(".left-arrow-group").classList.add("disabled-arrow");
    }
});


//-----------------------



// >>>>Drop-down Click!
// First Nav-Bar!
// Select all dropdown items
var dropdownItems = document.querySelectorAll(".nav-list .dropdown");

// Add click event listener to each dropdown item
dropdownItems.forEach(function(item) {
    item.addEventListener("click", function(event) {
        // Toggle the visibility of the dropdown content
        var dropdownContent = this.querySelector(".dropdown-content");
        dropdownContent.classList.toggle("show");

        // Prevent the click event from propagating to the document
        event.stopPropagation();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const dropdowns = document.querySelectorAll(".dropdown");

    // Show the dropdown on click
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener("click", function(event) {
            // Hide all other dropdowns
            dropdowns.forEach(function(dd) {
                if (dd !== dropdown) {
                    dd.querySelector(".dropdown-content").style.display = "none";
                }
            });

            // Toggle the clicked dropdown
            const dropdownContent = this.querySelector(".dropdown-content");
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
            } else {
                dropdownContent.style.display = "block";
            }

            // Prevent the click from propagating to the document
            event.stopPropagation();
        });
    });

    // Hide the dropdown if clicked outside
    document.addEventListener("click", function() {
        dropdowns.forEach(function(dropdown) {
            dropdown.querySelector(".dropdown-content").style.display = "none";
        });
    });

    // Hide the dropdown on scroll
    window.addEventListener("scroll", function() {
        dropdowns.forEach(function(dropdown) {
            dropdown.querySelector(".dropdown-content").style.display = "none";
        });
    });
});

//-----------------------

// >>>>second-dropdown!
var dropdowns = document.querySelectorAll(".dropdown-sticky");

dropdowns.forEach(function(dropdown) {
    var select = dropdown.querySelector(".select");
    var caret = dropdown.querySelector(".caret");
    var menu = dropdown.querySelector(".menu");
    var options = dropdown.querySelectorAll(".menu li");
    var selected = dropdown.querySelector(".selected");

    select.addEventListener("click", function() { 
        select.classList.toggle("select-clicked");
        caret.classList.toggle("caret-rotate"); // Corrected the class name
        menu.classList.toggle("menu-open");
    });

    options.forEach(function(option) {
        option.addEventListener("click", function() {
            selected.innerText = option.innerText; // Corrected property name to innerText
            select.classList.remove("select-clicked");
            caret.classList.remove("caret-rotate");
            menu.classList.remove("menu-open");

            options.forEach(function(option) {
                option.classList.remove("active");
            });

            option.classList.add("active");
        });
    });
});

//-----------------------

// for customer stories!!
// >> slider-two!!

// without arrows.
var companyNames = document.querySelectorAll('.company-name');
var slider = document.querySelector('.grid-slider-two');
var items = document.querySelectorAll('.item-slider-two');
var totalItems = items.length;

companyNames.forEach(function(companyName, index) {
    companyName.addEventListener('click', function() {
        // Calculate the position to slide to
        var newPosition = -100 * index; // Each item takes 100% width
        slider.style.transform = 'translateX(' + newPosition + '%)';
        slider.style.transition = 'transform 0.5s ease'; // Smooth transition
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.nav-link');
    var underlineSpans = document.querySelectorAll('.underline-sticky');
    
    // Function to remove underline from all spans
    function removeUnderline() {
        underlineSpans.forEach(function(span) {
            span.style.width = '0';
        });
    }

    // Add event listener to each nav link
    navLinks.forEach(function(link, index) {
        link.addEventListener('click', function() {
            removeUnderline(); // Remove underline from all spans
            underlineSpans[index].style.width = '100%'; // Underline the clicked link
        });
    });
});

//-----------------------
// with arrows!!

var items = document.querySelectorAll(".grid-slider-two .item-slider-two");
var currentPosition = 0;
var slideWidth = 100; // Assuming each slide is 100% of the container width
var totalSlides = items.length;
var maxPosition = -((totalSlides - 1) * slideWidth); // Max negative translation

// Initialize arrow states
document.querySelector('.arrows-company .left-arrow-two').classList.add('disabled');

document.querySelector('.arrows-company .right-arrow-two').addEventListener('click', function() {
    if (currentPosition > maxPosition) {
        currentPosition -= slideWidth;
        items.forEach(function(item) {
            item.style.transform = 'translateX(' + currentPosition + '%)';
        });

        // Enable left arrow if the slider moves right
        document.querySelector('.arrows-company .left-arrow-two').classList.remove('disabled');
    }
    
    // Disable right arrow if it's at the farthest right position
    if (currentPosition === maxPosition) {
        document.querySelector('.arrows-company .right-arrow-two').classList.add('disabled');
    }
});

document.querySelector('.arrows-company .left-arrow-two').addEventListener('click', function() {
    if (currentPosition < 0) {
        currentPosition += slideWidth;
        items.forEach(function(item) {
            item.style.transform = 'translateX(' + currentPosition + '%)';
        });

        // Enable right arrow if the slider moves left
        document.querySelector('.arrows-company .right-arrow-two').classList.remove('disabled');
    }
    
    // Disable left arrow if it's at the original position
    if (currentPosition === 0) {
        document.querySelector('.arrows-company .left-arrow-two').classList.add('disabled');
    }
});

//-----------------------