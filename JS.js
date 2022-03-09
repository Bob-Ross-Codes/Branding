let mouseCusor = document.querySelector('.cursor')
let navLinks = document.querySelectorAll('.nav-links li')

window.addEventListener('mousemove', cursor)

//vi tag vores x og y veardier fra vores addeventlistener og bruger dem til at definere hvor vores div skal veare paa siden
function cursor(e) {
    mouseCusor.style.top = e.pageY + 'px';
    mouseCusor.style.left = e.pageX + 'px';
}

//hover effekt 
//vi tilfojer linkgrow class naar vi hovere over link element
navLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCusor.classList.add("linkgrow");
        link.classList.add('hovered-link');
    });
    //vi fjerner linkgrow naar musen ikke hovere over link element
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







$('.tabgroup > div').hide();
$('.tabgroup > div:first-of-type').show();
$('.tabs a').click(function(e){
  e.preventDefault();
    var $this = $(this),
        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
        others = $this.closest('li').siblings().children('a'),
        target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $(tabgroup).children('div').hide();
    $(target).show();
  
})
    
