import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

export default function HeaderTrigger() {
    // Register ScrollTrigger Plugin (Do not remove!!!)
    gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll('*[data-header-trigger]').forEach(el => {
        ScrollTrigger.create({
            trigger: el,
            start: "top 45px",
            end: "bottom 60px",
            scrub: true,
            markers: false,

            onLeave: () => pfVisibleLeaveClass(),
            onEnter: () => pfVisibleEnterClass(),
            onLeaveBack: () => pfVisibleLeaveClass(),
            onEnterBack: () => pfVisibleEnterClass(),
        });

        function pfVisibleLeaveClass() {
            document.querySelector('.navigation__wrapper').classList.remove("white");
        }

        function pfVisibleEnterClass() {
            document.querySelector('.navigation__wrapper').classList.add("white");
        }
    })
}
