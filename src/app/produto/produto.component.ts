import { Router } from '@angular/router';
import { ProdutoProvider } from './../../providers/produto/produto';
import { CategoriaProvider } from './../../providers/categoria/categoria';
import { CategoriaModel } from './../models/categoriaModel';
import { ProdutoModel } from './../models/produtoModel';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  produto: ProdutoModel;
  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();
  produtos: Array<ProdutoModel> = new Array<ProdutoModel>();

  constructor(
    private categoriaSrv: CategoriaProvider,
    private produtoSrv: ProdutoProvider,
    private router: ActivatedRoute
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

  ngOnInit() {
    // pega os dados do produto vindos da rota
    this.router.params.subscribe((objeto: any) => {
      let prod: ProdutoModel;
      prod = <ProdutoModel>objeto;
      this.produto = prod;
      console.log("produtos ngOnInit", this.produto);
      console.log("categoria ID", prod.categoriaId);
    });
  }
}
