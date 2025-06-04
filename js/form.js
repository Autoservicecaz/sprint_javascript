// Classe contato
class contato {
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

// Função para processar o formulário
function Post(form) {
    let data = new contato(
        form.elements["nome"].value,
        form.elements["sobrenome"].value,
        form.elements["email"].value,
        form.elements["cpf"].value,
        form.elements["telefone"].value,
        form.elements["contato"].value
    );

    // Chamada para mensagem de confirmação
    Enviar(data.nome);

    // Se quiser, pode enviar os dados para o servidor ou salvar localStorage aqui
    console.log("Formulário enviado:", data);

    // Impede envio real do formulário (recarregamento da página)
    return false;
}

// Exibe mensagem de agradecimento
function Enviar(nome) {
    if (nome !== "") {
        alert('Obrigado sr(a) ' + nome + ', os seus dados foram encaminhados com sucesso');
    }
}
