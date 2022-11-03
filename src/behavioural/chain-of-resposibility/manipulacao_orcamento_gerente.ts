import { ManipulacaoOrcamentoBase } from "./manipulacao_orcamento_base";
import { OrcamentoCliente } from "./orcamento_cliente";

export class ManipulacaoOrcamentoGerente extends ManipulacaoOrcamentoBase{
    manipular(orcamento: OrcamentoCliente): OrcamentoCliente{

        if(orcamento.total <= 5000){
            console.log('O GERENTE manipulou o orçamento');
            orcamento.aprovado = true;
            return orcamento;
        }
        return super.manipular(orcamento)
    }
}