import {Swiper} from 'swiper';
import {gsap} from 'gsap';

let swiper = null;
const createSwiper = () => {
    swiper = new Swiper(".cases-detail-slider-screen__slider", {
        slidesPerView: 1,
        breakpoints: {
            '992': {
                slidesPerView: 'auto'
            }
        },
        init: false
    });
    swiper.on('afterInit', ({activeIndex: current_slide_index}) => animateActiveSlide(current_slide_index + 1));
    swiper.on('beforeSlideChangeStart', ({activeIndex: current_slide_index}) => animatePreviousSlide(current_slide_index + 1));

    swiper.on('slideChange', ({activeIndex: current_slide_index, previousIndex: previous_slide_index}) => {
        animatePreviousSlide(previous_slide_index + 1);
        animateActiveSlide(current_slide_index + 1);
    });
    swiper.init();
    console.log(swiper)
}

function animateActiveSlide(index) {
    console.log('Active, ', index);

    const timeline = gsap.timeline();

    timeline.to(`.cases-detail-slider-screen__slider__item:nth-child(${index}) .cases-detail-slider-screen__slider__item__title`, {
        opacity: 0, duration: .2, onComplete: () => {
            document.querySelector(`.cases-detail-slider-screen__slider__item:nth-child(${index}) .cases-detail-slider-screen__slider__item__title`).classList.remove('heading_5')
            document.querySelector(`.cases-detail-slider-screen__slider__item:nth-child(${index}) .cases-detail-slider-screen__slider__item__title`).classList.add('heading_4');
        }
    });
    timeline.to(`.cases-detail-slider-screen__slider__item:nth-child(${index}) .cases-detail-slider-screen__slider__item__title`, {
        delay: .8, opacity: 1, duration: .2
    });
}

function animatePreviousSlide(index) {
    console.log('Previous, ', index);
    const timeline = gsap.timeline();
    timeline.to(`.cases-detail-slider-screen__slider__item:nth-child(${index}) .cases-detail-slider-screen__slider__item__title`, {
        opacity: 0, duration: .2, onComplete: () => {
            document.querySelector(`.cases-detail-slider-screen__slider__item:nth-child(${index}) .cases-detail-slider-screen__slider__item__title`).classList.remove('heading_4');
            document.querySelector(`.cases-detail-slider-screen__slider__item:nth-child(${index}) .cases-detail-slider-screen__slider__item__title`).classList.add('heading_5')
        }
    });
    timeline.to(`.cases-detail-slider-screen__slider__item:nth-child(${index}) .cases-detail-slider-screen__slider__item__title`, {
        delay: 0.8,
        opacity: 1, duration: .2,
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
        const elementDOM = document.querySelector(".cases-detail-slider-screen__slider");
        elementDOM.remove();
        document.querySelector('.cases-detail-slider-screen').append(elementDOM);
        createSwiper();
    }, 1000)
}