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
    duration:1,
    opacity:0,
    
})

tl.from('.switch', {
    ease: 'power2',
    y:'-15px',
    duration:1,
    opacity: 0,
    stagger:0.2,
    

}, )
tl.from('.navs', {
    ease:'power2',
    duration:2,
    opacity:0,
    
},0)

tl.from('.hero', {
    ease:'power2',
    duration:2,
    opacity:0,
    
},0)


//Hero Animations

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
    duration:.5,
    opacity:0,
    x:'300px'
},)



// GALLERY SLIDER

let sliderWrap = document.querySelector('.slider-wrap');
let slider = document.querySelector('.slider');
let clonesWidth;
let sliderWidth;
let clones =[];
let disableScroll = false;
let scrollPos;

let items = [...document.querySelectorAll('.slider-item')]
console.log(items)
let images = [...document.querySelectorAll('.img-div')];

images.forEach((img, idx) => {
    img.style.backgroundImage = `url(../images/${idx+1})`
})

item.forEach(item => {
    let clone = item.cloneNode(true);
    clone.ClassList.add('clone');
    slider.appendChild(clone);
    clones.push(clone);
})

function getClonesWidth(){
    let width = 0;
    clones.forEach(clone => {
        width += clone.offsetWidth;
    })
    return width;
}

function getScrollPos(){
    return window.scrollY;
}

function scrollUpdate(){
    scrollPos = getScrollPos();
    if(clonesWidth + scrollPos >= sliderWidth){
        window.scrollTo({top:1});
    
    } else if(scrollPos <= 0){
        window.scrollTo({top:sliderWidth - clonesWidth - 1})
    }

    slider.style.transform = `translateX(${-window.scrollY}px)`

    requestAnimationFrame(scrollUpdate)
}

function onLoad(){
    calculateDimensions()
    document.body.style.height = `${sliderWidth}px`
    window.scrollTo({top:1})
    scrollUpdate();
}

function calculateDimensions (){
    sliderWidth = slider.getBoundingClientRect().width;
    clonesWidth = getClonesWidth();
}

onLoad();

//Google Maps API

