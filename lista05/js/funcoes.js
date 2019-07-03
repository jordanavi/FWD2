function trocarImg(numImg, numBolinha) {
    document.getElementById("imgMain").src = "img/img" + numImg + ".png";
    resetaBolinha();
    document.getElementById("b" + numBolinha).style.backgroundColor = "rgb(252, 252, 186)";
    document.getElementById("icon").src = "img/icon0" + numImg + ".png";
    if (numImg ==0 && numBolinha ==0){
        document.getElementById("txt0").innerHTML = "Pet shop";
    }
    else{
        document.getElementById("txt0").innerHTML = document.getElementById("txt" + numImg).innerHTML;
    }
    //mudarLegenda(numImg);
}
function resetaBolinha() {
    document.getElementById("b1").style.backgroundColor = "rgb(108, 57, 28)";
    document.getElementById("b2").style.backgroundColor = "rgb(108, 57, 28)";
    document.getElementById("b3").style.backgroundColor = "rgb(108, 57, 28)";
    document.getElementById("b4").style.backgroundColor = "rgb(108, 57, 28)";
    document.getElementById("b5").style.backgroundColor = "rgb(108, 57, 28)";
}
// function imgIni() {
//     document.getElementById("imgMain").src = "img/img0.png";
//     //document.getElementById("txt0").innerHTML = "Pet Shop";
// }


/*function mudarLegenda() {
    switch (numLegenda){
        case 1: document.getElementById("leg").innerHTML = "Banho e tosa";
        break;
        case 2: document.getElementById("leg").innerHTML = "Vacinação";
        break;
        case 3: document.getElementById("leg").innerHTML = "Adoções";
        break;
        case 4: document.getElementById("leg").innerHTML = "Vendas";
        break;
        case 5: document.getElementById("leg").innerHTML = "Atendimento veterinário";
        break;
        case 0: ocument.getElementById("leg").innerHTML = "Ops";
        break;
    }
} */

