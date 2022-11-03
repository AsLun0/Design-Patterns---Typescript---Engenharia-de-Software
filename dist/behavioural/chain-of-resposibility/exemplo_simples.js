"use strict";
class ObjetoDaCadeia {
    constructor() {
        this.proximo = null;
    }
    adcProximo(proximo) {
        this.proximo = proximo;
        return proximo; // realiza chamadas em cadeia em um objeto só
    }
    // a requisição pode ser tratada e passar para o próximo, se tiver próximo
    // ou retornar a requisição direto, caso não tenha próximo
    trata(requisição) {
        if (this.proximo)
            return this.proximo.trata(requisição);
        return requisição;
    }
}
class ObjA extends ObjetoDaCadeia {
    trata(requisição) {
        return super.trata(requisição + 'ObjA, ');
    }
}
class ObjB extends ObjetoDaCadeia {
    trata(requisição) {
        return super.trata(requisição + 'ObjB, ');
    }
}
const objetoA = new ObjA();
objetoA.adcProximo(new ObjB()).adcProximo(new ObjB()).adcProximo(new ObjA());
console.log(objetoA.trata('Inicial, ')); // Inicial, ObjA, ObjB, ObjB, ObjA
//# sourceMappingURL=exemplo_simples.js.map