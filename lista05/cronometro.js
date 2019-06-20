var contaSegundo = 0;
var contaMinuto = 0;
var contaHora = 0;
var pausa = false; //variável de controle

function contador() {
    setInterval(        //função temporizadora usada para chamar funções de retorno (callback functions) após um determinado tempo. 
        function(){ 
            if(pausa == false){  //se não está pausado
                contaSegundo++; //soma o segundo
                if(contaSegundo<10) //verifica se o valor de segundo é menor que zero, se for, acrescenta o zero antes e mostra o segundo com valor novo
                    document.getElementById("sec").innerHTML="0"+contaSegundo;
                else
                    document.getElementById("sec").innerHTML=contaSegundo; //mostra o segundo com valor novo
                if(contaMinuto<10)
                    document.getElementById("min").innerHTML="0"+contaMinuto; 
                else
                    document.getElementById("min").innerHTML=contaMinuto; 
                if(contaHora<10)
                    document.getElementById("hor").innerHTML="0"+contaHora; 
                else
                    document.getElementById("hor").innerHTML=contaHora;
                
                if(contaSegundo>=59){
                    contaSegundo=0;
                    contaMinuto++;
                }
                
                if(contaMinuto>=59){
                    contaMinuto=0;
                    contaHora++;
                }
            }
        }
    , 1000);
  }

function playBtn(){
    document.getElementById("play").disabled=true;
    document.getElementById("pause").disabled=false;
    document.getElementById("stop").disabled=false;
    contador();
    if (pausa==false)
        contador();
    else 
      pausa=false;
}

function pauseBtn(){
    pausa = true;
    document.getElementById("play").disabled=false;
    document.getElementById("pause").disabled=true;
}

function stopBtn(){
    document.getElementById("play").disabled=true;
    document.getElementById("pause").disabled=true;
    document.getElementById("stop").disabled=true;
    document.getElementById("reset").disabled=false;
    pausa = true;
}

function resetBtn(){
    document.getElementById("play").disabled=false;
    document.getElementById("pause").disabled=true;
    document.getElementById("stop").disabled=true;
    document.getElementById("reset").disabled=true;

    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hor").innerHTML="00";
    
    contaSegundo = 0;
    contaMinuto = 0;
    contaHora = 0;

}