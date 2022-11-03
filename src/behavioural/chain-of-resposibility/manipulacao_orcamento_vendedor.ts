import { ManipulacaoOrcamentoBase } from "./manipulacao_orcamento_base";
import { OrcamentoCliente } from "./orcamento_cliente";

export class ManipulacaoOrcamentoVendedor extends ManipulacaoOrcamentoBase{
    manipular(orcamento: OrcamentoCliente): OrcamentoCliente{

        if(orcamento.total <= 1000){
            console.log('O VENDEDOR manipulou o orçamento');
            orcamento.aprovado = true;
            return orcamento;
        }
        return super.manipular(orcamento)
    }
}