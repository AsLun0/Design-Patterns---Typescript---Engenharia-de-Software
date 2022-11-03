"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManipulacaoOrcamentoGerente = void 0;
const manipulacao_orcamento_base_1 = require("./manipulacao_orcamento_base");
class ManipulacaoOrcamentoGerente extends manipulacao_orcamento_base_1.ManipulacaoOrcamentoBase {
    manipular(orcamento) {
        if (orcamento.total <= 5000) {
            console.log('O GERENTE manipulou o orçamento');
            orcamento.aprovado = true;
            return orcamento;
        }
        return super.manipular(orcamento);
    }
}
exports.ManipulacaoOrcamentoGerente = ManipulacaoOrcamentoGerente;
//# sourceMappingURL=manipulacao_orcamento_gerente.js.map