let countDown = new Date("Sep 01, 2022 15:01:00").getTime()


let updateTimer = setInterval(function(){

    let now = new Date().getTime()
    let timeLeft = countDown - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60* 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    let timer = document.querySelector('.count-down').innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
    
}, 1000)


/******************************************
 * getting the list of the nav item class *              
 ******************************************/

let getNav = document.querySelector(".home");

/*************************
 * Home tab hover effect *              
 *************************/

let displayAgumon = document.querySelector(".agumon");

getNav.addEventListener('mouseover', function handleMouseOver(){

    if(getNav){
    displayAgumon.style.display = "block";
    }

})

getNav.addEventListener('mouseout', function handleMouseOut(){

    if(getNav){
    displayAgumon.style.display = "none";
    }

})

/*****************************
 * About me tab hover effect *              
 *****************************/
let getaboutme = document.querySelector(".aboutme");

let displayAgumonPower = document.querySelector(".agumon-spit-fire");

getaboutme.addEventListener('mouseover', function handleMouseOver(){

    if(getaboutme){
        displayAgumonPower.style.display = "block";
    }

})

getaboutme.addEventListener('mouseout', function handleMouseOut(){

    if(getaboutme){
        displayAgumonPower.style.display = "none";
    }

})

/*******************************
 * Experience tab hover effect *              
 *******************************/

 let getExperience = document.querySelector(".experience");

 let displayAgumonPowerball = document.querySelector(".agumon-powerball-fire");
 
 getExperience.addEventListener('mouseover', function handleMouseOver(){
 
     if(getExperience){
        displayAgumonPowerball.style.display = "block";
     }
 
 })
 
 getExperience.addEventListener('mouseout', function handleMouseOut(){
 
     if(getExperience){
        displayAgumonPowerball.style.display = "none";
     }
 
 })

 /************************
 * Work tab hover effect *              
 *************************/

  let getwork = document.querySelector(".work")

  let displayAgumonJump = document.querySelector(".agumon-jumping")

  getwork.addEventListener('mouseover', function handleMouseOut(){
      if(getwork){
        displayAgumonJump.style.display = "block";
      }
  })

  getwork.addEventListener('mouseout', function handleMouseOut(){
    if(getwork){
      displayAgumonJump.style.display = "none";
    }
})
