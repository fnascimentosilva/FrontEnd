function calcularImpostoRenda(salario){

    var impostoRenda = 0
    
    if(salario <= 1903.98){
        impostoRenda = impostoRenda
    }else if(salario >= 1903.99 && salario <= 2826.65){
        impostoRenda = (salario * 0.075)-142.8
    }else if(salario >= 2826.66 && salario <= 3751.05){
        impostoRenda = (salario * 0.15)-354.8
    }else if(salario >= 3751.06 && salario <= 4664.68){
        impostoRenda = (salario * 0.225)-636.13
    }else{
        impostoRenda = (salario * 0.275)-869.36
    }263.87
    
    return impostoRenda
    }
    
    function calcularInss(salario){
    var inss = 0
    
    if(salario <= 1302){
        inss = salario * 0.075
    }else if(salario >= 1302.01 && salario <= 2571.29){
        inss = salario * 0.09
    }else if(salario >= 2571.30 && salario <= 3856.94){
        inss = salario * 0.12
    }else{
        inss = salario * 0.14
    }
    return inss
    }
    
    function calcularSalarioLiquido(salario, irs, inss){
        
        var salarioLiquido = 0
        
        return salarioLiquido = salario - irs - inss
        
    }
    
    var salario = prompt("Insira o valor do salario a ser calculado: ")
    
    var impostoRenda = calcularImpostoRenda(salario)
    var inss = calcularInss(salario)
    var salarioLiquido = calcularSalarioLiquido(salario, impostoRenda, inss)
    
    console.log(salarioLiquido)