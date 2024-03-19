//O programa foi feito em JavaScript 

// Função para inverter uma string
function inverterString(str) {
    let novaString = ''; // Inicializa uma string vazia para armazenar a string invertida

    // Itera sobre a string de trás para frente
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i]; // Adiciona o caractere atual à nova string
    }

    return novaString; // Retorna a string invertida
}

// Recebe a string via prompt
let minhaString = prompt("Digite uma string para inverter:");

// Inverte a string e imprime o resultado
console.log("String original:", minhaString);
console.log("String invertida:", inverterString(minhaString));
