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
  // produto: ProdutoModel = new ProdutoModel();
  // categoria: CategoriaModel = new CategoriaModel();
  // categorias: Array<CategoriaModel> = new Array<CategoriaModel>();
  // produtos: ProdutoModel = new ProdutoModel();

  produto: ProdutoModel;
  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(
    private categoriaSrv: CategoriaProvider,
    private produtoSrv: ProdutoProvider,
    private router: ActivatedRoute,
    private _router: Router,
  ) { }

  async loadData(): Promise<void> {
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
    // pega os dados do produto vindos da rota
    // this.router.params.subscribe((_produto?: ProdutoModel) => {
    //   this.produto = _produto as ProdutoModel;
    //   console.log("produto ngOnInit", this.produto);
    //   console.log(_produto);

    // console.log("categoria ID", this.produto.categoriaId);

    // });


    this.router.params.subscribe((prod: ProdutoModel) => {
      if (prod && prod._id) {
        this.produto = prod as ProdutoModel;
        console.log('prod subs', this.produto);
      } else {
        this.produto = new ProdutoModel();
      }
    });
    this.loadData();
  }
}
