function testar(){
    var textoA = document.getElementById("valor").value;


    //padrao = /^\d[a-zA-Z]{1,4}\d\s?\d$/   //1S2 4
    //padrao = /^(IFTM|IF|if|If|iF)$/   //1S2 4-IFTM

    //padrao = /^\d[a-zA-Z]{1,4}\d\s?\d-(IFTM|IF|if|If|iF)$/  //1S2 4-IFTM

    var padrao2 = /^$/

    if (padrao.test(textoA))
        alert("Dentro do padrão");
    else
        alert("Fora do padrão");
}
