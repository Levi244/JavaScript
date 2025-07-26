function verificarIdade(idade) {
    if (idade >= 18) {
        console.log("Maior de idade");
        return;
    } 
    else if (idade >0 ){
        console.log ("Menor de idade");
        return
    };
    console.log("Idade inválida.")
};

verificarIdade(21);


