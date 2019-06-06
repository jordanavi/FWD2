function entrar() {

    var login = document.getElementById("login").value;
    var senha1 = document.getElementById("senha").value;
    var confimaSenha = document.getElementById("confSenha").value;

    if (login == '') { //Verifica se o Login foi digitado corretamente, ou seja, se o valor deste campo é diferente de vazio
        alert("Campo de login vazio. Por favor, preencha os campos corretamente.");
        return false;
    }
    else if (senha1 == '') { //Verifica se a senha foi digitada corretamente, ou seja, se o valor deste campo é diferente de vazio
        alert("Campo de senha vazio. Por favor, preencha os campos corretamente.");
        return false;
    }
    else if (confimaSenha == '') { //Verifica se a confirmacao da senha foi digitada corretamente, ou seja, se o valor deste campo é diferente de vazio
        alert("Campo de confirmação de senha vazio. Por favor, preencha os campos corretamente.");
        return false;
    }
    else if (senha1 != confimaSenha) { //verifica se as senhas são diferentes
        alert("As senhas são diferentes. Por favor digite novamente.");
        return false;
    }
    else if (senha1.length > 8) { //verifica o tamanho das senhas
        alert("A senha deve conter no máximo 8 caracteres.");
        return false;
    }
    else {//sucesso
        alert("Login efetuado com sucesso!");
        limpar();
        return true;
    }
}

function limpar() {
    document.getElementById("login").value= ""
;    document.getElementById("senha").value = "";
    document.getElementById("confSenha").value = "";
}