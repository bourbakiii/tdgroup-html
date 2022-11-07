import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";


// Register ScrollTrigger Plugin (Do not remove!!!)
gsap.registerPlugin(ScrollTrigger);

gsap.to('.heading_1', {delay: 0.3, transform: 'translateY(0px)', duration: 2, opacity: 1, ease: 'power3', stagger: 0.2})
gsap.to('.main-screen__cross', {delay: 0.5, transform: 'translateY(0px)', duration: 4, opacity: 1, ease: 'power4'})
gsap.to('.main-screen__additional-text', {
    delay: 1.4,
    transform: 'translateX(0)',
    duration: 2,
    opacity: 1,
    ease: 'power3'
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// const parallaxBlock = document.getElementById("main-screen__parallax");
// const sections = gsap.utils.toArray(".main-screen__section");
// let tl = gsap.timeline({
//     scrollTrigger: {
//         trigger: parallaxBlock,
//         start: "top top",
//         // end: () => "+=" + parallaxBlock.offsetHeight,
//         scrub: true,
//         snap: 1 / (sections.length + 1),
//         pin: true,
//         anticipatePin: 1
//     },
//     defaults: {ease: "none"},
// });

// sections.forEach(section => tl.to(section, {yPercent: 200}, "<50%"));