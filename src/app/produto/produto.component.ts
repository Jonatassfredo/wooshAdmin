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
  categoria: CategoriaModel;
  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();
  produtos: Array<ProdutoModel> = new Array<ProdutoModel>();

  constructor(
    private categoriaSrv: CategoriaProvider,
    private produtoSrv: ProdutoProvider,
    private router: ActivatedRoute,
    private _router: Router,
  ) {
    this.loadData();
  }

  async loadData(): Promise<void> {
    // Carrega todas as categorias
    try {
      let categoriasResult = await this.categoriaSrv.get();
      if (categoriasResult.success) {
        this.categorias = <Array<CategoriaModel>>categoriasResult.data;
        console.log('categorias carregadas', this.categorias);
      }
    }
    catch (error) {
      console.log("Erro ao carregar as categorias", error);
    }
  }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.produto._id) {
      let cadastroResult = await this.produtoSrv.post(this.produto);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.produtoSrv.put(
        this.produto._id,
        this.produto
      );
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this._router.navigate(['produtos']);
      console.log("produto salvo com sucesso");
    }
  }


  ngOnInit() {
    // pega os dados do produto vindos da rota
    this.router.params.subscribe((objeto: ProdutoModel) => {
      this.produto = <ProdutoModel>objeto;
      console.log("produto ngOnInit", this.produto);
      // console.log("categoria ID", this.produto.categoriaId);
    });
  }
}