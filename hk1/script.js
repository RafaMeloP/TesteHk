operacao = (n1, n2) => {
    const valor = {
        "soma": n1 + n2,
        "multiplicacao": n1 * n2,
        "subtracao": n1 - n2,
        "divisao": n1 / n2
    };
    return (console.log(valor));
}
getNome = (num) => {
    const funcionarios = {
        "funcionarios": ["Alan", "Joao", "vinicius", "rodrigo"]
    };
    return (console.log(funcionarios.funcionarios[num]));
}
setNome = (nomes) => {
    if (Array.isArray(nomes))
        return (
            nomes.map(nome => console.log(nome))
        );
    else return (console.log("Parâmetros inválidos"));
}
numNome = (nomes) => {
    if (Array.isArray(nomes)) {
        const nNomes = nomes.map((nome, index) => {
            return (nome + " - " + index)
        });
        return console.log(nNomes);
    }
    else return (console.log("Parâmetros inválidos"));
}
buscaCep = (cep) => {
    const url = "https://viacep.com.br/ws/" + cep + "/json/";

    fetch(url).then(item => item.json()).then(item => {
        if (item.erro) console.log("CEP NÃO ENCONTRADO");
        else console.log(item);
    }).catch(erro => console.log("CEP NÃO ENCONTRADO"));
}