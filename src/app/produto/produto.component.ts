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
  // produto: any;
  categorias: Array<CategoriaModel> = new Array<CategoriaModel>();
  _prod: any;
  produtos: Array<ProdutoModel> = new Array<ProdutoModel>();

  constructor(
    private categoriaSrv: CategoriaProvider,
    private produtoSrv: ProdutoProvider,
    private router: ActivatedRoute
  ) {

    this._prod = this.router.snapshot.paramMap.get('_id');
    console.log(this._prod);
    // if (this._prod) {
    // this.produto = <ProdutoModel>this._prod;
    // console.log('descricao', this._prod.descricao);
    // this.produto.categoriaId = this._prod.categoriaId._id;   
    // }


    // this._prod = this.router.snapshot.paramMap.get('_produto');
    // console.log(this._prod);


    // else this.produto = new ProdutoModel();

    this.loadData();
    // this.load();
  }

  async load(): Promise<void> {
    try {
      let produtosResult = await this.produtoSrv.produtosById(this._prod);
      if (produtosResult.success)
        this.produtos = <Array<ProdutoModel>>produtosResult.data;
      console.log(produtosResult.data);
    } catch (error) {
      console.log("problema ao carregar os produtos", error);
    }
  }

  async loadData(): Promise<void> {
    try {
      let categoriasResult = await this.categoriaSrv.get();
      if (categoriasResult.success) {
        this.categorias = <Array<CategoriaModel>>categoriasResult.data;
        console.log('carregando categorias dentro do produto', this.categorias);

      }
    } catch (error) {
      console.log("Erro ao carregar as categorias", error);
    }
  }

  ngOnInit() {


  }

}

// let _prod = this.router.snapshot.paramMap.get('_produto');
// if (_prod && _prod._id) {
//   this.produto = <ProdutoModel>_prod;
//   this.produto.categoriaId = _prod.categoriaId._id;
// } else this.produto = new ProdutoModel();

// let _prod = this.router.paramMap.pipe(
//   switchMap(params => {
//     this.produto = params.get('_produto');
//     return _prod


//     // this.loadData();
//   })
// );