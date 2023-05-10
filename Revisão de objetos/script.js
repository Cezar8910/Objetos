const pessoa = {
nome: 'Cezar',
sobrenome: 'Galvao',
idade: 19
};

pessoa.falarNome = function(){
    return `${this.nome} está falando o seu nome.`;
}
pessoa.getDataDeNascimento = function(){
    const dataAtual = new Date();
    return dataAtual.getFullYear() - this.idade;
}

//delete pessoa.nome
console.log(pessoa.falarNome());
console.log(pessoa.getDataDeNascimento());

/*
const pessoa = new Object();
pessoa.nome = 'Cezar';
pessoa.sobrenome = 'Galvão';
*/

//Factory functions
function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    }
};

const p1 = criaPessoa('Cezar', 'Galvão');
console.log(p1.nomeCompleto());

//Constructor function
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
const p2 = new Pessoa('Cezar', 'Galvao');
Object.freeze(p2); //Bloqueia o objeto, tornando-o inalterável
console.log(p2);
 