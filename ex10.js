let nomePessoa = prompt("Digite o nome da pessoa: ")
let idadePessoa = prompt("Digite a idade da pessoa: ")
let cidadePessoa = prompt("Digite a cidade da pessoa: ")
 
let pessoa = {
    nome: nomePessoa,
    idade: idadePessoa,
    cidade: cidadePessoa
}
 
console.log("Nome: " + pessoa.nome)
console.log("Idade: " + pessoa.idade)
console.log("Cidade: " + pessoa.cidade)
 
document.body.innerHTML += "<br>Nome: " + pessoa.nome
document.body.innerHTML += "<br>Idade: " + pessoa.idade
document.body.innerHTML += "<br>Cidade: " + pessoa.cidade