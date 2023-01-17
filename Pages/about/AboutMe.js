let hamburger = document.querySelector('.hamburger')
let navLinks = document.querySelector('.navLinks')
let hamburgerLine = document.querySelectorAll('.line')

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})

// DOM ANIMATION

let tl = gsap.timeline({ defaults: {ease:"power4.inOut", duration: 1,}})

tl.from('.formWrapper', { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', y: 0}, '<.3')
tl.to('.wrapper', {
  padding: "3rem",
  width: "95vw"
}, "<.6")
tl.from('.navLinksDesktop li', {y: '-360%', stagger:.2 }, '<.4')
tl.from('.navBar img', {x:'-150%', duration: 2}, '<.1')
tl.to('.aboutLine', {width: "80%", duration: .8}, '<.5')
tl.from('.formAbout', {'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', duration: 2, stagger: .2}, '<.1')



