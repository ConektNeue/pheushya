let loadingScreen = document.querySelector('.loading-screen');
let loadingScreenText = document.querySelector('.loading-screen>p');

// setTimeout("displayLoadingscreen()", 1000);
// setTimeout("dnoneSplashscreen()", 2000);
// setTimeout("displayCanvas()", 3000);
// setTimeout("dnoneLoadingscreen()", 5000);

displayCanvas();
dnoneSplashscreen();

function displayLoadingscreen() {
    loadingScreen.style.display = 'flex';
    setInterval("addPointLoadingscreentext()", 500);
}

function dnoneSplashscreen() {
    document.querySelector('.splash-screen').style.display = 'none';
}

function displayCanvas() {
    document.querySelector('.canvas').style.display = 'block';
}

function dnoneLoadingscreen() {
    document.querySelector('.loading-screen').style.display = 'none';
}

function addPointLoadingscreentext() {
    loadingScreenText.innerHTML += '.';
    if (loadingScreenText.textContent.replace(/[^.]/g, "").length === 5) {
        loadingScreenText.innerHTML = 'Chargement';
    }
}