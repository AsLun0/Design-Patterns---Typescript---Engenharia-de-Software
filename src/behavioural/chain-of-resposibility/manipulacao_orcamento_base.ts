import { OrcamentoCliente } from "./orcamento_cliente";

export abstract class ManipulacaoOrcamentoBase{
    protected proxManipulacao: ManipulacaoOrcamentoBase | null = null;

    setProxManipulacao(manipular: ManipulacaoOrcamentoBase): ManipulacaoOrcamentoBase{
        this.proxManipulacao = manipular;
        return manipular;
    }

    manipular(orcamento: OrcamentoCliente): OrcamentoCliente{
        if(this.proxManipulacao) return this.proxManipulacao.manipular(orcamento);
        return orcamento;
    }
}