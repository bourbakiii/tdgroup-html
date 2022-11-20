import gsap from 'gsap';

let is_filters_open = false;
const toggle = () => (is_filters_open = !is_filters_open) ? openFiltersAnimation() : closeFiltersAnimation();


function openFiltersAnimation() {
    document.querySelector('.filters__toggle-button__check').classList.add('rotate');

    const padding = window.width > 1024 ? 40 : window.width > 768 ? 25 : window.width > 550 ? 15 : 12;

    gsap.to('.filters__content', {
        paddingTop: padding,
        paddingBottom: padding,
        height: 'auto',
        duration: 1,
        borderWidth: 1.5,
        ease: 'power3'
    })
    gsap.to('.filters__accept', {
        paddingTop: padding,
        paddingBottom: padding + 8,
        height: 'auto',
        duration: 1,
        borderWidth: 1.5,
        ease: 'power3',
    })
}

function closeFiltersAnimation() {
    document.querySelector('.filters__toggle-button__check').classList.remove('rotate');
    gsap.to('.filters__content', {padding: '0', height: 0, duration: 1, borderTopWidth: 0, ease: 'power3'})
    gsap.to('.filters__accept', {padding: '0', height: 0, duration: 1, borderTopWidth: 0, ease: 'power3'})
}

const acceptFiltersHandler = () => console.log("Accept filters handler");

const tagSelectHandler = e => e.target.classList.toggle('active')


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if (document.querySelector('.filters')) {
    document.querySelector('.filters__toggle-button').onclick = toggle;
    document.querySelectorAll('.filters__content__tag').forEach(el => el.onclick = tagSelectHandler);
    document.querySelector('.filters__accept__button').onclick = acceptFiltersHandler;
}