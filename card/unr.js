window.onload = function() {
    if (window.location.pathname.includes("beranda.html")) {
        if (sessionStorage.getItem("isLoggedIn") === "true") {
            window.location.href = "beranda alr.html";
        }
    }

    if (window.location.pathname.includes("beranda alr.html")) {
        if (sessionStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "beranda.html";
        }
    }

    history.pushState(null, null, window.location.href);

    window.onpopstate = function() {
        if (sessionStorage.getItem("isLoggedIn") !== "true") {
            window.location.href = "beranda.html";
        } else {
            window.location.href = "beranda alr.html";
        }
    };
};

function login() {
    sessionStorage.setItem("isLoggedIn", "true");
    window.location.href = "beranda alr.html";
}

function logout() {
    sessionStorage.removeItem("isLoggedIn");
    window.location.href = "beranda.html";
}

const openPopupButtons = document.querySelectorAll('.open-popup');
const closePopupButtons = document.querySelectorAll('.close-popup');

openPopupButtons.forEach(button => {
    button.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        const popup = document.getElementById(popupId);
        if (popup) {
            popup.classList.add('show');
            popup.style.display = 'flex';
        }
    });
});

closePopupButtons.forEach(button => {
    button.addEventListener('click', function() {
        const popup = this.closest('.popup');
        popup.classList.remove('show');
        popup.style.display = 'none';
    });
});

window.addEventListener('click', function(e) {
    const popups = document.querySelectorAll('.popup');
    popups.forEach(popup => {
        if (e.target === popup) {
            popup.classList.remove('show');
            popup.style.display = 'none';
        }
    });
});

const symbols1 = ["#**%$#!$$", "@@@@!!%%", "$$$$####", "^^&&***", "%%%%!!!!"];
const symbols2 = ["%$#@**@*#", "$%#^!@$@", "!!@@##$$", "***%%%^^", "@@@!!&&%%"];
const symbols3 = ["!@#$$$##@^&", "&&$$##!!", "***&&^^%%", "$$@@@##!", "!!##$$%%"];

function changeText() {
document.getElementById("symbol1").innerText = symbols1[Math.floor(Math.random() * symbols1.length)];
document.getElementById("symbol2").innerText = symbols2[Math.floor(Math.random() * symbols2.length)];
document.getElementById("symbol3").innerText = symbols3[Math.floor(Math.random() * symbols3.length)];
}

setInterval(changeText, 1000);

document.addEventListener('DOMContentLoaded', function() {
const fotoContainer = document.querySelector('.foto-container');

function handleScroll() {
const containerPosition = fotoContainer.getBoundingClientRect().top;
const screenPosition = window.innerHeight / 1.2;

if (containerPosition < screenPosition) {
fotoContainer.classList.add('visible');
}
}

window.addEventListener('scroll', handleScroll);

handleScroll();
});