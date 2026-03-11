const slider = document.querySelector(".logo-track");

slider.addEventListener("mouseover", function () {
    slider.style.animationPlayState = "paused";
});

slider.addEventListener("mouseout", function () {
    slider.style.animationPlayState = "running";
});