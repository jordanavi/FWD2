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

    var padraoB = /^\d{3}.\d{3}.\d{3}-\d{2})$/

    if (padraoB.test(textoB))
        alert("Dentro do padrão");
    else
        alert("Fora do pardão");
}

