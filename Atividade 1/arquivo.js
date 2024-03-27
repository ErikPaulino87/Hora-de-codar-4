let estudantes = [];

function cadastrar_estudantes() {
    let nome = prompt("Digite o nome do estudante:");
    let idade = prompt("Digite a idade do estudante:");

    let estudante = {
        nome: nome,
        idade: idade,
    };

    estudantes.push(estudante);
}


function main() {
    while (true) {
        let entrada = prompt("Digite 'PARE' para encerrar ou qualquer outra coisa para continuar:");

        if (entrada.toUpperCase() === "PARE") {
            alert("Total de estudantes cadastrados: " + estudantes.length);

            console.log("Lista de estudantes:");
            estudantes.forEach(function (estudante) {
                console.log(estudante.nome + " - " + estudante.idade + " anos - ");
            });

            break;
        } else {
            cadastrar_estudantes();
        }
    }
}

main();