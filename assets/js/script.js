'use strict';


const addEventOnElements =function(elements,eventType, callback){
    for (let i=0,len = elements.length;i< len;i++){
        elements[i].addEventListener(eventType,callback);
    }
}

const navbar =document.querySelector("[data-navbar]");
const navTogglers =document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const togglerNavbar = function (){
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    Document.body.classList.toggle("nav-active");   
}

addEventOnElements(navTogglers,"click",togglerNavbar); 

const header = document.querySelector("[data-header]");

window.addEventListener("scroll",function(){
    if (window.scrollY > 100){
        header.classList.add("active");
    }else{
        header.classList.remove("active");
    }
    
});


const sliders = document.querySelectorAll("[data-slider]");

const initSlider = function(currentSlider){
    const sliderContainer = currentSlider.querySelector("[data-slider-container]");
    const sliderPrevBtn = currentSlider.querySelector("[data-slider-prev]");
    const sliderNextBtn = currentSlider.querySelector("[data-slider-next]");

    let currentSlidePos = 0 ;

    const moveSliderItem = function () {
        sliderContainer.style.transform =`translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
    }

    const slideNext = function () {
        const slideEnd = currentSlidePos >= sliderContainer.childElementCount -1;

        if(slideEnd){
            currentSlidePos = 0;
        } else{
            currentSlidePos++;
        }

        moveSliderItem();
    }
    sliderNextBtn.addEventListener("click", slideNext);

    const slidePrev = function () {
        
        if(currentSlidePos <= 0){
            currentSlidePos = sliderContainer.childElementCount - 1;
        } else{
            currentSlidePos--;
        }

        moveSliderItem();
    }
    sliderPrevBtn.addEventListener("click", slidePrev);

    const dontHaveExtraItem = sliderContainer.childElementCount <= 1;
    if(dontHaveExtraItem){
        sliderNextBtn.style.display ="none";
        sliderPrevBtn.style.display ="none";

    }
}

for (let i = 0, len = sliders.length; i < len; i++ ){ initSlider(sliders[i]); }


const accordions = document.querySelectorAll("[data-accordion]");

let lastActiveAccordion = accordions[0];

const initAccordion = function (currentAccordion){

    const accordionBtn = currentAccordion.querySelector("[data-accordion-btn]");

    const expandAccordion = function (){
        if(lastActiveAccordion && lastActiveAccordion !== currentAccordion){
            lastActiveAccordion.classList.remove("expanded");
        }

        currentAccordion.classList.toggle("expanded");

        lastActiveAccordion = currentAccordion;
    }

    accordionBtn.addEventListener("click", expandAccordion);

};

for (let i=0,len = accordions.length; i < len; i++) {initAccordion(accordions[i]);}

var swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwmTvRRYKVmPfNg8shBlp-H3AGMSPTBnhfbPCzkFGtyQf9mxLm-DMBULkoHEzxHnHva/exec'
  const form = document.forms['submit-to-google-sheet']

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => console.log('Success!', response))
      .catch(error => console.error('Error!', error.message))
})

document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    parent.addEventListener('mousemove', function(event) {
        // Get the delta between the mouse position and center point.
        delta = (event.clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = event.clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = event.clientX + skewHack + delta + 'px';
    });
});


document.addEventListener('DOMContentLoaded', function() {
    var parent = document.querySelector('.splitview'),
        topPanel = parent.querySelector('.top'),
        handle = parent.querySelector('.handle'),
        skewHack = 0,
        delta = 0;

    // If the parent has .skewed class, set the skewHack var.
    if (parent.className.indexOf('skewed') != -1) {
        skewHack = 1000;
    }

    function moveHandler(event) {
        var clientX = event.clientX || event.touches[0].clientX;
        // Get the delta between the mouse position and center point.
        delta = (clientX - window.innerWidth / 2) * 0.5;

        // Move the handle.
        handle.style.left = clientX + delta + 'px';

        // Adjust the top panel width.
        topPanel.style.width = clientX + skewHack + delta + 'px';
    }

    parent.addEventListener('mousemove', moveHandler);
    parent.addEventListener('touchmove', moveHandler);
});