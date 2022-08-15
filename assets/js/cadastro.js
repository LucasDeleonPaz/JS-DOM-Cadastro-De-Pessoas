class Pessoa {
    constructor(nome, sobrenome, nascimento, email, contato, telefone, cargo) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.nascimento = nascimento;
        this.email = email;
        this.contato = contato;
        this.telefone = telefone;
        this.cargo = cargo;
    }
    inputScreen(elem){
        return createList(elem)
    }
}
