//EXERCÍCIO A
function validarA() {
    var textoA = document.getElementById("txtInfoA").value;

    var padraoA = /^\d{2}\/\d{2}\/(\d{2}|\d{4})$/
    if (padraoA.test(textoA))
        alert("Dentro do padrão");
    else
        alert("Fora do pardão");
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
        alert("Fora do pardão");
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
        alert("Fora do pardão");
}

//EXERCÍCIO E
function validarE() {
    var textoE = document.getElementById("txtInfoE").value;

    //MT maiusculo e minusculo; dois dígitos; ponto; tres digitos; traço; iftm  
    var padraoE = /^MT-\d{2}.\d{3}-(IFTM|iftm)$/

    if (padraoE.test(textoE))
        alert("Dentro do padrão");
    else
        alert("Fora do pardão");
}

//EXERCÍCIO F
function validarF() {
    var textoF = document.getElementById("txtInfoF").value;

    //MT; dois dígitos; ponto; tres digitos; traço; iftm (maiúsculas e minúsculas)  
    //var padraoF = /^MT-\d{2}.\d{3}-IFTM$/i 

    //MT; dois dígitos; ponto; tres digitos; traço; iftm (maiúscolas e minúscolas) com espaço em branco entre M e T
    var padraoF = /^M\s{0,1}T-\d{2}.\d{3}-IFTM$/i

    //MT; dois dígitos; ponto; tres digitos; traço; iftm (maiúscolas e minúscolas) com espaço em branco MT e IFTM
    var padraoF = /^M\s{0,1}T-\d{2}.\d{3}-I\s{0,1}F\s{0,1}T\s{0,1}M$/i

    if (padraoF.test(textoF))
        alert("Dentro do padrão");
    else
        alert("Fora do pardão");
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
        alert("Fora do pardão");
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
        alert("Fora do pardão");
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
        alert("Fora do pardão");
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
    
    //um ou três dígitos no começo; ponto e três dígitos zero ou infinitas vezes; separados por ponto; vírgula e dois dígitoa no final
    //var padraoJ = /^R\$\d{1,3}(.\d{3})*,\d{2}$/;

    //um ou três dígitos no começo; ponto e três dígitos zero ou três vezes; separados por ponto; vírgula e dois dígitoa no final
    var padraoJ = /^R\$\d{1,3}(.\d{3}){0,3},\d{2}$/;

    if (padraoJ.test(textoJ))
        alert("Dentro do padrão");
    else
        alert("Fora do pardão");
}