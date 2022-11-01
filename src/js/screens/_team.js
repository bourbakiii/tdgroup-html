import gsap from 'gsap';

document.querySelectorAll('.team-screen__item').forEach(el => el.onmouseenter = () => hoverAnimation(el));
document.querySelectorAll('.team-screen__item').forEach(el => el.onmouseleave = () => unHoverAnimation(el));

function hoverAnimation(element) {
    const hover_animation_timeline = gsap.timeline();
    hover_animation_timeline.to(element.querySelector(`.${element.classList.value}__content`), {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            element.querySelector(`.${element.classList.value}__title`).classList.remove('heading_5');
            element.querySelector(`.${element.classList.value}__title`).classList.add('heading_4');
            element.querySelector(`.${element.classList.value}__button`).classList.remove('hidden');
        },
    });
    hover_animation_timeline.to(element.querySelector(`.${element.classList.value}__content`), {
        opacity: 1,
        delay: 0.2
    });

}

function unHoverAnimation(element) {
    const hover_animation_timeline = gsap.timeline();
    hover_animation_timeline.to(element.querySelector(`.${element.classList.value}__content`), {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            element.querySelector(`.${element.classList.value}__title`).classList.add('heading_5');
            element.querySelector(`.${element.classList.value}__title`).classList.remove('heading_4');
            element.querySelector(`.${element.classList.value}__button`).classList.add('hidden');
        },
    });
    hover_animation_timeline.to(element.querySelector(`.${element.classList.value}__content`), {
        opacity: 1,
        delay: 0.2
    });
}
