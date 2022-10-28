import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

// Register ScrollTrigger Plugin (Do not remove!!!)
gsap.registerPlugin(ScrollTrigger);

const parallaxBlock = document.getElementById("parallax");
const sections = gsap.utils.toArray(".parallax__section");

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: parallaxBlock,
        start: "top top",
        // end: () => "+=" + parallaxBlock.offsetHeight,
        scrub: true,
        snap: 1 / (sections.length + 1),
        pin: true,
        anticipatePin: 1
    },
    defaults: {ease: "none"},
});

sections.forEach((section) => {
    tl.to(
        section,
        {
            yPercent: 200,
        },
        "<50%"
    );
});