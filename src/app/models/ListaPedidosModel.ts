export class ListaPedidosModel {
  _id: string;
  dataPedido: string;
  valorTotal: number;
  itens: string;
  itensGeral: string;
  usuarioId: string;
  operadorId: string;
  status: string;
  observacoes: string;
  tempoEntrega: string;
  aceito: string;
  dataPedidoAceito: Date;
  formaPagamento: string;
  enderecoEntregaId: string;

  public static getTotalItens(itens: string): number {
    try {
      let _itens = JSON.parse(itens);
      return _itens.length;
    } catch (error) {
      return 0;
    }
  }
}
