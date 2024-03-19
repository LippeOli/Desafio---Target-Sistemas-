//O programa foi feito em JavaScript 

// Função para verificar se um número pertence à sequência de Fibonacci
function pertenceFibonacci(numero) {
    // Inicializa os dois primeiros números 
    let fib1 = 0;
    let fib2 = 1;
    
    // Caso o número seja 0 ou 1, ele pertence à sequência de Fibonacci
    if (numero === fib1 || numero === fib2) {
        return true;
    }
    
    // Enquanto o próximo número na sequência de Fibonacci for menor ou igual ao número informado
    while (fib2 <= numero) {
        // Se o próximo número for igual ao número informado, ele pertence à sequência de Fibonacci
        if (fib2 === numero) {
            return true;
        }
        
        // Calcula o próximo número na sequência 
        let proximo = fib1 + fib2;
        
        // Atualiza os valores dos dois últimos números na sequência 
        fib1 = fib2;
        fib2 = proximo;
    }
    
    // Se o número não foi encontrado na sequência de Fibonacci, retorna false
    return false;
}

// Entrada do número
let numeroInformado = prompt("Informe um número para verificar se pertence à sequência de Fibonacci:");

// Verifica se a entrada é um número válido
if (isNaN(numeroInformado)) {
    console.log("Por favor, insira um número válido.");
} else {
    numeroInformado = parseInt(numeroInformado);

    // Verifica se o número informado pertence à sequência de Fibonacci
    if (pertenceFibonacci(numeroInformado)) {
        console.log(numeroInformado + " pertence à sequência de Fibonacci.");
    } else {
        console.log(numeroInformado + " não pertence à sequência de Fibonacci.");
    }
}
