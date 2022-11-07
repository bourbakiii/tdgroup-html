import {Swiper} from 'swiper';
import {gsap} from 'gsap';

let swiper = null;


const createSwiper = () => {
    console.log("swiper");

    swiper = new Swiper(".articles-slider-screen__slider", {
        slidesPerView: 1,
        breakpoints: {
            '640': {
                slidesPerView: 'auto'
            }
        },
        init: false
    });
    swiper.on('afterInit', ({activeIndex: current_slide_index}) => animateActiveSlide(current_slide_index + 1));
    // swiper.on('beforeSlideChangeStart', ({activeIndex: current_slide_index}) => animatePreviousSlide(current_slide_index + 1));
    swiper.on('slideChange', ({activeIndex: current_slide_index, previousIndex: previous_slide_index}) => {
        animatePreviousSlide(previous_slide_index + 1);
        animateActiveSlide(current_slide_index + 1);
    });
    swiper.init();
}

function animateActiveSlide(index) {

}

function animatePreviousSlide(index) {

}


createSwiper();

let timer = null;
window.onresize = () => {
    if (timer != null) return;
    timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        swiper.destroy(true, true);
        const elementDOM = document.querySelector(".articles-slider-screen__slider");
        elementDOM.remove();
        document.querySelector('.articles-slider-screen').append(elementDOM);
        createSwiper();
    }, 1000)
}