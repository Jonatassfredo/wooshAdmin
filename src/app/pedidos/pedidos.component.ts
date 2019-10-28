import { Component, OnInit } from '@angular/core';
import { HttpProvider } from "./../../providers/http/http";
import { ListaPedidosModel } from '../../app/models/ListaPedidosModel';
import { HttpResultModel } from "../../app/models/HttpResultModel";
import { ConfigHelper } from "../../app/helpers/configHelper";
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.scss']
})
export class PedidosComponent implements OnInit {

  lista: Array<ListaPedidosModel> = new Array<ListaPedidosModel>();

  constructor(public http: HttpProvider, private router: Router) { }

  ngOnInit() {
    this.GetAllPedidos();
  }

  // public GetAllPedidos() {
  //   let pedidos = this.http.get(`${ConfigHelper.Url}pedido/getAll`);
  //   console.log(pedidos);
  //   return pedidos;
  // }


  private async GetAllPedidos(): Promise<HttpResultModel> {
    try {
      let pedidosResult = await this.http.get(`${ConfigHelper.Url}pedido/getAll`);
      if (pedidosResult.success) {
        this.lista = <Array<ListaPedidosModel>>pedidosResult.data;
        console.log(pedidosResult);
        return pedidosResult;
      }
    } catch (error) {
      console.log('Problema ao carregar os pedidos, motivo: ', error);
    }
  }
  public contaItem(item: ListaPedidosModel): number {
    // console.log("parse", itensGeral);
    item.itensGeral = JSON.parse(item.itens);
    // console.log(item.itensGeral);
    return ListaPedidosModel.getTotalItens(item.itens);
  }

  sair() {
    localStorage.clear();
    this.router.navigateByUrl('login');
  }
}


