
function playBtn(){
    document.getElementById("txtHora").innerHTML="Sistemas Para Internet";
}

function resetBtn(){
    document.getElementById("txtHora").innerHTML="00:00:00";
}

function pauseBtn(){
    document.getElementById("txtHora").innerHTML="Sistemas Para Internet";
}

function stopBtn(){
    document.getElementById("txtHora").innerHTML="Sistemas Para Internet";
}

function contaSegundos() {
    setTimeout(, 1000);
  }




function mostrarHoras(){
    var tempo = new Date();
    document.getElementById("horas").innerHTML = tempo.getHours();
    document.getElementById("minutos").innerHTML = tempo.getMinutes();
    document.getElementById("segundos").innerHTML = tempo.getSeconds();
}
