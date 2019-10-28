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
      console.log(this.lista);
    }
  }

  // addOrEdit(model?: ProdutoModel): void {
  //   // this.navCtrl.push("AdmProdutoPage", { _produto: model });
  //   this.router.navigate(['produto/:model', { _produto: model }]);
  // }

  addOrEdit(_id): void {
    // this.navCtrl.push("AdmProdutoPage", { _produto: model });
    this.router.navigate(['produto/:_produto', _id]);
  }

  ngOnInit() {
    this.isLoading = true;
    this._loadData();
  }

}
