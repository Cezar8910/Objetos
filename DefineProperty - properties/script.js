//defineProperty(Apenas uma chave) - definePorperties(Várias chaves)
function Produto(nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    this.estoque = estoque;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        value: estoque, //Valor
        writable: true,  //O valor pode ser alterado?
        configurable: false //A chave é configurável?
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //Mostra a chave
            value: nome, //Valor
            writable: true,  //O valor pode ser alterado?
            configurable: true //A chave é configurável?
        },
        preco: {
            enumerable: true, //Mostra a chave
            value: preco, //Valor
            writable: true,  //O valor pode ser alterado?
            configurable: false //A chave é configurável?
        },
    });

}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = 50000;  //Pode ser modificado, pois "writable" está como true
delete p1.estoque; //Não pode ser deletado, pois "configurble" está como false
console.log(p1);

for(let chave in p1){
    console.log(chave);
}