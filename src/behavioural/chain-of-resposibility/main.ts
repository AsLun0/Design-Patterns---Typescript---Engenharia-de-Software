import { OrcamentoCliente } from "./orcamento_cliente";
import { ManipulacaoOrcamentoVendedor } from "./manipulacao_orcamento_vendedor";
import { ManipulacaoOrcamentoGerente } from "./manipulacao_orcamento_gerente";
import { ManipulacaoOrcamentoDiretor } from "./manipulacao_orcamento_diretor";
import { ManipulacaoOrcamentoCEO } from "./manipulacao_orcamento_ceo";

const orcamentoCliente = new OrcamentoCliente(1000000);

const vendedor = new ManipulacaoOrcamentoVendedor();
vendedor
.setProxManipulacao(new ManipulacaoOrcamentoGerente())
.setProxManipulacao(new ManipulacaoOrcamentoDiretor())
.setProxManipulacao(new ManipulacaoOrcamentoCEO());

vendedor.manipular(orcamentoCliente);
console.log(orcamentoCliente)