let modal = document.querySelector('.modal');

let welcomeView = document.getElementById('welcomeView');
let modalbtnWelcomeviewNext = document.getElementById('modalbtnWelcomeviewNext');

let playercreation1View = document.getElementById('playercreation1View');
let modalbtnPlayercreation1viewNext = document.getElementById('modalbtnPlayercreation1viewNext');
let playername1 = document.getElementById('playername1');
let playercolor1 = document.getElementById('playercolor1');

let playercreation2View = document.getElementById('playercreation2View');
let modalbtnPlayercreation2viewNext = document.getElementById('modalbtnPlayercreation2viewNext');
let playername2 = document.getElementById('playername2');
let playercolor2 = document.getElementById('playercolor2');

let playercheckingView = document.getElementById('playercheckingView');
let modalbtnPlayercheckingviewNext = document.getElementById('modalbtnPlayercheckingviewNext');
let playername1Display = document.getElementById('playername1Display');
let playercolor1Display = document.getElementById('playercolor1Display');
let playername2Display = document.getElementById('playername2Display');
let playercolor2Display = document.getElementById('playercolor2Display');

let savedindicatingView = document.getElementById('savedindicatingView');

let playergame1View = document.getElementById('playergame1View');

// functions.
modal.style.height = welcomeView.offsetHeight + 'px';

modalbtnWelcomeviewNext.onclick = function () {
    welcomeView.style.marginLeft = '-100%';
    modal.style.height = playercreation1View.offsetHeight + 'px';
}

modalbtnPlayercreation1viewNext.onclick = function () {
    let playercreation1Checked = false;
    let playername1Checked = false;
    let playercolor1Checked = false;
    if (playername1.value.length < 3) {
        alert("Votre pseudo est trop court");
        playername1.value = 'Example';
    } else {
        playername1Checked = true;
    }
    if (playercolor1.value === '#ffffff') {
        alert('Vous ne pouvez pas choisir cette couleur')
        playercolor1.value = '#000000';
    } else {
        playercolor1Checked = true;
    }
    if (playercolor1Checked === true && playername1Checked === true) {
        playercreation1Checked = true;
    }
    if (playercreation1Checked === true) {
        localStorage.setItem('playername1', playername1.value);
        localStorage.setItem('playercolor1', playercolor1.value);
        playername1Display.innerHTML = playername1.value;
        playercolor1Display.style.backgroundColor = playercolor1.value;
        welcomeView.style.marginLeft = '-200%';
    }
}

modalbtnPlayercreation2viewNext.onclick = function () {
    let playercreation2Checked = false;
    let playername2Checked = false;
    let playercolor2Checked = false;
    if (playername2.value.length < 3) {
        alert("Votre pseudo est trop court");
        playername2.value = 'Example';
    } else if (playername2.value === localStorage.getItem('playername1')) {
        alert('Pseudo déjà pris')
    } else {
        playername2Checked = true;
    }
    if (playercolor2.value === '#ffffff') {
        alert('Vous ne pouvez pas choisir cette couleur')
        playercolor2.value = '#000000';
    } else if (playercolor2.value === localStorage.getItem('playercolor1')) {
        alert('Couleur déjà prise');
    } else {
        playercolor2Checked = true;
    }
    if (playercolor2Checked === true && playername2Checked === true) {
        playercreation2Checked = true;
    }
    if (playercreation2Checked === true) {
        localStorage.setItem('playername2', playername2.value);
        localStorage.setItem('playercolor2', playercolor2.value);
        playername2Display.innerHTML = playername2.value;
        playercolor2Display.style.backgroundColor = playercolor2.value;
        welcomeView.style.marginLeft = '-300%';
        modal.style.height = playercheckingView.offsetHeight + 'px';
    }
}

modalbtnPlayercheckingviewNext.onclick = function () {
    welcomeView.style.marginLeft = '-400%';
    modal.style.height = savedindicatingView.offsetHeight + 'px';
    setInterval("addPoint()", 400);
    setTimeout("beforeGameLaunch()", 2000);
    setTimeout("launchGame()", 4000);
}

function addPoint() {
    savedindicatingView.innerHTML += '.';
    if (savedindicatingView.textContent.replace(/[^.]/g, "").length === 5) {
        savedindicatingView.innerHTML = 'Patientez';
    }
}

function beforeGameLaunch() {
    welcomeView.style.marginLeft = '-500%';
}

function launchGame() {
    modal.style.height = playergame1View.offsetHeight + 'px';
}