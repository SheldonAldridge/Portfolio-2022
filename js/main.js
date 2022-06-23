let projects = document.querySelector(".projects");
let projectList = document.querySelector(".project-list")
let clickOffImage = document.querySelector(".img-fluid")
let clickOffnav = document.querySelector(".navbar")

projects.addEventListener('click', function handleClickOn(){
    if(projects){
        projectList.style.display = "block";
    }
})

clickOffImage.addEventListener('click', function handleClickOff(){
    if(clickOffImage){
        projectList.style.display = "none"
    }
})

//variables for card and close
let card = document.querySelector(".card")
let closeCard = document.querySelector(".close")

//event listener to close card
closeCard.addEventListener('click', function close(){
    if(closeCard){
        card.style.display ="none";
    }
})

//variables for furnspace card and close
let furnspace = document.querySelector(".furnspace");
let furnCard = document.querySelector(".furnspace-card");
let education = document.querySelector(".eHL");
//event listener to show furnspace card
furnspace.addEventListener('click', function openFCard(){
    if(furnspace){
        furnCard.style.display ="block";
        education.style.paddingTop = "-50rem";
    }
})

//variables for card and close
let changingWCard = document.querySelector(".changing-card")
let changingclose = document.querySelector(".changing-card-close")


//event listener to close card
changingclose.addEventListener('click', function cWClose(){
    if(changingclose){
        changingWCard.style.display ="none";
    }
})

let cafmCard =  document.querySelector(".cafm-card")
let cafmCardClose =  document.querySelector(".cafm-card-close")

cafmCardClose.addEventListener('click', function cafmClose(){
    if(changingclose){
        cafmCard.style.display ="none";
    }
})

let changing = document.querySelector(".changing-workplace");
let changingCard = document.querySelector(".changing-card");
let cafm = document.querySelector(".cafm-card")

changing.addEventListener('click', function openCCard(){
    if(changing){
        changingCard.style.display ="block";
        cafm.style.display ="block";
    }
})

let staffedCard =  document.querySelector(".get-staffed-up-card")
let staffedClose =  document.querySelector(".get-staffed-up-close")

staffedClose.addEventListener('click', function staffClose(){
    if(staffedClose){
        staffedCard.style.display ="none";
    }
})

let staffedUp = document.querySelector(".get-staffed-up");
let staffCard = document.querySelector(".get-staffed-up-card");


staffedUp.addEventListener('click', function openCCard(){
    if(staffedUp){
        staffCard.style.display ="block";
    }
})

//Skillset SlideShow

let slideIndex = 1;
showSlides(slideIndex);

//next and back slide show control
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.querySelector(".slides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  slides[slideIndex - 1].style.display = "block";
}