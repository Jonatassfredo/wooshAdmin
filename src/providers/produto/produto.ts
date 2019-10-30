import { Injectable } from "@angular/core";
import { ProviderBase } from "../../app/base/providerBase";
import { ProdutoModel } from "../../app/models/produtoModel";
import { ConfigHelper } from "../../app/helpers/configHelper";
import { HttpProvider } from "../http/http";
import { HttpResultModel } from "../../app/models/HttpResultModel";

@Injectable()
export class ProdutoProvider extends ProviderBase<ProdutoModel> {
  url: string = `${ConfigHelper.Url}produto`;
  static produtos: Array<ProdutoModel> = [];

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}produto`, http);
  }

  async produtosByCategoriaId(id: string): Promise<HttpResultModel> {
    return this.http.get(`${this.url}/categoria/${id}`);
  }
  async produtosById(id: string): Promise<HttpResultModel> {
    return this.http.get(`${this.url}/${id}`);
  }

  static GetProdutos(): Array {
    return ProdutoProvider.produtos;
  }

  static GetProduto(produtoId): ProdutoModel {
    let produtos = ProdutoProvider.GetProdutos();
    let produto = produtos.find(x => x._id === produtoId);

   return produto as ProdutoModel;
  }
}
