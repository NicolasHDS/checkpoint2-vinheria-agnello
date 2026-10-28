// Valida o texto
function lerTexto(mensagem) {
    let valor;
    do {
        valor = prompt(mensagem);
    } while (!valor || !valor.trim());
    return valor.trim();
}

// Valida o número
function lerNumero(mensagem) {
    let valor;
    do {
        valor = prompt(mensagem);
    } while (!valor || isNaN(valor) || valor < 0);
    return Number(valor);
}

// Estoque baixo = menos de 5
function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

// Classifica o vinho pela idade da safra
function classificarVinho(safra) {
    const idade = new Date().getFullYear() - safra;
    if (idade <= 2) {
        return "Jovem";
    } else if (idade <= 9) {
        return "Amadurecido";
    }
    return "Antigo";
}

// Mostra os dados no console e avisa por alert()
function mostrarDados(nome, safra, quantidade, classificacao) {
    const texto = nome + " | Safra: " + safra + " | Qtd: " + quantidade + " | " + classificacao;
    console.log(texto);
    alert(texto);
}

function iniciarCadastro() {
    let totalCadastros = 0;
    let totalEstoqueBaixo = 0;
    let nomeMaisAntigo = "";
    let safraMaisAntiga = 9999;
    let continuar;

    do {
        const nome = lerTexto("Nome do vinho:");
        const safra = lerNumero("Ano da safra:");
        const quantidade = lerNumero("Quantidade em estoque:");

        totalCadastros++;

        if (estoqueBaixo(quantidade)) {
            totalEstoqueBaixo++;
        }

        // Compara manualmente para achar a safra mais antiga
        if (safra < safraMaisAntiga) {
            safraMaisAntiga = safra;
            nomeMaisAntigo = nome;
        }

        mostrarDados(nome, safra, quantidade, classificarVinho(safra));

        continuar = lerTexto("Deseja cadastrar outro vinho? (s/n)");
    } while (continuar.toLowerCase() === "s");

    alert("Cadastros feitos: " + totalCadastros +
        "\nEstoque baixo: " + totalEstoqueBaixo +
        "\nSafra mais antiga: " + nomeMaisAntigo + " (" + safraMaisAntiga + ")");
}

iniciarCadastro();
