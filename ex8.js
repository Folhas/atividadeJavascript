let numero = Number(prompt("Digite um número para ver a tabuada: "))
 
console.log("Tabuada do " + numero)
document.body.innerHTML += "<br>Tabuada do " + numero + "<br>"
 
for (let i = 1; i <= 10; i++) {
    let resultado = numero * i
    console.log(numero + " x " + i + " = " + resultado)
    document.body.innerHTML += numero + " x " + i + " = " + resultado + "<br>"
}