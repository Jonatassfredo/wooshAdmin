import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutoComponent } from './produto/produto.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "home", component: HomeComponent },
  { path: "pedidos", component: PedidosComponent },
  { path: "mensagens", component: MensagensComponent },
  { path: "produtos", component: ProdutosComponent },
  { path: "produto/:_produto", component: ProdutoComponent },
  { path: "categorias", component: CategoriasComponent },
  { path: "clientes", component: ClientesComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "**", component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
