let tempCelsius = Number(prompt("Digite a temperatura em Celsius: "))
let tempFahrenheit = (tempCelsius * 9/5) + 32
 
console.log("Temperatura em Fahrenheit: " + tempFahrenheit)
document.body.innerHTML += "<br>Temperatura em Fahrenheit: " + tempFahrenheit