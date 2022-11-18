const navToggle = document.getElementById('nav-toggle');
const navSubToggles = [...document.querySelectorAll('.nav-sub-toggler, .nav-sub .nav-item')];
const navSubLabels = [...document.querySelectorAll('.nav-sub-label')];

navToggle.addEventListener('change', () => {
    document.body.scrollTo(0, 0);
    document.documentElement.scrollTo(0, 0);
    if (navToggle.checked) return document.body.style.overflow = 'hidden';
    document.body.style.overflow = 'auto';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 800) return document.body.style.overflow = 'auto';
    if (navToggle.checked) return document.body.style.overflow = 'hidden';
    document.body.style.overflow = 'auto';
});

window.addEventListener('click', e => {
    if (!navSubToggles.includes(e.target)) navSubToggles.forEach(toggler => toggler.checked = false)
});

navSubLabels.forEach(navSubLabel => {
    navSubLabel.addEventListener('keyup', e => {
        const toggler = navSubLabel.nextElementSibling;
        console.log(toggler);
        if (e.key === 'Enter' || e.key === ' ') toggler.checked = !toggler.checked;
    })
})

AOS.init({
    duration: 750,
    offset: 72,
    once: true,
});

window.addEventListener('DOMContentLoaded', removeAOS);
window.addEventListener('scroll', removeAOS);

function removeAOS() {
    const aosInits = [...document.querySelectorAll('.aos-init')];
    aosInits.forEach(aosEl => {
        let duration = parseInt(aosEl.getAttribute('data-aos-duration'));
        let delay = parseInt(aosEl.getAttribute('data-aos-delay'));
        duration = !isNaN(duration) ? duration : 1000;
        delay = !isNaN(delay) ? delay : 0;
        if (aosEl.classList.contains('aos-animate')) {
            setTimeout(() => {
                aosEl.classList.remove('aos-animate');
                aosEl.removeAttribute('data-aos');
            }, duration+delay);
        }
    })
}