import {Swiper} from 'swiper';
import {gsap} from 'gsap';

let swiper = null;

const TRANSITION_SLIDERS = .5;
const createSwiper = () => {
    swiper = new Swiper(".workers-slider-screen__slider", {
        slidesPerView: 1,
        speed: 1000,
        breakpoints: {
            '992': {
                slidesPerView: 'auto'
            }
        },
        init: false
    });
    swiper.on('afterInit', ({activeIndex: current_slide_index}) => animateActiveSlide(current_slide_index + 1));
    swiper.on('slideChange', ({activeIndex: current_slide_index, previousIndex: previous_slide_index}) => {
        animatePreviousSlide(previous_slide_index + 1);
        animateActiveSlide(current_slide_index + 1);
    });
    swiper.init();
}

function animateActiveSlide(index) {
    const timeline = gsap.timeline();
    timeline.to(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__content`, {
        opacity: 0, duration: TRANSITION_SLIDERS / 2, onComplete: () => {
            document.querySelector(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__title`).classList.remove('heading_5')
            document.querySelector(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__title`).classList.add('heading_4');
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__button`, {
                display: 'flex'
            })
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__image`, {})
        }
    });
    timeline.to(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__content`, {
        gridGap: 20,
        opacity: 1, duration: TRANSITION_SLIDERS / 2
    });
}

function animatePreviousSlide(index) {
    const timeline = gsap.timeline();
    timeline.to(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__content`, {
        opacity: 0, duration: TRANSITION_SLIDERS / 2, onComplete: () => {
            document.querySelector(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__title`).classList.remove('heading_4');
            document.querySelector(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__title`).classList.add('heading_5')
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__button`, {
                display: 'none'
            })
            // gsap.set(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__image`, {
            //
            // })
        }
    });
    timeline.to(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__content`, {
        // delay: 0.1,
        opacity: 1,
        gridGap: 0,
        duration: TRANSITION_SLIDERS / 2
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
        const elementDOM = document.querySelector(".workers-slider-screen__slider");
        elementDOM.remove();
        document.querySelector('.workers-slider-screen').append(elementDOM);
        createSwiper();
    }, 1000)
}