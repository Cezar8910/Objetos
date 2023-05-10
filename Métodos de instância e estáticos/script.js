class ControleRemoto{
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    }
    //Métodos de instância
    aumentarVolume(){
        this.volume += 3;
    }
    diminuirVolume(){
        this.volume -= 3;
    }
    //Método estático -> Método solitário.
    static trocaPilha(){
        console.log('Pilha trocada!')
    }
}

const controle1 = new ControleRemoto('LG'); //Instância
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
ControleRemoto.trocaPilha();
console.log(controle1);