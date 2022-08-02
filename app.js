let header = document.querySelector('.header');
let hamburgerMenu = document.querySelector('.hamburger-menu');

window.addEventListener('scroll', function () {
    let windowPosition = window.scroll > 0;
    header.classList.toggle('active', windowPosition)
})

hamburgerMenu.addEventListener('click', function (){
    header.classList.toggle('menu-open');
})

/*timer*/ 
let hours = 7;
let minutes = 0;
let seconds = 0;
loadSeconds();

//definimos y ejecutamos los segundos
function loadSeconds(){
    let txtSeconds;

    if(seconds < 0){
        seconds = 59;
    }

    //mostrar segundos en pantalla
    if(seconds < 10){
        txtSeconds =`0${seconds}`;
    }else{
        txtSeconds = seconds;
    }
    document.getElementById('seconds').innerHTML = txtSeconds;
    seconds --;

    loadMinutes(seconds);
}

//definimos y ejecutamos los minutos
function loadMinutes(seconds){
    let textMinutes;

    if(seconds == -1 && minutes !== 0){
        setTimeout(() =>{
            minutes--;
        },500);
    }else if(seconds == -1 && minutes == 0){
        setTimeout(() =>{
            minutes = 59;
        },500);
    }

    //mostras minutos en pantalla
    if(minutes < 10){
        textMinutes =`0${minutes}`;
    }else{
        textMinutes = minutes;
    }
    document.getElementById('minutes').innerHTML =textMinutes;
    loadHours(seconds,minutes);
}

//definimos y ejecutamos las horas
function loadHours(seconds,minutes){
    let textHours;

    if(seconds == -1 && minutes == 0 && hours !== 0){
        setTimeout(() =>{
            hours--;
        },500)
    }else if(seconds == -1 && minutes == 0 && hours == 0){
        setTimeout(() =>{
            hours = 2;
        },500)
    }
}

    //mostras horas en pantalla
    if(hours < 10){
        textHours =`0${hours}`;
    }else{
        textHours = hours;
    }
    document.getElementById('hours').innerHTML = textHours;


//ejecutamos cada segundo
setInterval(loadSeconds,1000);