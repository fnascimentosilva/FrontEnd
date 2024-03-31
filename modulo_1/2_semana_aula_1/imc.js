var peso = Number(prompt("Digite o seu peso: "))
var altura = Number(prompt("Digite a sua altura: "))

var imc = (peso/(altura*altura))

if(imc < 18.5){
  console.log("O seu IMC é " + imc+" e está abaixo do peso ideal")
}else if(imc >= 18.5 && imc <= 24.9){
  console.log("Peso idel")
}else if(imc >= 25 && imc <= 29.9){
  console.log("Voce está levemnete acima do peso")
}else if(imc >= 30 && imc <= 34.9){
  console.log("Voce está com obesidade grau I")
}else if(imc >= 35 && imc <= 39.9){
  console.log("Voce está com obesidade grau II")
}else if(imc >= 40){
  console.log("Voce vai morrer")
}else{
  console.log("Caso desconhecido")
}
