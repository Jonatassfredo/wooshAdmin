import { OperadorProvider } from './../providers/operador/operador';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatToolbarModule,
  MatGridListModule
} from "@angular/material";
import { HttpClientModule } from "@angular/common/http";
import { LoginComponent } from "./login/login.component";
import { Routes, RouterModule } from "@angular/router";

//imports para internet, rodar no browser e http
import { HttpProvider } from "../providers/http/http";
import { NetworkProvider } from "../providers/network/network";
import { UsuarioProvider } from "../providers/usuario/usuario";
import { CategoriaProvider } from "../providers/categoria/categoria";
import { ProdutoProvider } from "../providers/produto/produto";
import { EnderecoEntregaProvider } from "../providers/endereco/endereco";
import { HomeComponent } from './home/home.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MensagensComponent } from './mensagens/mensagens.component';
import { ProdutosComponent } from './produtos/produtos.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ProdutoComponent } from './produto/produto.component';
import { NotFoundComponent } from './not-found/not-found.component';

// const appRoutes: Routes = [
//   { path: "login", component: LoginComponent },
//   { path: "home", component: HomeComponent },
//   { path: "pedidos", component: PedidosComponent },
//   { path: "mensagens", component: MensagensComponent },
//   { path: "produtos", component: ProdutosComponent },
//   { path: "produto/:model", component: ProdutoComponent },
//   { path: "categorias", component: CategoriasComponent },
//   { path: "clientes", component: ClientesComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
// ];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PedidosComponent,
    MensagensComponent,
    ProdutosComponent,
    CategoriasComponent,
    ClientesComponent,
    ProdutoComponent,
    NotFoundComponent],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatTableModule,
    MatToolbarModule,
    MatGridListModule,
    // RouterModule.forRoot(appRoutes),
  ],
  providers: [
    UsuarioProvider,
    HttpProvider,
    NetworkProvider,
    CategoriaProvider,
    ProdutoProvider,
    EnderecoEntregaProvider,
    OperadorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
