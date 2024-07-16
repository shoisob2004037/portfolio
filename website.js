document.addEventListener('DOMContentLoaded', function(){
    // Existing navigation toggle functionality
    var navbtn = document.getElementById("navbtn");
    var nav = document.getElementById("nav");
    var menu = document.getElementById("menu");
    nav.style.right = "-180px";
    navbtn.onclick = function(){
        if(nav.style.right == "-180px"){
            nav.style.right = "0";
            menu.src = "https://www.freeiconspng.com/uploads/close-icon-47.png";
        } else {
            nav.style.right = "-180px";
            menu.src = "https://static.thenounproject.com/png/727792-200.png";
        }
    }

    // Smooth scrolling functionality
    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 1000,
        speedAsDuration: true
    });

    // Typed.js functionality
    var typed = new Typed("#text", {
        strings: ["Engineer", "Web Developer", "Photographer"],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});




document.getElementById('searchButton').addEventListener('click', () => {
    const searchValue = document.getElementById('searchInput').value.toLowerCase();
    const sections = ['banner', 'experties', 'photo', 'contact'];
    let found = false;

    sections.forEach(sectionId => {
        const section = document.getElementById(sectionId);
        const elements = section.querySelectorAll('p, h1, h2, h3, button');

        elements.forEach(element => {
            const text = element.textContent.toLowerCase();
            if (text.includes(searchValue)) {
                const regex = new RegExp(`(${searchValue})`, 'gi');
                element.innerHTML = element.textContent.replace(regex, '<span class="highlight">$1</span>');
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                found = true;
                return; // Stop further processing once a match is found and highlighted
            }
        });

        if (found) {
            return; // Stop further processing once a match is found and highlighted
        }
    });

    if (!found) {
        alert(`No ${document.getElementById('searchInput').value} found in this website!`);
    }
});
