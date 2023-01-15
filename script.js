let hamburger = document.querySelector('.hamburger')
let navLinks = document.querySelector('.navLinks')
let hamburgerLine = document.querySelectorAll('.line')

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('active')
    hamburger.classList.toggle('active')
})


//navBar scroll on click with JS

// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener('click', function (e) {
//       e.preventDefault();
//       document.querySelector(this.getAttribute('href')).scrollIntoView({
//           behavior: 'smooth'
//       });
//   });
// });




//Projects btn effect
//Look at the button:hover > .gitIcon code in the css, it does exactly the same as this does, but only with css!
let viewCodeBtn = document.querySelectorAll(".viewCode");

viewCodeBtn.forEach((viewBtn) =>
  viewBtn.addEventListener("mouseover", function () {
    viewBtn.querySelector(".gitIcon").classList.add("active");
  })
);

viewCodeBtn.forEach((viewBtn) =>
  viewBtn.addEventListener("mouseout", function () {
    viewBtn.querySelector(".gitIcon").classList.remove("active");
  })
);


// DOM ANIMATION


//DOM ANIMATION - HERO




let tl = gsap.timeline({ defaults: {ease:"power4.inOut", duration: 1,}})
//hero & navBar
tl.from('.formWrapper', { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', y: 0}, '<.3')
tl.to('.wrapper', {
  padding: "3rem",
  width: "95vw"
}, "<.6")
tl.from('.navLinksDesktop li', {y: '-350%', stagger:.2 }, '<.4')
tl.from('.navBar img', {x:'-150%', duration: 2}, '<.1')
tl.from('.formTitle', { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', y: 0}, '<.2')
tl.from('.formTitleText', { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', y: 0}, '<.3')
tl.from('.formBrands', { 'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', y: 0}, '<.3')

//DOM ANIMATION - SCROLLTRIGGER

gsap.registerPlugin(ScrollTrigger);

let mm = gsap.matchMedia();

// mm.add("(min-width: 800px)", () => {
//   gsap.to(".aboutLine", {
//     duration: .6,
//     width: "80%",
//     ease: Power2.easeOut,
//     scrollTrigger: {
//       trigger: ".aboutMeText",
//       start: "top 90%"
//     }
//   })
// })

mm.add("(min-width: 800px)", () => {
  const aboutMeTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".aboutMeText",
      markers: false,
      start: "top 90%",
      end: "bottom 520%",
    },
  });
  
  aboutMeTl.to(".aboutLine", {
    duration: .6,
    width: "80%",
    ease: Power2.easeOut 
  })
  aboutMeTl.from(".formAbout", {
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  }, "<.4")
  
  aboutMeTl.from(".aboutMeInfo", {
    duration: .9,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  })
  aboutMeTl.from(".aboutMeImg", {
    duration: .9,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  }, "<.4")
  
  
  
  const stackTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".aboutMeImg",
      markers: false,
      start: "top 110%",
      end: "top 50%",
    },
  });
  
  stackTl.from(".form", {
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
    y: 0
  })
  
  
  stackTl.from(".html", {
    duration: .4,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    y: 0,
    ease: Power2.easeOut 
  })
  
  
  stackTl.from(".css", { 
    duration: .4,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    y: 0,
    ease: Power2.easeOut 
  }, "<.2");
  stackTl.from(".js", { 
    duration: .4,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    y: 0,
    ease: Power2.easeOut 
  }, "<.2");
  stackTl.from(".react", { 
    duration: .4,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    y: 0,
    ease: Power2.easeOut 
  },"<.2");
  stackTl.from(".figma", { 
    duration: .4,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    y: 0,
    ease: Power2.easeOut 
  },"<.2");
  stackTl.from(".git",{ 
    duration: .4,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    y: 0,
    ease: Power2.easeOut 
  },"<.2");
  stackTl.from(".wordpress",{ 
    duration: .4,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    y: 0,
    ease: Power2.easeOut 
  },"<.2");
  
  
  
  const formprojectsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".card",
      markers: false,
      start: "top bottom"
    },
  });
  
  formprojectsTl.to(".projectLine", {
    duration: .9,
    width: "80%",
    ease: Power2.easeOut 
  })
  formprojectsTl.from(".formProjects", {
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)',
  }, "<.4")
  
  const projectsTl = gsap.timeline({
    scrollTrigger: {
      trigger: ".form",
      markers: false,
      start: "top bottom"
    },
  });
  
  
  projectsTl.from(".projectWordpress",{ 
    duration: .9,
    delay: 1,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    ease: Power2.easeOut 
  });
  projectsTl.from(".projectBankDashBoard",{ 
    duration: .9,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    ease: Power2.easeOut 
  }, "<.4");
  
  
  const projects2Tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".form",
      markers: false,
      start: "top 30%",
      end: "top 60%",
    },
  });
  
  projects2Tl.from(".projectWeatherApp",{ 
    duration: .9,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    ease: Power2.easeOut 
  });
  projects2Tl.from(".projectPortfolio",{ 
    duration: .9,
    'clip-path': 'polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)', 
    ease: Power2.easeOut 
  }, "<.4");
  
})






