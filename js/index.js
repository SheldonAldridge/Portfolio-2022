let countDown = new Date("Sep 01, 2021 15:01:00").getTime()


let updateTimer = setInterval(function(){

    let now = new Date().getTime()
    let timeLeft = countDown - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60* 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60* 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    let timer = document.querySelector('.count-down').innerHTML = `${days} days ${hours} hours ${minutes} minutes ${seconds} seconds`
    
}, 1000)

