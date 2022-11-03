"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManipulacaoOrcamentoCEO = void 0;
const manipulacao_orcamento_base_1 = require("./manipulacao_orcamento_base");
class ManipulacaoOrcamentoCEO extends manipulacao_orcamento_base_1.ManipulacaoOrcamentoBase {
    manipular(orcamento) {
        console.log('O CEO manipula qualquer orçamento');
        orcamento.aprovado = true;
        return orcamento;
    }
}
exports.ManipulacaoOrcamentoCEO = ManipulacaoOrcamentoCEO;
//# sourceMappingURL=manipulacao_orcamento_ceo.js.map