let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let nota3 = Number(prompt("Digite a terceira nota: "))
 
let media = (nota1 + nota2 + nota3) / 3
 
console.log("Média: " + media)
document.body.innerHTML += "<br>Média: " + media
 
if (media > 6) {
    console.log("Aprovado")
    document.body.innerHTML += "<br>Aprovado"
} else if (media < 6) {
    console.log("Reprovado")
    document.body.innerHTML += "<br>Reprovado"
} else {
    console.log("Recuperação")
    document.body.innerHTML += "<br>Recuperação"
}