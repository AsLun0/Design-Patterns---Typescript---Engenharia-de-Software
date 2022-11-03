import { ManipulacaoOrcamentoBase } from "./manipulacao_orcamento_base";
import { OrcamentoCliente } from "./orcamento_cliente";

export class ManipulacaoOrcamentoDiretor extends ManipulacaoOrcamentoBase{
    manipular(orcamento: OrcamentoCliente): OrcamentoCliente{

        if(orcamento.total <= 50000){
            console.log('O DIRETOR manipulou o orçamento');
            orcamento.aprovado = true;
            return orcamento;
        }
        return super.manipular(orcamento)
    }
}