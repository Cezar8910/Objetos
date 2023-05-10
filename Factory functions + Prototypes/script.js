const falar = {
    falar(){
        console.log(`${this.nome} está falando.`);
    }
}
const beber = {
    beber(){
        console.log(`${this.nome} está bebendo.`);

}
}
const comer = {
    comer(){
        console.log(`${this.nome} está comendo.`);
    }
}



function criaPessoa(nome, sobrenome){
    const pessoaPrototype = {... falar, ...beber, ...comer}; //Spread operator / Poder ser feito com Object.assign({}, falar, beber, comer)
        
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Cezar', 'Galvão');
console.log(p1.beber());