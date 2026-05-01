const myImgs = [
    "michael_pointner-bridge-9456745_1280.jpg",
    "xegxef-city-6220689_1280.jpg",
    "optical_chemist-car-7830811_1280.jpg",
    "thepoorphotographer-tokyo-4436914_1280.jpg",
    "tasukaran-nissan-skyline-r32-6508582_1280.jpg",
    "seanselbie-car-6099761_1280.jpg",
    "seanselbie-car-6099753_1280.jpg",
    "seanselbie-car-6099765_1280.jpg",
    "conxin06-japan-4423120_1280.jpg",
    "tasukaran-nissan-silvia-6509452_1280.jpg",
    "eicare-japan-2697110_1280.jpg",
    "anthr_photoblog-taxi-4333309_1280.jpg"
];

const imgTitles = [
    "Tokyo City",
    "Daikoku",
    "Nissan 280ZX",
    "Tokyo Rain",
    "Nissan x Japan Montains",
    "Nissan Syline Front",
    "Niisan Skyline Back",
    "A Very Geiler Nissan Skyline",
    "Sumida River Tokyo",
    "Nissan Skyline Night",
    "Tokyo Metro",
    "Tokyo Urban"
];

const dialogRef = document.getElementById("dialog");


function render() {
    let contentRef = document.getElementById("content");
    contentRef.innerHTML = ``;
    for (let index = 0; index < imgTitles.length; index++) {
        contentRef.innerHTML += dialogTrigger(index);
    }
}

function dialogTrigger(index) {
    return `  <button class="dialog-trigger" onclick="openDialog(${index})">
                <img
                    class="list-img"
                    src="./img/${myImgs[index]}"
                    alt="${imgTitles[index]}"/>
                </button>`
}

function printDialog(index) {
    dialogRef.innerHTML = renderDialog(index);
}

function renderDialog(index) {
    return `    <header class="header-dialog">
                    <h2>${imgTitles[index]}</h2>
                    <a href="#" onclick="closeDialog()">
                        <img class="dialog-close-btn" src="./img/close-dafault.png"
                    /></a>
                </header>

                <section>
                    <img
                        class="img-dialog"
                        src="./img/${myImgs[index]}"
                        alt="${imgTitles[index]}"
                    />
                </section>

                <footer class="dialog-footer">
                    <button onclick="lastImg(${index})">
                        <img class="button btn-left" src="./img/btn.png" />
                    </button>
                    <p class="p-tack-footer">${index + 1}/${myImgs.length}</p>
                    <button onclick="nextImg(${index})"><img class="button" src="./img/btn.png" /></button>
                </footer>`
}

function openDialog(index) {
    printDialog(index)
    dialogRef.showModal();
}

function closeDialog() {
    dialogRef.close();
}

function nextImg(id) {
    let newI = id + 1;
    if (newI >= myImgs.length) {
        newI = 0;
    }
    printDialog(newI);
}

function lastImg(id) {
    let newI = id - 1;
    if (newI < 0) {
        newI = imgTitles.length - 1;
    }
    printDialog(newI);
}