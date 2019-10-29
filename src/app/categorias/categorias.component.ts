import { Component, OnInit } from '@angular/core';
import { CategoriaModel } from "../../app/models/categoriaModel";
import { CategoriaProvider } from "../../providers/categoria/categoria";
import { Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  lista: Array<CategoriaModel> = new Array<CategoriaModel>();

  constructor(private categoriaSrv: CategoriaProvider, private router: Router) {
    this._loadData();
  }

  private async _loadData(): Promise<void> {
    let categoriaResult = await this.categoriaSrv.get();
    if (categoriaResult.success) {
      this.lista = <Array<CategoriaModel>>categoriaResult.data;
    }
  }

  addOrEdit(model?: CategoriaModel): void {
    // this.router.navigateByUrl('login', { categoria: model });
  }

  add() {
    this.router.navigateByUrl('categoria/categoriaModel');
  }

  ngOnInit() {
  }

}
