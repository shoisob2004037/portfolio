document.addEventListener('DOMContentLoaded', function(){
    var navbtn = document.getElementById("navbtn");
    var nav = document.getElementById("nav");
    var menu = document.getElementById("menu");
    nav.style.right = "-180px";
    navbtn.onclick = function(){
        if(nav.style.right == "-180px"){
            nav.style.right = "0";
            menu.src = "https://www.freeiconspng.com/uploads/close-icon-47.png";
        }
        else{
            nav.style.right ="-180px";
            menu.src = "https://static.thenounproject.com/png/727792-200.png";
        }
    }

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });

    var typed = new Typed("#text", {
        strings: ["Engineer", "Web Developer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

    // Select all "Read More" buttons
    var readMoreButtons = document.querySelectorAll('.btn');

    // Loop through each button and add click event listener
    readMoreButtons.forEach(function(button) {
        button.addEventListener('click', function(event) {
            // Prevent default link behavior
            event.preventDefault();

            // Find the sibling additional text element
            var additionalText = this.parentElement.nextElementSibling;

            // Toggle the visibility of additional text
            if (additionalText) {
                additionalText.style.display = 'block'; // Show the additional text

                // Apply transition effect
                setTimeout(function() {
                    additionalText.style.color = 'yellow'; // Change color to red
                }, 50); // Delay the color change for 50 milliseconds for the transition effect
            }
        });
    });
    
});
