import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

if (document.querySelector('.main-screen')) {
    gsap.to('.heading_1', {
        delay: 0.3,
        transform: 'translateY(0px)',
        duration: 2,
        opacity: 1,
        ease: 'power3',
        stagger: 0.2
    });
    gsap.to('.main-screen__cross', {delay: 0.5, transform: 'translateY(0px)', duration: 4, opacity: 1, ease: 'power4'});
    gsap.to('.main-screen__additional-text', {
        delay: 1.4,
        transform: 'translateX(0)',
        duration: 2,
        opacity: 1,
        ease: 'power3'
    });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
