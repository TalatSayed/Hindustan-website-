

document.querySelector(".menu-toggle")

    .addEventListener("click", function () {

        document.querySelector(".navbar-nav")

            .classList.toggle("active");

    });


document.querySelectorAll(".dropdown")

    .forEach(function (item) {

        item.addEventListener("click", function () {

            if (window.innerWidth < 900) {

                this.classList.toggle("active");

            }

        });

    });
