function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
};
Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
};

function Camiseta(nome, cor, preco){
    Produto.call(this, nome, preco); 
    this.cor = cor;
};
Camiseta.prototype = Object.create(Produto.prototype);
Camiseta.prototype.constructor = Camiseta;

const camiseta = new Camiseta('Regata', 'Preta', 50);
camiseta.aumento(10);
console.log(camiseta);

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const caneca = new Caneca('Marvel', 15, 'Porcelana');
caneca.desconto(2);
console.log(caneca);