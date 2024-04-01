var nomeFuncionario = prompt("Nome do Funcionario: ")
var inicioFerias = prompt("Data de inicio de ferias: ")
var terminoFerias = prompt("Data de término de ferias: ")


var dataHoje = new Date()

var carta = `Caro(a) responsável,

Gostaria de solicitar minhas férias conforme as informações abaixo:

Nome do funcionário: ${nomeFuncionario}
Data de início: ${inicioFerias}
Data de término: ${terminoFerias}

Agradeço antecipadamente pela atenção e aguardo a confirmaçãodo meu pedido.

Atenciosamente,

${nomeFuncionario}

Data do pedido: ${dataHoje.toLocaleDateString()}`


console.log(carta)