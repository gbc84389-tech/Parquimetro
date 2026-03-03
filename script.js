class CalcularTempo {
    constructor(valor) {
        this._valor = valor;
        this._tempo = 0;
        this._valorBase = 0;
    }

    verificarValor() {
        if(this._valor < 1) {
            return false;
        }
        else if (this._valor >=1 && this._valor < 1.75){
            this._tempo = 30;
            this._valorBase = 1;
        }
        else if (this._valor >=1.75 && this._valor < 3){
            this._tempo = 60;
            this._valorBase = 1.75;
        }
        else if (this._valor >= 3){
            this._tempo = 120;
            this._valorBase = 3;
        }
        return true;
    }

    calcularTroco() {
        return this._valor - this._valorBase;
    }

    obterResultado() {
        if(!this.verificarValor()) {
            return "valor insuficiente";
        }
        
        const troco = this.calcularTroco();

        document.getElementById("tempoFinal").textContent = `tempo : ${this._tempo} minutos / troco: R$ ${troco.toFixed(2)}`;

        return `tempo : ${this._tempo} minutos / troco: R$ ${troco.toFixed(2)}`;
    }
}

const botao = document.querySelector("button");

botao.addEventListener("click", () => {
    const valorInput = parseFloat(document.getElementById("valorInserido").value);

    const calculadora = new CalcularTempo(valorInput);

    const resultado = calculadora.obterResultado();

    console.log(resultado);
});