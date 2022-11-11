import './layout/_navigation.js';
// import './screens/_team.js'
// import './layout/_filters.js'
// import './screens/_main.js'
// import './sliders/_articles.js'
// import './sliders/_workers.js'
// import './sliders/_cases.js'
// import './sliders/_cases-detail.js'
// import './sliders/_vertical.js'
//
// if (document.querySelector('.open-form-modal-button')) document.querySelector('.open-form-modal-button').onclick = () => document.querySelector('.form-modal__wrapper').classList.toggle('show');
// if (document.querySelector('.open-post-modal-button')) document.querySelector('.open-post-modal-button').onclick = () => document.querySelector('.post-modal__wrapper').classList.toggle('show');
// document.querySelectorAll('.modal-wrapper:not(.success-modal__wrapper)').forEach(el => el.onclick = event => {
//     if (event.target.classList.contains('modal-wrapper')) event.target.classList.remove('show')
// });
//
// if (document.querySelector('.form-modal__close-button')) document.querySelector('.form-modal__close-button').onclick = () => document.querySelector('.form-modal__wrapper').classList.remove('show');
// if (document.querySelector('.post-modal__close-button')) document.querySelector('.post-modal__close-button').onclick = () => document.querySelector('.post-modal__wrapper').classList.remove('show');
// if (document.querySelector('.open-success-modal-button')) document.querySelector('.open-success-modal-button').onclick = () => {
//     document.querySelector('.success-modal__wrapper').classList.add('show');
//     setTimeout(() => document.querySelector('.success-modal__wrapper').classList.remove('show'), 3000)
// }

const where_navigation_is_fixed = ['/theme.html', '/team.html'];

window.onload = () => {
    console.log(document.location);
    console.log(where_navigation_is_fixed.includes(document.location.pathname))
    if (where_navigation_is_fixed.includes(document.location.pathname)) {
        console.log("%cNAVIGATION SETTING FIXED POSITION BY JAVASCRIPT", 'background-color: lightred');
        document.querySelector('.navigation__wrapper').style.position = 'fixed';
    }
}
