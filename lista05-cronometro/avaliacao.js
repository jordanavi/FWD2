var hora = document.getElementById("hora");
var minuto = document.getElementById("minuto");
var segundo = document.getElementById("segundo");

var contaSegundo;
var contaMinuto;
var contaHora;
var pausa;

function contador() {
    pausa = setTimeout("cronometro()", 1000);
}

function cronometro() {
    contaHora = parseInt(hora.value);
    contaMinuto = parseInt(minuto.value);
    contaSegundo = parseInt(segundo.value);
    console.log(contaSegundo);
    console.log(hora.value);
    
    contaSegundo++;

    if(contaHora > 24 || contaMinuto > 60 || contaSegundo > 60){
        contaHora = 0;
        contaMinuto = 0;
        contaSegundo = 0;  
    }

    if (contaSegundo == 60) {
        contaMinuto++;
        contaSegundo = 0;
    }

    if (contaMinuto == 60) {
        contaHora++;
        contaMinuto = 0;
    }

    if (contaHora < 10)
        hora.value = "0" + contaHora;
    else
        hora.value = contaHora;
    if (contaMinuto < 10)
        minuto.value = "0" + contaMinuto;
    else
        minuto.value = contaMinuto;

    if (contaSegundo < 10)
        segundo.value = "0" + contaSegundo;
    else
        segundo.value = contaSegundo;

    contador();
}


function playBtn() {
    document.getElementById("play").disabled = true;
    document.getElementById("pause").disabled = false;
    document.getElementById("stop").disabled = false;
    contador();
}

function pauseBtn() {
    clearTimeout(pausa);
    document.getElementById("play").disabled = false;
    document.getElementById("pause").disabled = true;
}

function stopBtn() {
    document.getElementById("play").disabled = false;
    document.getElementById("pause").disabled = true;
    document.getElementById("stop").disabled = true;
    // document.getElementById("reset").disabled=false;
    clearTimeout(pausa);

    document.getElementById("segundo").value = "00";
    document.getElementById("minuto").value = "00";
    document.getElementById("hora").value = "00";

    contaSegundo = 0;
    contaMinuto = 0;
    contaHora = 0;
}

// function resetBtn(){
//     document.getElementById("play").disabled=false;
//     document.getElementById("pause").disabled=true;
//     document.getElementById("stop").disabled=true;
//     document.getElementById("reset").disabled=true;

//     document.getElementById("sec").innerHTML="00";
//     document.getElementById("min").innerHTML="00";
//     document.getElementById("hor").innerHTML="00";

//     contaSegundo = 0;
//     contaMinuto = 0;
//     contaHora = 0;

// }