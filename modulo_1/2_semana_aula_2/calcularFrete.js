var peso = prompt("Digite o peso do produto: ")
var distancia = prompt("Insira a distancia a ser percorrida")

var custoPeso = 0.5 * peso
var custoDistancia = 0.1 * distancia

var valorFrete = custoPeso + custoDistancia

console.log("O valor do frete é: " + valorFrete + " R$")