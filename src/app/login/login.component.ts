import { OperadorProvider } from './../../providers/operador/operador';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  form: any = {};

  constructor(private operadorSrv: OperadorProvider, private router: Router) { }

  async login(): Promise<void> {
    let result = await this.operadorSrv.autenticate(
      this.form.nome,
      this.form.senha
    );
    if (result.success) {
      OperadorProvider.RegisterLogin(result.data);
      this.router.navigateByUrl('home');
    }
    console.log(result);
  }

  ngOnInit() {
  }
}
