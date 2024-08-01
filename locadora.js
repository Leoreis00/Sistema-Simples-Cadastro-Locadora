// Importa a biblioteca readline-sync para ler entradas do usuário no console
const readline = require('readline-sync');

// Declara uma variável para a opção escolhida pelo usuário e inicializa com 0
let opcao = 0; // Inicializa com 0 para entrar no loop pela primeira vez

// Declara um array vazio para armazenar os nomes dos filmes
let filmes = []; // Array vazio para armazenar os nomes dos filmes

// Loop principal que continua até que a opção seja 4 (sair do sistema)
while (opcao !== 4) {
    // Exibe o menu principal no console
    console.log('****LOCADORA SOFTEX****');
    console.log('=== SISTEMA DE CADASTRO ===');
    console.log('1 - Cadastrar novo filme'); // Exibe a opção de cadastrar um novo filme
    console.log('2 - Listar filmes'); // Exibe a opção de listar todos os filmes cadastrados
    console.log('3 - Excluir um filme'); // Exibe a opção de excluir um filme da lista
    console.log('4 - Sair do sistema'); // Exibe a opção de sair do sistema

    // Lê a opção escolhida pelo usuário
    opcao = readline.questionInt('Escolha uma opcao: ');

    // Estrutura de controle switch para executar diferentes blocos de código com base na opção escolhida
    switch (opcao) {
        case 1:
            // Caso 1: Cadastrar novo filme
            console.log('=== CADASTRO DE NOVO FILME ==='); // Mensagem informativa
            // Lê o nome do filme digitado pelo usuário
            let nomeFilme = readline.question('Digite o nome do filme: ');
            // Adiciona o nome do filme ao array de filmes
            filmes.push(nomeFilme);
            // Usa template string para exibir mensagem de sucesso com o nome do filme cadastrado
            console.log(`Filme '${nomeFilme}' cadastrado com sucesso!`);
            break;
        case 2:
            // Caso 2: Listar filmes
            console.log('=== LISTA DE FILMES ==='); // Mensagem informativa
            // Verifica se há filmes cadastrados
            if (filmes.length === 0) { // Operador === verifica se os valores são iguais (comparação estrita)
                // Se não houver filmes, exibe mensagem informando
                console.log('Não há filmes cadastrados.');
            } else {
                // Se houver filmes, lista cada um deles com seu índice
                // forEach itera sobre cada elemento do array, executando uma função para cada elemento
                filmes.forEach((filme, index) => {
                    // Exibe o índice (index + 1) e o nome do filme
                    console.log(`${index + 1} - ${filme}`);
                });
            }
            break;
        case 3:
            // Caso 3: Excluir um filme
            console.log('=== EXCLUINDO UM FILME ==='); // Mensagem informativa
            // Verifica se há filmes cadastrados
            if (filmes.length === 0) { // Operador === verifica se os valores são iguais (comparação estrita)
                // Se não houver filmes, exibe mensagem informando
                console.log('Não há filmes cadastrados para excluir.');
            } else {
                // Se houver filmes, lista cada um deles com seu índice
                filmes.forEach((filme, index) => {
                    // Exibe o índice (index + 1) e o nome do filme
                    console.log(`${index + 1} - ${filme}`);
                });

                // Lê o número do filme a ser excluído
                let indiceExcluir = readline.questionInt('Digite o numero do filme a ser excluido: ');
                // Operadores relacionais < e > comparam dois valores e retornam true ou false
                // Verifica se o número digitado é válido
                if (indiceExcluir < 1 || indiceExcluir > filmes.length) { // Verifica se o número está dentro do intervalo válido
                    // Se o número for inválido, exibe mensagem de erro
                    console.log('Número inválido. Escolha outro numero.');
                } else {
                    // Se o número for válido, remove o filme do array
                    // splice remove elementos do array, o primeiro parâmetro é o índice e o segundo é a quantidade de elementos a serem removidos
                    let filmeExcluido = filmes.splice(indiceExcluir - 1, 1);
                    // Usa template string para exibir mensagem de sucesso com o nome do filme excluído
                    console.log(`Filme '${filmeExcluido}' excluído com sucesso.`);
                }
            }
            break;
        case 4:
            // Caso 4: Sair do sistema
            console.log('Saindo do sistema. Até mais!'); // Mensagem de despedida
            break;
        default:
            // Se o usuário digitar uma opção inválida, exibe mensagem de erro
            console.log('Opcao invalida. Escolha novamente.');
    }
}
