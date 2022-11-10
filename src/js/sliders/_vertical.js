import gsap from 'gsap';

document.querySelectorAll('.vertical-slider-screen__content__slider__item__face__button')
    .forEach(el => {
        console.log("im=here")
        el.onclick = () => {
            const element = el.closest('.vertical-slider-screen__content__slider__item').querySelector('.vertical-slider-screen__content__slider__item__content');
            if (element.classList.contains('open')) {
                console.log('CLOSE');
                element.classList.remove('open');
                gsap.to(element, {
                    height: 0,
                    autoAlpha: 0,
                    duration: 0.4,
                    ease: 'power3'
                });
            } else {
                console.log('OPEN');
                element.classList.add('open');
                gsap.to(element, {
                    autoAlpha: 1,
                    height: 'auto',
                    duration: 0.4,
                    ease: 'power3',
                });
            }
        }
    });