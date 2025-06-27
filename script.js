async function buscaEndereco(cep) {
    var mensagemErro = document.getElementById("erro");
        mensagemErro.innerHTML = "";
    
    try {
    var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    var consultCepConvert = await consultaCep.json()
    if (consultCepConvert.erro) {
        throw Error ("CEP inválido")
    }

    var cidade = document.getElementById("cidade");
    var logradouro  = document.getElementById("endereco");
    var estado = document.getElementById("estado");
    var bairro = document.getElementById("bairro");

    cidade.value = consultCepConvert.localidade;
    logradouro.value = consultCepConvert.logradouro;
    estado.value = consultCepConvert.uf;
    bairro.value = consultCepConvert.bairro;

    console.log(consultCepConvert)
    return consultCepConvert;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP inválido. Tente novamente!</p>`
        console.log(erro)
    }
}
// .then(resposta => resposta.json())
// .then(r => {
//     if (r.erro) {
//         throw Error("CEP inválido")
//     } else
//     console.log(r)
// })
// .catch(erro => console.log(erro))
// .finally(mensagem => console.log("Processamento concluído!"));
// console.log(consultaCep);

// let ceps = ["01001000", "01001001"];
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// Promise.all(conjuntoCeps).then(respostas => console.log(respostas));

var cep = document.getElementById('cep');
cep.addEventListener("focusout", () => buscaEndereco(cep.value));