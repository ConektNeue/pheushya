let modal = document.querySelector('.modal');

let welcomeView = document.getElementById('welcomeView');
let modalbtnWelcomeviewNext = document.getElementById('modalbtnWelcomeviewNext');

let playercreationView = document.getElementById('playercreationView');

// functions.
modal.style.height = welcomeView.offsetHeight + 'px';

modalbtnWelcomeviewNext.onclick = function () {
    welcomeView.style.marginLeft = '-100%';
    modal.style.height = playercreationView.offsetHeight + 'px';
}