const imgs = [...document.querySelectorAll('img.galeri-img')];
const lightbox = document.querySelector('.lightbox');
const imgL = lightbox.querySelector('img');

imgs.forEach(img => {
    img.addEventListener('click', e => {
        lightbox.hidden = false;
        initLightbox(img);
    });
});

window.addEventListener('resize', () => initLightbox(imgL))

lightbox.addEventListener('click', e => {
    if (e.target !== lightbox.querySelector('img')) {
        lightbox.hidden = true;
    }
});

function initLightbox(srcImg) {
    const imgW = parseFloat(getComputedStyle(srcImg).width.replace(/px/g, ''));
    const imgH = parseFloat(getComputedStyle(srcImg).height.replace(/px/g, ''));
    imgL.src = srcImg.src;
    imgL.style.width = 'auto';
    imgL.style.height = 'auto';
    if (imgW >= imgH) {
        imgL.style.width = '75vw';
        const imgLH = parseFloat(getComputedStyle(imgL).height.replace(/px/g, ''));
        const imgLW = parseFloat(getComputedStyle(imgL).width.replace(/px/g, ''));
        const diffH = window.innerHeight - imgLH;
        if (Math.abs(diffH) !== diffH) return imgL.style.width = ((imgLW + (diffH * 4)) / window.innerWidth * 100) + 'vw';
    } else {
        imgL.style.height = '75vh';
        const imgLH = parseFloat(getComputedStyle(imgL).height.replace(/px/g, ''));
        const imgLW = parseFloat(getComputedStyle(imgL).width.replace(/px/g, ''));
        const diffW = window.innerWidth - imgLW;
        if (Math.abs(diffW) !== diffW) return imgL.style.height = ((imgLH - (diffW * 1)) / window.innerHeight * 100) + 'vw';
    }
}