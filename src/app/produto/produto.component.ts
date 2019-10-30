import { Router } from '@angular/router';
import { ProdutoProvider } from './../../providers/produto/produto';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { CategoriaModel } from './../models/categoriaModel';
import { ProdutoModel } from './../models/produtoModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produto: ProdutoModel;
  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(
    private categoriaSrv: CategoriaProvider,
    private produtoSrv: ProdutoProvider,
    private router: ActivatedRoute,
    private _router: Router,
  ) { }

  async loadData(): Promise<void> {
    //carrega produto vindo pela rota
    try {
      this.produto = ProdutoProvider.GetProduto(this.router.params.value.produtoId);
    } catch (error) {
      this.produto = new ProdutoModel();
    }

    // Carrega todas as categorias
    try {
      let categoriasResult = await this.categoriaSrv.get();
      if (categoriasResult.success) {
        this.categorias = <Array<CategoriaModel>>categoriasResult.data;
      }
    } catch (error) {
      console.log('Erro ao carregar as categorias', error);
    }
  }

  async excluir(): Promise<void> {
    let excluirResult = await this.produtoSrv.delete(this.produto._id);
    console.log(excluirResult);
    if (excluirResult.success) {
      this._router.navigate(['produtos']);
      console.log("produto excluído salvo com sucesso");
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.produto._id) {
      let cadastroResult = await this.produtoSrv.post(this.produto);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.produtoSrv.put(this.produto._id, this.produto);
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this._router.navigate(['produtos']);
      console.log("produto salvo com sucesso");
    }
  }

  ngOnInit() {
    this.loadData();
  }
}
