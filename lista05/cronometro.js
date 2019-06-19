var contaSegundo = 0;
var contaMinuto = 0;
var contaHora = 0;

function playBtn() {
    setInterval(
        function(){
            contaSegundo++;
            if(contaSegundo<10)
                document.getElementById("sec").innerHTML="0"+contaSegundo;
            else
                document.getElementById("sec").innerHTML=contaSegundo;
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
    , 1000);
  }


