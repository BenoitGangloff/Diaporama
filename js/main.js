'use strict';   // Mode strict du JavaScript

// CONSTANTES & VARIABLES GLOBALES //
let currentIndex = 0;
let previousIndex;
let image = document.querySelectorAll("img");
const precedent = document.querySelector(".BeforeBtn");
const suivant = document.querySelector(".AfterBtn");
let radioButton  = document.querySelectorAll(".NavigateImage-button")
console.log(radioButton);

// DECLARATIONS DE FONCTIONS //
function displayDiapo() {
    for (let index = 0; index < 10; index++) {
        if (index == previousIndex) {
            image[index].classList.remove('active');
        } else if (index == currentIndex) {
            image[index].classList.add('active');
        }       
    };
}


// CODE PRINCIPALE //
precedent.addEventListener("click", function(){
    if (currentIndex!=0) {
        previousIndex = currentIndex;
        currentIndex --;

    }
    displayDiapo();
});

suivant.addEventListener("click", function name(params) {
    if (currentIndex!=9) {
        previousIndex = currentIndex;
        currentIndex ++;
    }
    displayDiapo();
});
