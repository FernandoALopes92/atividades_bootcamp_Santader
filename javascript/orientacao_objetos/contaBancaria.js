class ContaBancaria {
    constructor(agencia, numero, tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    
    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if (valor > this._saldo){
            return 'Operação Negada';
        }
        this._saldo = this._saldo - valor;

        return this._saldo;
    }

    depositar(valor){
        this.saldo = this._saldo + valor;

        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor(agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this._cartaoCredito = valor        
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupanca';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitaria';
    }

    sacar(valor){
        if(valor > 500){
            return 'operação negada!';
        }
        this._saldo = this._saldo - valor;  
    }
}

const minhaConta = new ContaCorrente(1, 234, true); //Criação de conta
    console.log(minhaConta)
    
minhaConta.saldo; // Saldo
    console.log(minhaConta.saldo)

minhaConta.depositar(1000); //Depositar
    console.log(minhaConta.saldo);

minhaConta.sacar(300); // Sacar
    console.log(minhaConta.saldo);

minhaConta.saldo; // Saldo
    console.log(minhaConta.saldo) 

minhaConta.sacar(600); // sacar - validação caso não tenha saldo operação negada
    console.log(minhaConta.sacar(600));


const contaPoup = new ContaPoupanca(1, 22); // criação de conta Poupança
    console.log(contaPoup)
    contaPoup.depositar(5000);
    contaPoup.sacar(2320);
    console.log(contaPoup.saldo)

const contaUni = new ContaUniversitaria(1, 22); // criação de conta Universitária
    console.log(contaUni)
    contaUni.depositar(1000);
    console.log(contaUni.sacar(550));    // validação - não deixa sacar acima de 500
    console.log(contaUni.saldo); 