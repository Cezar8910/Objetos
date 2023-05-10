//Construtora -> molde(classe)
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome; 
}

Pessoa.prototype.metodoNovo = 'Novo método';
Pessoa.prototype.nomeCompleto = function() {
    return this.nome + ' ' + this.sobrenome; 
};

//instância
const pessoa1 = new Pessoa('Cezar', 'Galvão'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'Betânia'); // <- Pessoa = Função construtora

console.dir(pessoa1.nomeCompleto());
console.dir(pessoa2.metodoNovo);