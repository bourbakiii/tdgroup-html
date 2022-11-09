import './layout/_navigation.js';
// import './screens/_team.js'
import './layout/_filters.js'
import './screens/_main.js'
import './sliders/_articles.js'
import './sliders/_workers.js'
import './sliders/_cases.js'
import './sliders/_cases-detail.js'

document.querySelector('.open-form-modal-button').onclick = () => document.querySelector('.form-modal__wrapper').classList.toggle('show');
document.querySelector('.open-post-modal-button').onclick = () => document.querySelector('.post-modal__wrapper').classList.toggle('show');
document.querySelector('.modal-wrapper:not(.success-modal__wrapper)').onclick = event => {
    if (event.target.classList.contains('modal-wrapper')) event.target.classList.remove('show')
}
document.querySelector('.form-modal__close-button').onclick = () => document.querySelector('.form-modal__wrapper').classList.remove('show');

document.querySelector('.open-success-modal-button').onclick = () => {
    document.querySelector('.success-modal__wrapper').classList.add('show');
    setTimeout(() => document.querySelector('.success-modal__wrapper').classList.remove('show'), 3000)
}
