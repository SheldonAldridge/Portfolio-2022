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

//event listener to show furnspace card
furnspace.addEventListener('click', function openFCard(){
    if(furnspace){
        furnCard.style.display ="block";
    }
})
