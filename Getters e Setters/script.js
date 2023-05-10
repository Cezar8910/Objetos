function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //Mostra a chave
        configurable: true, //A chave é configurável?
        get : function() {
            return estoquePrivado;
        },
        set: function(valor){
            estoquePrivado = valor;
            if (typeof valor !== 'number') {
                throw new TypeError('Mensagem');
            }
        }
    });
}
const p1 = new Produto('Camiseta', 20, 3);
p1.estoque = '50';
console.log(p1.estoque);