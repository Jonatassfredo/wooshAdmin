import { Component, OnInit } from '@angular/core';
import { ProdutoModel } from "../../app/models/produtoModel";
import { ProdutoProvider } from "../../providers/produto/produto";
import { Router } from "@angular/router";

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  lista: Array<ProdutoModel> = new Array<ProdutoModel>();
  isLoading: boolean = true;

  constructor(private produtoSrv: ProdutoProvider, private router: Router) { }

  private async _loadData(): Promise<void> {
    let produtoResult = await this.produtoSrv.get();
    if (produtoResult.success) {
      this.isLoading = false;
      this.lista = <Array<ProdutoModel>>produtoResult.data;
      ProdutoProvider.produtos = this.lista;
      console.log(this.lista);
    }
  }

  add() {
    this.router.navigateByUrl('produto/produtoModel');
  }

  addOrEdit(model?: ProdutoModel): void {
    model.categoriaNome = model.categoriaId.titulo;
    // console.log('nome cat', model.categoriaNome);
    model.categoriaId = model.categoriaId._id;
    // console.log('id cat', model.categoriaId);
    // console.log('model', model);
    this.router.navigate(['produto/produtoModel', model]);
  }

  ngOnInit() {
    this.isLoading = true;
    this._loadData();
  }

}
