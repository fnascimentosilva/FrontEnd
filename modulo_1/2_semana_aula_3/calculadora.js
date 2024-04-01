var num1 = Number(prompt("Digite o Primeiro valor: "))
var num2 = Number(prompt("Digite o Segundo valor: "))

var op = prompt(`Escolha a operação:
1 - SOMA
2 - SUBTRAÇÃO
3 - MULTIPLICAÇÃO
4 - DIVISÃO
`)

switch(op){
    case "1": {
        var soma = num1+num2
        console.log(soma)
        break;
    }
    case "2": {
        var sub = num1-num2
        console.log(sub)
        break;
    }
    case "3": {
        var mult = num1*num2
        console.log(mult)
        break;
    }
    case "4": {
        var div = num1/num2
        console.log(div)
        break;
    }
    default:{
        console.log("Escolha inválida")
    }
}