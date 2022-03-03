const hamburger = document.querySelector('#menu');
const header = document.querySelector('header');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('fa-times');
    header.classList.toggle('toggle');
})

window.addEventListener('scroll load', function () {
    hamburger.classList.remove('fa-times');
    header.classList.remove('toggle');
})


// ------------------------- SCROLL SECTION starts ---------------------

let anchors = document.getElementsByClassName('menu-link');

for (anchor of anchors) {

    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        let attribute = e.target.getAttribute('href').substr(1); // #home -> home
        let section = document.getElementById(attribute); //section
        section.scrollIntoView({
            behavior: "smooth"
        })
    })
}

// ------------------------- SCROLL TO TOP  ---------------------

const btnTop = document.querySelector('#scroll-top');

window.onscroll = () => {
    if (window.scrollY > 600) {
        btnTop.classList.remove('show-btn');
    } else if (window.scrollY < 600) {
        btnTop.classList.add('show-btn');
    }
}

btnTop.onclick = () => {
    window.scrollTo(0,0);
}