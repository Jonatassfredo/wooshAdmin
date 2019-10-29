import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from '../models/categoriaModel';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaProvider } from 'src/providers/categoria/categoria';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss']
})
export class CategoriaComponent implements OnInit {

  categoria: CategoriaModel;

  constructor(private _router: Router, private router: ActivatedRoute, private categoriaSrv: CategoriaProvider, ) { }

  async salvar(): Promise<void> {
    let sucesso = false;
    if (!this.categoria._id) {
      let cadastroResult = await this.categoriaSrv.post(this.categoria);
      sucesso = cadastroResult.success;
    } else {
      let updateResult = await this.categoriaSrv.put(this.categoria._id, this.categoria);
      sucesso = updateResult.success;
    }
    if (sucesso) {
      this._router.navigate(['categorias']);
      console.log("categoria salva com sucesso");
    }
  }

  async excluir(): Promise<void> {
    let excluirResult = await this.categoriaSrv.delete(this.categoria._id);
    console.log(excluirResult);
  }

  ngOnInit() {
    this.router.params.subscribe((categ: CategoriaModel) => {
      if (categ) {
        this.categoria = categ as CategoriaModel;
      } else {
        this.categoria = new CategoriaModel();
      }
    });
  }
}
