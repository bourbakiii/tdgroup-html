import {Swiper} from 'swiper';
import {gsap} from 'gsap';

let swiper = null;
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
    timeline.to(`.workers-slider-screen__slider__item:nth-child(${index})`, {
        opacity: 0, duration: 0.2, onComplete: () => {
            document.querySelector(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__title`).classList.remove('heading_5')
            document.querySelector(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__title`).classList.add('heading_4');
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__button`, {
                display: 'flex'
            })
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index})`, {
                flexDirection: 'row',
            });
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__image`, {
                maxHeight: '100%',
                flexGrow: 1,
                maxWidth: 453,
                position: 'static',
            })
        }
    });
    timeline.to(`.workers-slider-screen__slider__item:nth-child(${index})`, {
        delay: .8, gridGap: 20,
        opacity: 1, duration: 0.2
    });
}

function animatePreviousSlide(index) {
    const timeline = gsap.timeline();
    timeline.to(`.workers-slider-screen__slider__item:nth-child(${index})`, {
        opacity: 0, duration: 0.2, onComplete: () => {
            document.querySelector(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__title`).classList.remove('heading_4');
            document.querySelector(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__title`).classList.add('heading_5')
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__button`, {
                display: 'none'
            })
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index})`, {
                flexDirection: 'column',
            });
            gsap.set(`.workers-slider-screen__slider__item:nth-child(${index}) .workers-slider-screen__slider__item__image`, {
                maxHeight: 290,
                width: 290,
                position: 'absolute',
                bottom: 0,
                right: 0
            })
        }
    });
    timeline.to(`.workers-slider-screen__slider__item:nth-child(${index})`, {
        delay: 0.8,
        opacity: 1,
        gridGap: 0,
        duration: 0.2
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