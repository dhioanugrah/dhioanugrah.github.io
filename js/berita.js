const beritaList = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, dolore',
    'animi nostrum ut dolorum ab excepturi esse, quas optio, reiciendis',
    'cupiditate distinctio. Ea hic ut numquam at? Harum eum iste',
    'fuga ut nam eaque ullam. Autem in illum culpa corporis',
    'consequatur architecto, non dolor suscipit vero repellendus necessitatibus reprehenderit debitis',
    'minima praesentium ipsum unde numquam libero repellat. Cum eligendi sit',
    'rerum minus laudantium deserunt impedit rem nihil numquam. Nulla quis',
    'quam repudiandae reiciendis iste rem dolorum. Voluptates dolorum quae ad?',
]

const beritaEls = [...document.querySelectorAll('.berita-item')];
const searchInput = document.getElementById('search');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const numBtns = [...document.querySelectorAll('.numbered-btn')];

const randBeritas = [];
randBeritas.push(beritaList.slice());
while(randBeritas.length<5){
    randBeritas.push(beritaList.slice().sort(berita => (Math.floor(Math.random() * 2) === 0 ? -1 : 1)));
}

let currentPage = 0;

numBtns.forEach(numBtn => {
    numBtn.addEventListener('click', () => {
        const currentBtn = document.querySelector('.numbered-btn[current]');
        if (numBtn === currentBtn) return;
        currentPage = parseInt(numBtn.textContent) - 1;
        refreshPrevNext();
        currentBtn.removeAttribute('current');
        numBtn.setAttribute('current', '');
        initPage();
    })
})

prevBtn.addEventListener('click', () => {
    if (currentPage - 1 < 0) return;
    numBtns[currentPage].removeAttribute('current');
    --currentPage;
    refreshPrevNext();
    numBtns[currentPage].setAttribute('current', '');
    initPage();
})

nextBtn.addEventListener('click', () => {
    if (currentPage + 1 > 4) return;
    numBtns[currentPage].removeAttribute('current');
    ++currentPage;
    refreshPrevNext();
    numBtns[currentPage].setAttribute('current', '');
    initPage();
})

searchInput.addEventListener('input', search)

function search(){
    beritaEls.forEach(beritaEl=>beritaEl.style.display='');
    beritaEls.filter((beritaEl) => {
        return !beritaEl.querySelector('.berita-title').textContent.toLowerCase().includes(searchInput.value.toLowerCase());
    }).forEach(beritaEl=>beritaEl.style.display='none');
    AOS.refresh();
}

function initPage(){
    beritaEls.forEach((beritaEl, i) => {
        beritaEl.querySelector('.berita-title').textContent = randBeritas[currentPage][i];
    })
    document.querySelector('.current-page').textContent=currentPage+1;
    search();
    AOS.refresh();
    
}

function refreshPrevNext() {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    if (currentPage === 0) prevBtn.disabled = true;
    if (currentPage === 4) nextBtn.disabled = true;
}