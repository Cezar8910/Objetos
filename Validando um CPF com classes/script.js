// 705.484.450-52  070.987.720-03
class ValidaCpf{
    constructor(cpfEnviado){
        Object.defineProperty(this, 'cpfLimpo', {
            value: cpfEnviado.replace(/\D+/g, '')
        });
    }
    valida(){
        if(!this.cpfLimpo) return false;
        if(typeof this.cpfLimpo !== 'string') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.sequencia()) return false;
        this.geraCpf();
        return this.novoCpf == this.cpfLimpo;
    }
    sequencia(){
        return this.cpfLimpo[0].repeat(11) === this.cpfLimpo;
    }
    geraCpf(){
        const cpfSemDigitos = this.cpfLimpo.slice(0 , -2);
        const digito1 = this.geraDigito(cpfSemDigitos);
        const digito2 = this.geraDigito(cpfSemDigitos + digito1);
        this.novoCpf = cpfSemDigitos + digito1 + digito2;
    }
    geraDigito(cpfSemDigitos){
        let total = 0;
        let regressivo = cpfSemDigitos.length + 1;

        for(let stringNumerica of cpfSemDigitos){
            total += regressivo * Number(stringNumerica);
            regressivo--;
        }
        const digito = 11 - (total % 11);
        return digito >=9 ? '0' : String(digito);
    }
}

const validaCpf = new ValidaCpf('070.987.720-03')

if (validaCpf.valida()){
    console.log('CPF válido!')
} else {
    console.log('CPF inválido!')
}