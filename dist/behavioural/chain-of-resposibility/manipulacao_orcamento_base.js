"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManipulacaoOrcamentoBase = void 0;
class ManipulacaoOrcamentoBase {
    constructor() {
        this.proxManipulacao = null;
    }
    setProxManipulacao(manipular) {
        this.proxManipulacao = manipular;
        return manipular;
    }
    manipular(orcamento) {
        if (this.proxManipulacao)
            return this.proxManipulacao.manipular(orcamento);
        return orcamento;
    }
}
exports.ManipulacaoOrcamentoBase = ManipulacaoOrcamentoBase;
//# sourceMappingURL=manipulacao_orcamento_base.js.map