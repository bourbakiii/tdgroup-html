import {Swiper} from 'swiper';

const createSwiper = () => new Swiper(".workers-slider-screen__slider", {
    slidesPerView: 1,
    breakpoints: {
        '992': {
            slidesPerView: 'auto'
        }
    }
});
let swiper = createSwiper();

window.onresize = () => {
    swiper.destroy(true, true);
    const elementDOM = document.querySelector(".workers-slider-screen__slider");
    elementDOM.remove();
    document.querySelector('.workers-slider-screen').append(elementDOM);
    swiper = createSwiper();
}