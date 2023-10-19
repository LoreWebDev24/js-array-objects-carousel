// MY FUNCTIONS:

function autoCarusel() {

    let currentImageDOMElement = imageDOMElements[indexCurrentImage];
    currentImageDOMElement.classList.remove('active');


    if (indexDirection === 'forward') {
        indexCurrentImage++;

        // 
        if (indexCurrentImage > (images.length) - 1) {
            indexCurrentImage = 0;
        }
    } else {
        indexCurrentImage--;

        if (indexCurrentImage < 0) {
            indexCurrentImage = images.length - 1

        }
        // 
    }

    let nextImageDOMElement = imageDOMElements[indexCurrentImage];
    nextImageDOMElement.classList.add('active');
}

function goForward () {

    let currentImageDOMElement = imageDOMElements[indexCurrentImage]
    currentImageDOMElement.classList.remove('active')


    indexCurrentImage++;

    if (indexCurrentImage > (images.length) - 1) {
        indexCurrentImage = 0
    }


    let nextImageDOMElement = imageDOMElements[indexCurrentImage]
    nextImageDOMElement.classList.add('active')
}


function goBackward () {

    let currentImageDOMElement = imageDOMElements[indexCurrentImage]
    currentImageDOMElement.classList.remove('active')


    indexCurrentImage--;

    if (indexCurrentImage < 0) {
        indexCurrentImage = images.length - 1

    }


    let prevImageDOMElement = imageDOMElements[indexCurrentImage]
    prevImageDOMElement.classList.add('active')
}



// MY ARRAY OF OBJECTS CONTAINING IMG SRC GAME TITLE AND DESCRIPTION :

const images = [
    {
        image: 'img/01.webp',
        title: "Marvel's Spiderman Miles Morale",
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: 'Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.',
    },
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: "Marvel's Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.",
    },
]



// LOGIC PART OF THE CAROUSEL: 


let containerDOMElement = document.querySelector('.container-big')

let indexCurrentImage = 0;
let indexDirection = 'forward';


let containerPrewDOMElement = document.querySelector('.container-prew')

// Genero dall'array tutti i tag con le immagini/titol/descrizione

for (let i = 0; i < images.length; i++) {
    let currentSrc = images[i].image;
    let currentTitle = images[i].title;
    let currentText = images[i].text;


    let htmlString = `
    <div class="image"> 
        <img src="${currentSrc}">
        <h4>${currentTitle}</h4>
        <p>${currentText}</p>
    </div>
    `

    let htmlThumb = `
    <div class="thumbs"> 
        <img src="${currentSrc}">
    </div>
    `
    containerPrewDOMElement.innerHTML += htmlThumb
    containerDOMElement.innerHTML += htmlString

}


// Mi recupero tutte le immagini di classe img create

let imageDOMElements = document.querySelectorAll('.image')



let currentImageDOMElement = imageDOMElements[indexCurrentImage]
currentImageDOMElement.classList.add('active')

// AUTO CAROSELLO ALWAYS ACTIVE

let intervalID;

intervalID = setInterval(autoCarusel, 3000);

// EVENT LISTENERS 

document.querySelector(".button-backward").addEventListener("click", function () {

    goBackward ();
});


document.querySelector(".button-forward").addEventListener("click", function () {

    goForward ();

});

document.querySelector('.button-change-dir').addEventListener('click', function () {

    indexDirection = 'backward';

});


document.querySelector('.stop-auto-carusel').addEventListener('click', function () {

    clearInterval(intervalID);

});

document.querySelector('.play-auto-carusel').addEventListener('click', function () {
    
    clearInterval(intervalID);
    intervalID = setInterval(autoCarusel, 3000);

});





