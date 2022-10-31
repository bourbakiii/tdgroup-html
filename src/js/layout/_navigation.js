import gsap from 'gsap';

const TRANSITION_TIME = 1.3;

let is_navigation_menu_open = false;
const toggle = () => is_navigation_menu_open ? close() : open();
const open = () => {
    is_navigation_menu_open = true
    openAnimation();
}
const close = () => {
    is_navigation_menu_open = false;
    closeAnimation();
}
const openAnimation = () => {
    gsap.to('.navigation__menu', {
        width: '100%',
        paddingTop: 30,
        marginTop: 0,
        background: '#2DAB49',
        duration: TRANSITION_TIME,
        ease: 'power3',
    })
    gsap.to('.navigation__menu__button', {
        color: 'white',
        ease: 'power3',
        textDecorationColor: `white`,
        duration: TRANSITION_TIME,
    })
    gsap.to('.navigation__menu__links', {
        height: 'auto', opacity: 1, paddingBottom: 32, duration: TRANSITION_TIME, ease: 'power3',
    });
    gsap.to('.navigation__button', {
        backgroundColor: 'red',
        color: 'green',
        duration: TRANSITION_TIME,
        ease: 'power3',
    });
}
const closeAnimation = () => {
    gsap.to('.navigation__menu', {
        width: 'auto',
        paddingTop: 0,
        marginTop: 30,
        background: `transparent`,
        duration: TRANSITION_TIME,
        ease: 'power3',
    })
    gsap.to('.navigation__menu__button', {
        color: 'red',
        ease: 'power3',
        textDecorationColor: 'red',
        duration: TRANSITION_TIME,
    })
    gsap.to('.navigation__menu__links', {
        height: 0,
        opacity: 0,
        textDecorationColor: 'rgba(0,0,0,0)',
        paddingBottom: 0,
        duration: TRANSITION_TIME,
        ease: 'power3',
    });
    gsap.to('.navigation__button', {
        backgroundColor: 'green',
        color: 'red',
        duration: TRANSITION_TIME,
        ease: 'power3',
    });
}
/////////////////////////////////////////////////////////////
document.querySelector('.navigation__menu__button').onclick = toggle;
