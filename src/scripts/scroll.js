function scrollTo (element) {
    window.scroll ({
        left: 0,
        top: element.offsetTop,
        behavior: 'smooth'
    })
}

const links = document.querySelectorAll('.header__link');

for (let linkItem of links) {
    linkItem.addEventListener('click', (event) => {
        event.preventDefault();
        let target = event.target.getAttribute('href').substr(1);
        scrollTo(document.querySelector('.'+ target));
    })
}