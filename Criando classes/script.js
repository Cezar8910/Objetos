class Pessoa {
constructor(nome, sobrenome){ //Para colocar os parâmetros
this.nome = nome;
this.sobrenome = sobrenome;
}

falar(){
console.log(`${this.nome} está falando`)
}

comer(){
    console.log(`${this.nome} está comendo`)
}

beber(){
    console.log(`${this.nome} está bebendo`)
}
}

const p1 = new Pessoa('Cezar', 'Galvão');
p1.falar();