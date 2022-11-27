import {Swiper} from 'swiper';
import {gsap} from 'gsap';

let swiper = null;
const TRANSITION_SWIPER = .5;
const createSwiper = () => {
    swiper = new Swiper(".cases-slider-screen__slider", {
        slidesPerView: 1,
        breakpoints: {
            '992': {
                slidesPerView: 'auto'
            }
        },
        init: false
    });
    swiper.on('afterInit', ({activeIndex: current_slide_index}) => {
        if (window.innerWidth <= 992) return;
        animateActiveSlide(current_slide_index + 1)

    });

    swiper.on('slideChange', ({activeIndex: current_slide_index, previousIndex: previous_slide_index}) => {
        if (window.innerWidth <= 992) return;
        animatePreviousSlide(previous_slide_index + 1);
        animateActiveSlide(current_slide_index + 1);
    });
    swiper.init();
}

function animateActiveSlide(index) {
    const timeline = gsap.timeline();
    timeline.to(`.cases-slider-screen__slider__item:nth-child(${index}) .cases-slider-screen__slider__item__title`, {
        opacity: 0, duration: TRANSITION_SWIPER / 2, onComplete: () => {
            document.querySelector(`.cases-slider-screen__slider__item:nth-child(${index}) .cases-slider-screen__slider__item__title`).classList.remove('heading_5')
            document.querySelector(`.cases-slider-screen__slider__item:nth-child(${index}) .cases-slider-screen__slider__item__title`).classList.add('heading_4');
        }
    });
    timeline.to(`.cases-slider-screen__slider__item:nth-child(${index}) .cases-slider-screen__slider__item__title`, {
        opacity: 1, duration: TRANSITION_SWIPER / 2,
    });
}

function animatePreviousSlide(index) {
    const timeline = gsap.timeline();
    timeline.to(`.cases-slider-screen__slider__item:nth-child(${index}) .cases-slider-screen__slider__item__title`, {
        opacity: 0, duration: TRANSITION_SWIPER / 2, onComplete: () => {
            document.querySelector(`.cases-slider-screen__slider__item:nth-child(${index}) .cases-slider-screen__slider__item__title`).classList.remove('heading_4');
            document.querySelector(`.cases-slider-screen__slider__item:nth-child(${index}) .cases-slider-screen__slider__item__title`).classList.add('heading_5')
        }
    });
    timeline.to(`.cases-slider-screen__slider__item:nth-child(${index}) .cases-slider-screen__slider__item__title`, {
        opacity: 1, duration: TRANSITION_SWIPER / 2,
    });
}


createSwiper();

let timer = null;
window.onresize = () => {
    if (timer != null) return;
    timer = setTimeout(() => {
        clearTimeout(timer);
        timer = null;
        swiper.destroy(true, true);
        const elementDOM = document.querySelector(".cases-slider-screen__slider");
        elementDOM.remove();
        document.querySelector('.cases-slider-screen').append(elementDOM);
        createSwiper();
    }, 1000)
}