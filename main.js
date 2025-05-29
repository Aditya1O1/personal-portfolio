


// sticky navbar
window.onscroll = function () {

    var navbar = document.getElementById("navbar");

    if (window.scrollY > 55) {
        navbar.classList.add("sticky");
    }
    else {
        navbar.classList.remove("sticky");
    }

    // scroll to top
    let button = document.getElementById("btn");

    if (document.documentElement.scrollTop > 90) {
        button.style.display = "block";
    }
    else {
        button.style.display = "none";
    }

};

function scrolltoTop() {
    document.documentElement.scrollTop = 0;
}

// menu toggle bar
function menu() {
    let menu = document.getElementById("menu");
    let menubar = document.querySelector(".menu-btn i");

    menu.classList.toggle("active");
    menubar.classList.toggle("active");
}


function redirectTo(page) {
    window.location.href = page;
}


// 🌗 Toggle Light/Dark Mode
// 🌗 Toggle Light/Dark Mode — Working version
document.addEventListener("DOMContentLoaded", function () {
    const toggleContainer = document.getElementById("theme-toggle");
    const toggleIcon = document.getElementById("toggle-icon");
    const currentTheme = localStorage.getItem("theme");

    // Apply saved theme on load
    if (currentTheme === "dark") {
        document.body.classList.add("dark-mode");
        toggleIcon.classList.replace("fa-moon", "fa-sun");
    }

    toggleContainer.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            toggleIcon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark");
        } else {
            toggleIcon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light");
        }
    });
});
