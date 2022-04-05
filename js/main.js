'use strict';   // Mode strict du JavaScript

// CONSTANTES & VARIABLES GLOBALES //
let currentIndex = 0;
let previousIndex;
let playing;
let image = document.querySelectorAll("img");
const precedent = document.querySelector(".BeforeBtn");
const suivant = document.querySelector(".AfterBtn");
const play = document.querySelector(".NavigateImage-auto-start");
const pause = document.querySelector(".NavigateImage-auto-stop")
let radioButton = document.querySelectorAll(".NavigateImage-button");

// DECLARATIONS DE FONCTIONS //

// Affichage d'une Diapositive
function displayDiapo() {
    for (let index = 0; index < 10; index++) {
        if (index == previousIndex) {
            image[index].classList.remove('active');
        } else if (index == currentIndex) {
            image[index].classList.add('active');
            radioButton[index].checked = true;
        }       
    };
}

// Allez à la Dapositive précédente
function diapoPrec() {
    if (currentIndex!=0) {
        previousIndex = currentIndex;
        currentIndex --;
    } else {
        previousIndex = 0;
        currentIndex = 9;
    }
    displayDiapo();
}

// Allez à la Diapositive suivante
function diapoNext() {
    if (currentIndex!=9) {
        previousIndex = currentIndex;
        currentIndex ++;
    } else {
        previousIndex = 9;
        currentIndex = 0;
    }
    displayDiapo();
}

// Défilement automatique des Diapositives: START
function playDiapo() {
    play.classList.toggle('hidden');
    pause.classList.toggle('hidden');
    playing = setInterval(function () {
        // if (currentIndex == 9) {
        //     previousIndex = 9;
        //     currentIndex = 0;
        //     displayDiapo();
        // } else {
        //     diapoNext();
        // }
        diapoNext();
    }, 1000);
}

// Défilement automatique des Diapositives: STOP
function stopDiapo() {
    play.classList.toggle('hidden');
    pause.classList.toggle('hidden');
    clearInterval(playing);
}

// CODE PRINCIPALE //

precedent.addEventListener("click", diapoPrec);

suivant.addEventListener("click", diapoNext);

for (let index = 0; index < 10; index++) {
    radioButton[index].addEventListener("click", function(e) {
        const clicked = e.currentTarget;
        previousIndex = currentIndex;
        currentIndex = parseInt(clicked.id.split('image')[1]);
        displayDiapo();
    });
}

play.addEventListener("click", playDiapo);
pause.addEventListener("click", stopDiapo);