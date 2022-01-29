import * as bootstrap from 'bootstrap'

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    //Toggle Nav
    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        //Animate Links
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation=''
            }else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index /7 + 1.1}s`;
            }    
        })
        //Burger Animvation
        burger.classList.toggle('toggle');


    })
}
 
navSlide();


const tl = gsap.timeline({})

tl.from('.logo', {
    ease:'power2',
    y:'-15px',
    duration:0.5,
    opacity:0,
    
})

tl.from('.switch', {
    ease: 'power2',
    y:'-15px',
    duration:0.5,
    opacity: 0,
    stagger:0.2,
    

}, 0 )

//Hero Animations
tl.from('.hero-greeting',{
    ease:'power1',
    duration:0.5,
    opacity:0,
    y:10

})
tl.from('.hero-future',{
    ease:'power1',
    duration:0.5,
    opacity:0,
    y:10
},'<.1'  )
tl.from('.hero-description',{
    ease:'power1',
    duration:0.5,
    opacity:0,
    y:10
},'<.1' )
tl.from('.hero-paragraph',{
    ease:'power1',
    duration:0.5,
    opacity:0,
    y:10
},'<.1' )

//Button animation

tl.from('.button-52', {
    ease:'back',
    duration:.6,
    opacity:0,
    x:'300px'
},)