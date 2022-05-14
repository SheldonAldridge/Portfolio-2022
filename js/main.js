let projects = document.querySelector(".projects");
let projectList = document.querySelector(".project-list")
let clickOff = document.querySelector(".img-fluid")

projects.addEventListener('click', function handleMouseOver(){
    if(projects){
        projectList.style.display = "block";
    }
})

clickOff.addEventListener('click', function handleClickOff(){
    if(clickOff){
        projectList.style.display = "none"
    }
})