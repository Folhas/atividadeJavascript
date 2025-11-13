let idadeUsuario = Number(prompt("Digite sua idade: "));
 
if (idadeUsuario >= 18) {
    document.body.innerHTML = "Maior de idade";
} else {
    document.body.innerHTML = "Menor de idade";
}
 