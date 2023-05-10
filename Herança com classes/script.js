class Dispositivo {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome} já está ligado.`);
            return;
        }
        this.ligado = true;

    }
    desligar(){
        if(!this.ligado){
            console.log(`${this.nome} já está desligado.`);
            return;
        }
        this.ligado = false;
    }
}

class Celular extends Dispositivo {  //Criando uma classe e usando o "extends" que diz que a classe criada "Celular" vai herdar os atributos da classe pai "Dispositivo".
    constructor(nome, cor, modelo){
        super(nome); //Pegadno todos os atributos do construtor da "Super Class" -> Dispositivo

        this.cor = cor;
        this.modelo = modelo;
    }
};

class Tablet extends Dispositivo{
    constructor(nome, wifi){
        super(nome);
        this.wifi = wifi;
    }
}
const s1 = new Celular('Iphone', 'Preto', '14 pro');
s1.ligar();
s1.desligar();
s1.desligar();
console.log(s1);

const t1 = new Tablet('Ipad', '6');
t1.ligar();
console.log(t1);