"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const orcamento_cliente_1 = require("./orcamento_cliente");
const manipulacao_orcamento_vendedor_1 = require("./manipulacao_orcamento_vendedor");
const manipulacao_orcamento_gerente_1 = require("./manipulacao_orcamento_gerente");
const manipulacao_orcamento_diretor_1 = require("./manipulacao_orcamento_diretor");
const manipulacao_orcamento_ceo_1 = require("./manipulacao_orcamento_ceo");
const orcamentoCliente = new orcamento_cliente_1.OrcamentoCliente(1000000);
const vendedor = new manipulacao_orcamento_vendedor_1.ManipulacaoOrcamentoVendedor();
vendedor
    .setProxManipulacao(new manipulacao_orcamento_gerente_1.ManipulacaoOrcamentoGerente())
    .setProxManipulacao(new manipulacao_orcamento_diretor_1.ManipulacaoOrcamentoDiretor())
    .setProxManipulacao(new manipulacao_orcamento_ceo_1.ManipulacaoOrcamentoCEO());
vendedor.manipular(orcamentoCliente);
console.log(orcamentoCliente);
//# sourceMappingURL=main.js.map