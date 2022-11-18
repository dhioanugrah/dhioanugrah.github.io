const people = [];
const names = [
    'Ariyadi, S.ST., M.T.',
    'Jabal Firmansyah',
    'Dewi Endah Mardhiyah',
    'Baktiadi Budiman',
    'Satya Harjaya Putra',
    'Dalima Prastuti',
    'Langgeng Prakasa',
    'Kasusra Hakim',
    'Jessica Susanti',
    'Cinthia Laksmiwati',
    'Ismail Arta Zulkarnain',
    'Ibrahim Irawan',
    'Nadia Ciaobella Hariyah',
    'Lamar Bancar Marbun',
    'Dadi Hutapea',
    'Harjaya Pangeran Rajasa',
    'Darsirah Estiawan Prakasa',
    'Indah Hartati',
    'Imam Lembah Dabukke',
    'Okta Cahyo Suryono',
    'Iriana Lestari',
    'Bakiman Siregar',
    'Uchita Nurdiyanti',
    'Rahmat Gunawan',
    'Raharja Marbun',
    'Harto Dongoran',
    'Padmi Laksmiwati',
    'Jagapati Hasan Najmudin',
    'Ophelia Rahayu',
    'Intan Azalea Wulandari',
    'Nadia Lestari',
    'Warsa Wardaya Prabowo',
    'Taswir Nashiruddin',
    'Ophelia Tina Utami',
    'Elvina Handayani',
    'Gada Indra Tampubolon',
    'Zahra Betania Aryani',
    'Dono Darmana Wasita',
    'Hamima Iriana Namaga',
    'Umay Darmana Kurniawan',
    'Vivi Namaga',
    'Panca Sirait',
    'Mujur Gunarto',
    'Dacin Latupono',
    'Maria Purwanti',
    'Setya Uwais',
    'Intan Astuti',
    'Purwanto Saefullah',
    'Jail Adhiarja Napitupulu',
    'Gara Nyana Tamba',
]
const majors = ['TKJ', 'RPL', 'MM'];
const statuses = ['Kuliah', 'Kerja', 'Kerja (DUDIKA)', 'Wirausaha'];
const annotations = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    'A lacus vestibulum sed arcu non',
    'Tortor condimentum lacinia quis vel eros donec',
    'Nibh cras pulvinar mattis nunc sed blandit libero',
    'Praesent tristique magna sit amet purus gravida quis',
    'Sed enim ut sem viverra aliquet eget sit amet',
    'Lectus mauris ultrices eros in',
    'Lorem donec massa sapien faucibus et',
    'Vitae congue mauris rhoncus aenean vel',
    'Elementum curabitur vitae nunc sed velit dignissim sodales ut eu',
    'Phasellus faucibus scelerisque eleifend donec pretium',
    'Proin sagittis nisl rhoncus mattis rhoncus urna neque',
    'A condimentum vitae sapien pellentesque habitant morbi tristique senectus et',
    'Nullam eget felis eget nunc',
    'A scelerisque purus semper eget duis at tellus at',
    'Pellentesque habitant morbi tristique senectus',
    'Odio facilisis mauris sit amet massa vitae tortor',
    'Purus sit amet volutpat consequat mauris',
    'Pretium nibh ipsum consequat nisl',
    'Semper eget duis at tellus at urna condimentum mattis',
    'Ac tincidunt vitae semper quis lectus nulla at volutpat diam',
    'A pellentesque sit amet porttitor eget',
    'Amet cursus sit amet dictum sit amet justo donec enim',
    'Elit ut aliquam purus sit amet',
    'Tincidunt lobortis feugiat vivamus at augue eget',
    'Turpis massa sed elementum tempus egestas sed',
    'Lectus mauris ultrices eros in cursus turpis massa',
    'Euismod quis viverra nibh cras pulvinar mattis nunc',
    'Hac habitasse platea dictumst vestibulum rhoncus',
    'Consequat interdum varius sit amet mattis',
    'Amet commodo nulla facilisi nullam vehicula ipsum a',
    'Sollicitudin aliquam ultrices sagittis orci a',
    'Sed turpis tincidunt id aliquet risus feugiat in ante metus',
    'Vivamus at augue eget arcu',
    'Facilisis magna etiam tempor orci',
    'Egestas congue quisque egestas diam in',
    'Nec ultrices dui sapien eget mi',
    'Ultrices vitae auctor eu augue ut lectus',
    'Eget velit aliquet sagittis id consectetur purus ut',
    'Et egestas quis ipsum suspendisse ultrices gravida',
    'Ut venenatis tellus in metus vulputate eu scelerisque',
    'Ullamcorper velit sed ullamcorper morbi',
    'Lectus mauris ultrices eros in cursus turpis',
    'Vel turpis nunc eget lorem',
    'Ornare lectus sit amet est',
    'Tortor aliquam nulla facilisi cras fermentum odio eu',
    'Donec pretium vulputate sapien nec sagittis',
    'Libero justo laoreet sit amet',
    'Magna ac placerat vestibulum lectus mauris',
    'Ac tortor vitae purus faucibus',
]

Array.prototype.random = function (weightArr) {
    if (!weightArr) return this[Math.floor(Math.random() * this.length)];
    const weightedArr = [];
    this.forEach((item, i) => {
        for (let j = 0; j < weightArr[i]; j++) {
            weightedArr.push(item);
        }
    })
    return weightedArr[Math.floor(Math.random() * weightedArr.length)];
}

for (let i = 0; i < 50; i++) {
    const shuffledNames = shuffle(names);
    const major = majors.random();
    const status = statuses.random([3, 3, 1, 2]);
    const shuffledAnnotations = shuffle(annotations);
    people[i] = [i + 1, shuffledNames[i], major, status, shuffledAnnotations[i]];
}

const tBody = document.querySelector('tbody');
const searchInput = document.getElementById('search');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const numBtns = [...document.querySelectorAll('.numbered-btn')];

let currentPage = 0;

initPage();
initTotal();

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

searchInput.addEventListener('input', search);

function initTotal() {
    const kuliah = people.filter(person => person[3] === 'Kuliah').length;
    const kerja = people.filter(person => person[3] === 'Kerja').length;
    const dudika = people.filter(person => person[3] === 'Kerja (DUDIKA)').length;
    const wirausaha = people.filter(person => person[3] === 'Wirausaha').length;
    const seluruh = people.length;
    const persentase = (kerja + dudika) / seluruh * 100;
    document.querySelector('.kuliah-value').textContent = kuliah + ' Siswa';
    document.querySelector('.kerja-value').textContent = kerja + ' Siswa';
    document.querySelector('.dudika-value').textContent = dudika + ' Siswa';
    document.querySelector('.wirausaha-value').textContent = wirausaha + ' Siswa';
    document.querySelector('.seluruh-value').textContent = seluruh + ' Siswa';
    document.querySelector('.persentase-value').textContent = parseFloat(persentase.toFixed(2)) + '%';
}

function search() {
    const tableRows = [...tBody.querySelectorAll('tr')];
    const trScore = new Array(10).fill(0);
    tableRows.forEach(row => row.style.display = 'none');
    tableRows.forEach((row, i) => {
        const tableCells = [...row.querySelectorAll('td')];
        tableCells.forEach(cell => {
            const cellValue = cell.textContent.toLowerCase();
            searchInput.value.toLowerCase().split(/\b/g).forEach(word => {
                if (cellValue.includes(word) && !word.includes(' ')) trScore[i]++
            })
        })
    })
    const highScore = trScore.reduce((a, b) => Math.max(a, b), 0);
    if (highScore > 0) {
        trScore.forEach((row, i) => {
            if (row === highScore) tableRows[i].style.display = 'revert';
        })
    }
    AOS.refresh();
}

function initPage() {
    tBody.innerHTML = people.slice(currentPage * 10, (currentPage * 10) + 10).map(person => `<tr>${person.map(prop => `<td>${prop}</td>`).join('\n')}</tr>`).join('\n');
    document.querySelector('.current-page').textContent = currentPage + 1;
    search();
    AOS.refresh();
}

function refreshPrevNext() {
    prevBtn.disabled = false;
    nextBtn.disabled = false;
    if (currentPage === 0) prevBtn.disabled = true;
    if (currentPage === 4) nextBtn.disabled = true;
}

function shuffle(arrayRef) {
    const array = arrayRef.slice();
    let currentIndex = array.length, randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    return array;
}