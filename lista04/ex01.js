//EXERCÍCIO A
function validarA() {
    var textoA = document.getElementById("txtInfoA").value;

    var padraoA = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/
    if (padraoA.test(textoA))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}

//EXERCÍCIO B
function validarB() {
    var textoB = document.getElementById("txtInfoB").value;

    //três primeiros dígitos e ponto
    //var padraoB = /^\d{3}\.$/

    //seis primeiros dígitos e pontos
    //var padraoB = /^\d{3}\.\d{3}\.$/

    //nove primeiros dígitos e pontos
    //var padraoB = /^\d{3}\.\d{3}\.\d{3}$/

    //todos dígitos, pontos e traço
    var padraoB = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/

    if (padraoB.test(textoB))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}

//EXERCÍCIO C
function validarC() {
    var textoC = document.getElementById("txtInfoC").value;

    //IFTM maiusculo
    //var padraoC = /^IFTM-$/;

    //IFTM maiusculo e minúsculo
    //var padraoC = /^IFTM-$/i;

    //IFTM maiusculo e minúsculo; 3 dígitos e barra 
    //var padraoC = /^IFTM-\d{3}\/$/i;

    //IFTM maiusculo e minúsculo; 3 digitos numericos; barra; 3 digitos numericos
    var padraoC = /^IFTM-\d{3}\/\d{3}$/i;

    //IFTM maiusculo e minúsculo; 3 digitos numericos; barra; 3 digitos numericos; traço; 2 caracteres alfanuméricos
    var padraoC = /^IFTM-\d{3}\/\d{3}-\w{2}$/i;

    if (padraoC.test(textoC))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}

//EXERCÍCIO D
function validarD() {
    var textoD = document.getElementById("txtInfoD").value;

    //MT maiusculo e minusculo; dois dígitos; ponto; tres digitos; traço; iftm  
    var padraoD = /^MT-\d{2}.\d{3}-IFTM$/i

    if (padraoD.test(textoD))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}

//EXERCÍCIO E
function validarE() {
    var textoE = document.getElementById("txtInfoE").value;

    //MT maiusculo e minusculo; dois dígitos; ponto; tres digitos; traço; iftm  
    var padraoE = /^MT-\d{2}.\d{3}-(I|i)(F|f)(T|t)(M|m)$/

    if (padraoE.test(textoE))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}

//EXERCÍCIO F
function validarF() {
    var textoF = document.getElementById("txtInfoF").value;

    //MT; dois dígitos; ponto; tres digitos; traço; iftm (maiúsculas e minúsculas)  
    //var padraoF = /^MT-\d{2}.\d{3}-IFTM$/i 

    //MT; dois dígitos; ponto; tres digitos; traço; iftm (maiúsculas e minúsculas) com espaço em branco entre M e T
    //var padraoF = /^M\s{0,1}T-\d{2}.\d{3}-IFTM$/i

    //MT; dois dígitos; ponto; tres digitos; traço; iftm (maiúsculas e minúsculas) com espaço em branco MT e IFTM
    var padraoF = /^M\s{0,1}T-\d{2}.\d{3}-I\s{0,1}F\s{0,1}T\s{0,1}M$/i

    if (padraoF.test(textoF))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}

//EXERCÍCIO G
function validarG() {
    var textoG = document.getElementById("txtInfoG").value;

    //MT; dois dígitos; ponto; tres digitos; traço; iftm (maiúsculas e minúsculas) com espaço em branco MT e IFTM
    //var padraoG = /^M\s{0,1}T-\d{2}.\d{3}-I\s{0,1}F\s{0,1}T\s{0,1}M$/i

    //MT; dois dígitos; ponto; três dígitos; traço; iftm (maiúsculas e minúsculas) com espaço em branco MT e IFTM;
    //espaço em branco no final
    //var padraoG = /^M\s{0,1}T-\d{2}.\d{3}-I\s{0,1}F\s{0,1}T\s{0,1}M $/i

    //com UBERLÂNDIA
    //var padraoG = /^M\s{0,1}T-\d{2}.\d{3}-I\s{0,1}F\s{0,1}T\s{0,1}M Uberlândia$/i

    //com UBERLÂNDIA; com ou sem Centro
    //var padraoG = /^M\s{0,1}T-\d{2}.\d{3}-I\s{0,1}F\s{0,1}T\s{0,1}M Uberlândia( Centro)?$/i

    //Maiúscula e minúscula no M
    //var padraoG = /^(M\s?|m\s?)T-\d{2}.\d{3}-I\s?F\s?T\s?M\s? Uberlândia( Centro)?$/

    //Maiúscula e minúscula no M e no T
    //var padraoG = /^(M|m)\s?(T|t)\s?-\d{2}.\d{3}-I\s?F\s?T\s?M\s? Uberlândia( Centro)?$/

    //Maiúscula e minúscula no MT e IFTM
    var padraoG = /^(M|m)\s?(T|t)-\d{2}.\d{3}-(I|i)\s?(F|f)\s?(T|t)\s?(M|m) Uberlândia( Centro)?$/

    if (padraoG.test(textoG))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO H
function validarH() {
    var textoH = document.getElementById("txtInfoH").value;

    //telefone sem nada
    //var padraoH = /^\d{5}-\d{4}$/

    //telefone com ddd
    var padraoH = /^\+\d{1,3}\(\d{2}\)\d{5}-\d{4}$/

    if (padraoH.test(textoH))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO I
function validarI() {
    var textoI = document.getElementById("txtInfoI").value;

    //telefone com ddd de 2 dígitos
    //var padraoI = /^\(\d{2}\)\d{5}-\d{4}$/

    //telefone com ddd de 1 a 3 dígitos
    var padraoI = /^\(\d{1,3}\)\d{5}-\d{4}$/

    if (padraoI.test(textoI))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO J
function validarJ() {
    var textoJ = document.getElementById("txtInfoJ").value;

    //valor monetário
    //var padraoJ = /^R\$$/

    //com casas decimais
    //var padraoJ = /^R\$\d{1},\d{1,2}$/

    //até 999
    //var padraoJ = /^R\$\d{1,3},\d{1,2}$/

    //um ou três dígitos no começo; ponto e três dígitos zero ou infinitas vezes; separados por ponto; vírgula e dois dígitos no final
    //var padraoJ = /^R\$\d{1,3}(.\d{3})*,\d{2}$/;

    //um ou três dígitos no começo; ponto e três dígitos zero ou três vezes; separados por ponto; vírgula e dois dígitos no final
    var padraoJ = /^R\$\d{1,3}(.\d{3}){0,3},\d{2}$/;

    if (padraoJ.test(textoJ))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO K
function validarK() {
    var textoK = document.getElementById("txtInfoK").value;

    //qualquer valor separado por :
    //var padraoK = /^\d{2}:\d{2}:\d{2}:\d{2}$/;

    //horas de 0 a 23
    //var padraoK = /^([0][0-9]|[1][0-9]|[2][0-3]):\d{2}:\d{2}:\d{2}$/;

    //horas de 0 a 23; minutos de 0 a 59;
    //var padraoK = /^([0][0-9]|[1][0-9]|[2][0-3]):([0-5][0-9]):\d{2}:\d{2}$/;

    //horas de 0 a 23; minutos de 0 a 59; segundos de 0 a 59;
    var padraoK = /^([0][0-9]|[1][0-9]|[2][0-3]):([0-5][0-9]):([0-5][0-9]):([0-9][0-9])$/;

    if (padraoK.test(textoK))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
//EXERCÍCIO L
function validarL() {
    var textoL = document.getElementById("txtInfoL").value;

    //X&W.Y.Z-U,V.T ou X&W.Y-U,V.T

    //X deverá ser no mínimo 5 (cinco) caracteres alfanuméricos, além de um dos seguintes símbolos (“.”, “-”,”_”)
    var x = /^(\w|\.|\-|\_){5,}$/;
    //W deverá ser apenas letras maiúsculas ou minúsculas de "a" a "p" (pelo menos 1)
    var w = /^([a-pA-P]){1,}$/;
    //Y    apenas vogais minúsculas (pelo menos 1)
    var y = /^(a|e|i|o|u){1,}$/;
    //Z    apenas letras maiúsculas ou minúsculas e/ou números de 0 a 5 (opcional)
    //var zAntigo = /^(([a-zAZ]{1,}|[0-5]{1,})|([a-zAZ0-5]{1,}))?$/;
    var z = /^(([a-zAZ]{1,}|[0-5]{0,})|([a-zA-Z0-5]{1,}))?$/;
    //U    deverá ser caracteres diferentes de números (pelo menos 1)
    var u = /^\D{1,}$/;
    //V     deverá ser 2 caracteres especiais
    var v = /^[^a-zA-Z0-9]{2}$/;
    //T qualquer caracter exceto 'a','b','0' e '1' (pelo menos 1)
    var t = /^[^(a|b|0|1)]{1,}$/  
    //^(?=.[0-9]{2,})  (?=.[a-z]{2,})  (?=.[A-Z])  (?=.[@#$%^&+=])  (?=\S+$)  .{8,}$/
    //"^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,}$"
    //var padraoL = /^(?=.\w{5,}(\.|\-|\_))$/;
    console.log(typeof(x));

    //testar até o z:   adbde-&ab.aeiou.abcde0
    var padraoL = /^(\w|\.|\-|\_){5,}\&([a-pA-P]){1,}\.(a|e|i|o|u){1,}(\.(([a-zA-Z]{1,})|([0-5]{0,})|([a-zA-Z0-5]{1,}))?)\-(\D{1,})\,([^a-zA-Z0-9]{2})\.([^(a|b|0|1)]{1,})$/;

    if (padraoL.test(textoL))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}