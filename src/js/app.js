import './layout/_navigation.js';
import './screens/_team.js'
import './layout/_filters.js'
import './screens/_main.js'
import './sliders/_articles.js'
import './sliders/_workers.js'
import './sliders/_cases.js'
import './sliders/_cases-detail.js'
import VerticalSlider from './sliders/_vertical.js'
import HeaderTrigger from "./components/_headerTrigger.js";
import HeaderColorizeTrigger from "./components/_headerBackgroundColorizeTrigger.js";

if (document.location.pathname === '/team.html' || document.location.pathname === '/theme.html') document.addEventListener('DOMContentLoaded', () => HeaderTrigger());
HeaderColorizeTrigger();

if (document.location.pathname === '/theme.html') VerticalSlider();


// if (document.querySelector('.open-form-modal-button')) document.querySelector('.open-form-modal-button').onclick = () => document.querySelector('.form-modal__wrapper').classList.toggle('show');
if (document.querySelector('.open-post-modal-button')) document.querySelector('.open-post-modal-button').onclick = () => document.querySelector('.post-modal__wrapper').classList.toggle('show');
document.querySelectorAll('.modal-wrapper:not(.success-modal__wrapper)').forEach(el => el.onclick = event => {
    if (event.target.classList.contains('modal-wrapper')) event.target.classList.remove('show')
});

if (document.querySelector('.form-modal__close-button')) document.querySelector('.form-modal__close-button').onclick = () => document.querySelector('.form-modal__wrapper').classList.remove('show');
if (document.querySelector('.post-modal__close-button')) document.querySelector('.post-modal__close-button').onclick = () => document.querySelector('.post-modal__wrapper').classList.remove('show');
if (document.querySelector('.form-modal-open-button')) document.querySelector('.form-modal-open-button').onclick = () => {
    document.querySelector('.success-modal__wrapper').classList.add('show');
    setTimeout(() => document.querySelector('.success-modal__wrapper').classList.remove('show'), 3000)
}
console.log(document.location);
// if (document.location.pathname === '/theme.html') {
//     document.addEventListener('scroll', (event) => {
//         const element_classes = ['.theme-dogs-screen', '.vertical-slider-screen__wrapper'];
//         const middle_of_navigation = Math.abs(document.body.getBoundingClientRect().top + document.querySelector('.navigation__wrapper').getBoundingClientRect().height / 2);
//         const coordinates_of_elements = Array.from(document.querySelectorAll(element_classes.join(','))).map(el => ({
//             top: el.offsetTop,
//             height: el.getBoundingClientRect().height
//         }));
//         document.querySelector('.navigation__wrapper').classList.remove('white');
//         for (let {top, height} of coordinates_of_elements) {
//             console.log(middle_of_navigation > top, middle_of_navigation < top + height)
//             if (middle_of_navigation > top && middle_of_navigation < top + height) {
//                 document.querySelector('.navigation__wrapper').classList.add('white');
//                 break;
//             }
//         }
//     });
// }

if (document.location.pathname === '/') {
    document.querySelectorAll('.main-screen__overlay-sections__card').forEach((el) => {
        console.log(el);
        el.onclick = () => document.querySelector('.post-modal__wrapper').classList.toggle('show')
    })
}