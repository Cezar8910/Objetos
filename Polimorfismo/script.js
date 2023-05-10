function Conta(agencia, conta, saldo){
 this.agencia = agencia;
 this.conta = conta;
 this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
 if(this.saldo < valor){
    console.log(`Saldo insuficiente: ${this.saldo}`);
     return;
    } 
    this.saldo -= valor;
    this.verSaldo();
};

Conta.prototype.depositar = function(valor){
 this.saldo += valor;
 this.verSaldo();
};

Conta.prototype.verSaldo = function(){
    console.log(`Agência/Conta:${this.agencia}/${this.conta} | `+ `Saldo R$:${this.saldo.toFixed(2)}`);
};


function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function(valor) {
    if((this.saldo + this.limite) < valor){
       console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
       } 
       this.saldo -= valor;
       this.verSaldo();
   };

   
   function ContaPoupança(agencia, conta, saldo){
       Conta.call(this, agencia, conta, saldo);
    }
    ContaPoupança.prototype = Object.create(Conta.prototype);
    ContaPoupança.prototype.constructor = ContaPoupança
    
    ;
    
    const cc = new ContaCorrente(2346, 001, 0 ,100);
    cc.depositar(10);
    cc.sacar(110);

    console.log();

    const cp = new ContaPoupança(2568, 002, 0)
    cp.depositar(10); 
    cp.sacar(9);