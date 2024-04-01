/*Considere as seguintes informações:

A empresa cobra uma taxa fixa de R$0,50 por quilo do produto.

Além disso, a empresa cobra uma taxa adicional de R$0,10 por quilômetro da distância percorrida.

O custo total do frete é a soma do custo do peso com o custo da distância.*/

var peso = prompt("Digite o peso do produto: ")
var distancia = prompt("Insira a distancia a ser percorrida")

var custoPeso = 0.5 * peso
var custoDistancia = 0.1 * distancia

var valorFrete = custoPeso + custoDistancia

console.log("O valor do frete é: " + valorFrete + " R$")