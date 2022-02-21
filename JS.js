let mouseCusor = document.querySelector('.cursor')
let navLinks = document.querySelectorAll('.nav-links li')

window.addEventListener('mousemove', cursor)

//vi tag vores x og y værdier fra vores addeventlistener og bruger dem til at definere hvor vores div skal være på siden
function cursor(e) {
    mouseCusor.style.top = e.pageY + 'px';
    mouseCusor.style.left = e.pageX + 'px';
}

//hover effekt 
//vi tilføjer linkgrow class når vi hovere over link element
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCusor.classList.add("linkgrow");
        link.classList.add('hovered-link');
    });
    //vi fjerner linkgrow når musen ikke hovere over link element
    link.addEventListener('mouseleave', () => {
        mouseCusor.classList.remove("linkgrow");
        link.classList.remove('hovered-link');
    });
})





const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navLink = document.querySelectorAll('.nav-link');

burger.addEventListener('click', () => {
    navbar.classList.toggle('nav-open');
    burger.classList.toggle('burger-open');
    navLink.forEach(link => {
        link.classList.toggle('nav-link-open');
    })
});