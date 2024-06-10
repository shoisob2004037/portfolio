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
});
