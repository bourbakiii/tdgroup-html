document.querySelectorAll('.team-screen__item')
    .forEach(el => el.onmouseenter = () =>
        el.querySelector('.team-screen__item__video').play()
    );