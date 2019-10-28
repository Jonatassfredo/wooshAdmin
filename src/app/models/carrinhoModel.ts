import { CarrinhoItemModel } from "./CarrinhoItemModel";
import { EnderecoEntregaModel } from "./enderecoModel";

export class CarrinhoModel {
  datahora: Date;
  valorTotal: number = 0.0;
  enderecoEntregaId: string;
  enderecoEntrega: Array<EnderecoEntregaModel>;
  formaPagamento: string;
  itens: Array<CarrinhoItemModel>;

  constructor() {
    this.itens = new Array<CarrinhoItemModel>();
    this.enderecoEntrega = new Array<EnderecoEntregaModel>();
  }
}
