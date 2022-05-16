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


