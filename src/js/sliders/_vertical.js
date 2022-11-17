import gsap from 'gsap';


export default function VerticalSlider(){
    const selected = [];
    document.querySelectorAll('.vertical-slider-screen__content__slider__item__face__button')
        .forEach(el => {
            el.onclick = () => {
                const element = el.closest('.vertical-slider-screen__content__slider__item').querySelector('.vertical-slider-screen__content__slider__item__content');
                if (element.classList.contains('open')) {
                    element.classList.remove('open');
                    gsap.to(element, {
                        height: 0,
                        autoAlpha: 0,
                        duration: 0.4,
                        ease: 'power3',
                        marginBottom: 0
                    });
                } else {
                    element.classList.add('open');
                    gsap.to(element, {
                        autoAlpha: 1,
                        height: 'auto',
                        duration: 0.4,
                        ease: 'power3',
                        marginBottom: 15
                    });
                }
            }
        });

    console.log(document.querySelectorAll('.vertical-slider-screen__content__slider__item__face__add-button'))


// Тут в выбранное добавляются ИНДЕКСЫ DOM ЭЛЕМЕНТА + 1, а не ID!!! Я просто хз как это в итоге работать будет.
    document.querySelectorAll('.vertical-slider-screen__content__slider__item__face__add-button')
        .forEach((el, index) => el.onclick = () => {
            if (selected.includes(index + 1)) {
                el.innerHTML = 'Добавить';
                el.classList.remove('active');
                selected.splice(selected.findIndex(el => el === (index + 1)), 1)
            } else {
                el.innerHTML = 'Добавлено';
                el.classList.add('active');
                selected.push(index + 1)
            }
            const last_symbol =
                ((selected.length % 100 > 10 && selected.length % 100 <= 20) || (selected.length % 10 >= 5 || selected.length % 10 === 0)) ? 'й' :
                    (selected.length % 10 === 1) ? 'е'
                        : 'я'
            document.querySelectorAll('.form-modal__selected-count__text, .vertical-slider-screen__content__selected-count__text').forEach(el => el.innerHTML = `${selected.length} направлени${last_symbol}`);
        })

    document.querySelector('.open-form-modal-button').onclick = () => {
        if (!selected.length) return;
        document.querySelector('.form-modal__wrapper').classList.add('show');
    };

    document.querySelector('.success-modal-open-button').onclick = () => {
        document.querySelector('.form-modal__wrapper').classList.remove('show');
        document.querySelector('.success-modal__wrapper').classList.add('show');
    };

}