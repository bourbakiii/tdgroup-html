import gsap from 'gsap';
import {ScrollTrigger} from "gsap/ScrollTrigger.js";

export default function HeaderColorizeTrigger() {
    // Register ScrollTrigger Plugin (Do not remove!!!)
    gsap.registerPlugin(ScrollTrigger);
    document.querySelectorAll('*[data-header-colorize-trigger]').forEach(el => {
        const bounds_of_navigation_button = document.querySelector('.navigation__menu__button').getBoundingClientRect();
        ScrollTrigger.create({
            trigger: el,
            start: `top ${bounds_of_navigation_button.y + bounds_of_navigation_button.height / 2}`,
            end: `bottom ${bounds_of_navigation_button.y + bounds_of_navigation_button.height / 2}`,
            scrub: true,
            markers: false,

            onLeave: () => pfVisibleLeaveClass(),
            onEnter: () => pfVisibleEnterClass(),
            onLeaveBack: () => pfVisibleLeaveClass(),
            onEnterBack: () => pfVisibleEnterClass(),
        });

        function pfVisibleLeaveClass() {
            document.querySelector('.navigation__wrapper').classList.remove("back-green");
            document.querySelector('.navigation__wrapper').classList.remove("back-transparent");
            document.querySelector('.navigation__wrapper').classList.remove("back-white");
            document.querySelector('.navigation__wrapper').classList.add(`back-${el.getAttribute('navigationClass')}`);
        }

        // function pfVisibleEnterClass() {
        //     console.log("пришел")
        //
        //     document.querySelector('.navigation__wrapper').classList.add("white");
        // }
    })
}
