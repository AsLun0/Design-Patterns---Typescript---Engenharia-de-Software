import { ManipulacaoOrcamentoBase } from "./manipulacao_orcamento_base";
import { OrcamentoCliente } from "./orcamento_cliente";

export class ManipulacaoOrcamentoCEO extends ManipulacaoOrcamentoBase{
    manipular(orcamento: OrcamentoCliente): OrcamentoCliente{
        console.log('O CEO manipula qualquer orçamento');
        orcamento.aprovado = true;
        return orcamento;
    }
}