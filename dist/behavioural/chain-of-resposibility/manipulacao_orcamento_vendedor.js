"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ManipulacaoOrcamentoVendedor = void 0;
const manipulacao_orcamento_base_1 = require("./manipulacao_orcamento_base");
class ManipulacaoOrcamentoVendedor extends manipulacao_orcamento_base_1.ManipulacaoOrcamentoBase {
    manipular(orcamento) {
        if (orcamento.total <= 1000) {
            console.log('O VENDEDOR manipulou o orçamento');
            orcamento.aprovado = true;
            return orcamento;
        }
        return super.manipular(orcamento);
    }
}
exports.ManipulacaoOrcamentoVendedor = ManipulacaoOrcamentoVendedor;
//# sourceMappingURL=manipulacao_orcamento_vendedor.js.map