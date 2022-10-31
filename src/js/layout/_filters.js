import gsap from 'gsap';

let is_filters_open = false;
const toggle = () => (is_filters_open = !is_filters_open) ? openFiltersAnimation() : closeFiltersAnimation();


function openFiltersAnimation() {
    gsap.to('.filters__content', {
        paddingTop: '40px',
        paddingBottom: '40px',
        height: 'auto',
        duration: 1,
        borderWidth: 1.5,
        ease: 'power3'
    })
    gsap.to('.filters__accept', {
        paddingTop: 40,
        paddingBottom: 48,
        height: 'auto',
        duration: 1,
        borderWidth: 1.5,
        ease: 'power3',
    })
}

function closeFiltersAnimation() {
    gsap.to('.filters__content', {padding: '0', height: 0, duration: 1, borderTopWidth: 0, ease: 'power3'})
    gsap.to('.filters__accept', {padding: '0', height: 0, duration: 1, borderTopWidth: 0, ease: 'power3'})
}

const acceptFiltersHandler = () => console.log("Accept filters handler");

const tagSelectHandler = e => e.target.classList.toggle('active')


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
document.querySelector('.filters__toggle-button').onclick = toggle;
document.querySelectorAll('.filters__content__tag').forEach(el => el.onclick = tagSelectHandler);
document.querySelector('.filters__accept__button').onclick = acceptFiltersHandler;