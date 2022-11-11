import gsap from 'gsap';

const TRANSITION_TIME = 1.3;
let top_of_main_logo_timer = null;

function setTopOfMainLogo() {
    console.log("аддлл")
    const element = document.querySelector('.main-screen__logo__wrapper');
    if (!element) return;
    top_of_main_logo_timer = null;
    element.style.height = `${document.documentElement.clientHeight - document.querySelector('.navigation__wrapper').getBoundingClientRect().height}px`;
    element.style.top = `${document.querySelector('.navigation__wrapper').getBoundingClientRect().height}px`;


}

window.addEventListener('load', () => setTimeout(() => setTopOfMainLogo(), 0))
window.addEventListener('resize', setTopOfMainLogo, {passive: true});

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

const heightChangeHandler = (type) => {
    let element = null;
    if ((element = document.querySelector('.main-screen__logo')))
        element.style.height = `${document.documentElement.clientHeight - document.querySelector('.navigation__wrapper').getBoundingClientRect().height}px`;
}

// $IVORY: #F8F8F4;
// $BLACK: #000000;
// $GREEN: rgba(45, 171, 73, 1);
// $GREEN_GRADIENT: linear-gradient(180deg, rgba(45, 171, 73, 0) 0%, #2DAB49 100%);
// $RED: #da1313;
const GREEN = '#2DAB49',
    IVORY = '#F8F8F4',
    NAVIGATION_ELEMENT = document.querySelector('.navigation__wrapper');
const openAnimation = () => {
    gsap.to('.navigation__menu', {
        width: '100%',
        paddingTop: 30,
        marginTop: 0,
        background: NAVIGATION_ELEMENT.classList.contains('white') ? IVORY : GREEN,
        duration: TRANSITION_TIME,
        ease: 'power3'
    })
    gsap.to('.navigation__menu__button', {
        color: NAVIGATION_ELEMENT.classList.contains('white') ? GREEN : IVORY,
        ease: 'power3',
        textDecorationColor: 'rgba(0,0,0,0)',
        duration: TRANSITION_TIME
    })
    gsap.to('.navigation__menu__links', {
        height: 'auto', opacity: 1, paddingBottom: 32, duration: TRANSITION_TIME, ease: 'power3',
        onUpdate: () => setTopOfMainLogo(),
        // onStart: () => setTopOfMainLogo(),
        // onComplete: () => setTopOfMainLogo()
    });
    gsap.to('.navigation__button', {
        backgroundColor: NAVIGATION_ELEMENT.classList.contains('white') ? GREEN : IVORY,
        color: NAVIGATION_ELEMENT.classList.contains('white') ? IVORY : GREEN,
        duration: TRANSITION_TIME,
        ease: 'power3'
    });
}
const closeAnimation = () => {
    gsap.to('.navigation__menu', {
        width: 'auto',
        paddingTop: 0,
        marginTop: 30,
        background: `transparent`,
        duration: TRANSITION_TIME,
        ease: 'power3'
    })
    gsap.to('.navigation__menu__button', {
        color: NAVIGATION_ELEMENT.classList.contains('white') ? IVORY : GREEN,
        ease: 'power3',
        textDecorationColor: NAVIGATION_ELEMENT.classList.contains('white') ? IVORY : GREEN,
        duration: TRANSITION_TIME
    })
    gsap.to('.navigation__menu__links', {
        height: 0,
        opacity: 0,
        textDecorationColor: 'rgba(0,0,0,0)',
        paddingBottom: 0,
        duration: TRANSITION_TIME,
        ease: 'power3',
        onUpdate: () => setTopOfMainLogo(),
        // onStart: () => setTopOfMainLogo(),
        // onComplete: () => setTopOfMainLogo()
    });
    gsap.to('.navigation__button', {
        backgroundColor: NAVIGATION_ELEMENT.classList.contains('white') ? IVORY : GREEN,
        color: NAVIGATION_ELEMENT.classList.contains('white') ? GREEN : IVORY,
        duration: TRANSITION_TIME,
        ease: 'power3'
    });
}
/////////////////////////////////////////////////////////////
document.querySelector('.navigation__menu__button').onclick = toggle;
