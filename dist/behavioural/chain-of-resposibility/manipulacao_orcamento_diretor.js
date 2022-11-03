"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManipulacaoOrcamentoDiretor = void 0;
const manipulacao_orcamento_base_1 = require("./manipulacao_orcamento_base");
class ManipulacaoOrcamentoDiretor extends manipulacao_orcamento_base_1.ManipulacaoOrcamentoBase {
    manipular(orcamento) {
        if (orcamento.total <= 50000) {
            console.log('O DIRETOR manipulou o orçamento');
            orcamento.aprovado = true;
            return orcamento;
        }
        return super.manipular(orcamento);
    }
}
exports.ManipulacaoOrcamentoDiretor = ManipulacaoOrcamentoDiretor;
//# sourceMappingURL=manipulacao_orcamento_diretor.js.map