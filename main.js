// precisa casar com cpfs com ou sem pontuação (00000000000 ou 000.000.000-00)
// com que faz para receber entrada em javascript
// tentar ao maximo fazer por si mesmo sem pegar tanto código da internet e se olhar na internet tenta apreender ao maximo
// se não sabe pesquisa mas não deixa de fazer


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("Digite aqui o seu cpf: ", (cpf) => {
    console.log(`O CPF digitado foi: ${cpf}`);
    rl.close();
});


