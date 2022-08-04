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
let mydropdown = document.querySelector("#myDropdown");
dropdown.addEventListener("click", () => {
    mydropdown.classList.toggle("show")
    dropdown.classList.toggle("active")
});
let rus = document.querySelector(".rus");
rus.addEventListener("click", () => {
    console.log("aa")
})
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