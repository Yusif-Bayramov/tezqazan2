const menuBtn = document.querySelector(".menu-icon span");

const cancelBtn = document.querySelector(".cancel-icon");
const items = document.querySelector(".nav-items");
const li = document.querySelectorAll(".nav-items li");
const form = document.querySelector("form");

menuBtn.onclick = () => {
    items.classList.add("active");
    menuBtn.classList.add("hide");
    cancelBtn.classList.add("show");
}

cancelBtn.onclick = () => {
    items.classList.remove("active");
    menuBtn.classList.remove("hide");
    cancelBtn.classList.remove("show");
    cancelBtn.style.color = "#ff3d00"
}
for (let lis of li) {
    lis.onclick = () => {
        items.classList.remove("active");
        cancelBtn.classList.remove("show");
        menuBtn.classList.remove("hide");
    }
}

let dropdown = document.querySelector(".dropbtn");
let mydropdown = document.querySelector(".dropdown-content");

dropdown.addEventListener("click", () => {
    mydropdown.classList.toggle("show")
    dropdown.classList.toggle("active")
});

let dropdown2 = document.querySelector(".dropbtn-2");
let mydropdown2 = document.querySelector(".dropdown-content-2");
dropdown2.addEventListener("click", () => {
    mydropdown2.classList.toggle("show")
    dropdown2.classList.toggle("active")
});


window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
const anaSeyfe = document.querySelector(".nav-items .home");
const qalibler = document.querySelector(".nav-items .win");
const faq = document.querySelector(".nav-items .faq");
const IstifdeQ = document.querySelector(".nav-items .IstifdeQ");
const qalibSiyahsi = document.querySelector("#qalib-siyahsi");
const silder = document.querySelector("#carouselExampleSlidesOnly");
const accordion = document.querySelector("#accordion");
const istifade = document.querySelector("#istifadeQaydlari");


silder.classList.add("active");
qalibler.addEventListener("click", () => {
    istifade.classList.remove("active");
    accordion.classList.remove("active");
    silder.classList.remove("active");
    qalibSiyahsi.classList.add("active");
});

anaSeyfe.addEventListener("click", () => {
    istifade.classList.remove("active");
    accordion.classList.remove("active");
    qalibSiyahsi.classList.remove("active");
    silder.classList.add("active");
});
faq.addEventListener("click", () => {
    istifade.classList.remove("active");
    qalibSiyahsi.classList.remove("active");
    silder.classList.remove("active");
    accordion.classList.add("active");
});

IstifdeQ.addEventListener("click", () => {
    qalibSiyahsi.classList.remove("active");
    silder.classList.remove("active");
    accordion.classList.remove("active");
    istifade.classList.add("active");
});

$(document).ready(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        let nav = document.querySelector("nav");
        if (scroll > 10) {
            nav.classList.add("active");
        } else {
            nav.classList.remove("active");
        }
    })
})

const accordionHeaders = document.querySelectorAll(".accordion-header");

ActivatingFirstAccordion();

function ActivatingFirstAccordion() {
    accordionHeaders[0].classList.add("active");
    accordionHeaders[0].nextElementSibling.style.maxHeight =
        accordionHeaders[0].nextElementSibling.scrollHeight + "px";
}

function toggleActiveAccordion(e, header) {
    const activeAccordion = document.querySelector(".accordion.active");
    const clickedAccordion = header.parentElement;
    const accordionBody = header.nextElementSibling;

    if (activeAccordion && activeAccordion != clickedAccordion) {
        activeAccordion.querySelector(".accordion-body").style.maxHeight = 0;
        activeAccordion.classList.remove("active");
    }

    clickedAccordion.classList.toggle("active");

    if (clickedAccordion.classList.contains("active")) {
        accordionBody.style.maxHeight = accordionBody.scrollHeight + "px";
    } else {
        accordionBody.style.maxHeight = 0;
    }
}

accordionHeaders.forEach(function(header) {
    header.addEventListener("click", function(event) {
        toggleActiveAccordion(event, header);
    });
});

function resizeActiveAccordionBody() {
    const activeAccordionBody = document.querySelector(
        ".accordion.active .accordion-body"
    );
    if (activeAccordionBody)
        activeAccordionBody.style.maxHeight =
        activeAccordionBody.scrollHeight + "px";
}

window.addEventListener("resize", function() {
    resizeActiveAccordionBody();
});
let navbar = document.querySelectorAll(".nav-items li a")

navbar.forEach(element => {
    element.addEventListener("click", function() {
        navbar.forEach(nav => nav.classList.remove(("active")))
        this.classList.add("active")
    });
});