window.addEventListener("scroll", function () {

    let navbar = document.getElementById("navbar");

    if (window.scrollY > 150) {
        navbar.classList.add("show");
    }
    else {
        navbar.classList.remove("show");
    }

});