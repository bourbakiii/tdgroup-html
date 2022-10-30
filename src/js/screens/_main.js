import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

const parallaxBlock = document.getElementById("parallax");
const sections = gsap.utils.toArray(".parallax__section");

let tl = gsap.timeline({
    w
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