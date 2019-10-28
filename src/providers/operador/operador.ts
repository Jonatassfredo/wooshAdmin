import { Injectable } from "@angular/core";
import { ProviderBase } from "../../app/base/providerBase";
import { OperadorModel } from "../../app/models/operadorModel";
import { HttpProvider } from "../http/http";
import { ConfigHelper } from "../../app/helpers/configHelper";
import { HttpResultModel } from "../../app/models/HttpResultModel";

@Injectable()
export class OperadorProvider extends ProviderBase<OperadorModel> {
  url: string = `${ConfigHelper.Url}operador`;
  static operador: OperadorModel;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}operador`, http);
  }

  async autenticate(nome: string, senha: string): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/autenticar`, {
      nome: nome,
      senha: senha
    });
  }

  async register(operador: OperadorModel): Promise<HttpResultModel> {
    return this.http.post(`${this.url}/register`, operador);
  }

  static RegisterLogin(result: any) {
    localStorage.setItem(ConfigHelper.storageKeys.token, result.token);
    localStorage.setItem(
      ConfigHelper.storageKeys.user,
      JSON.stringify(result.operador)
    );
  }

  static GetOperador(): OperadorModel {
    if (!OperadorProvider.operador) {
      OperadorProvider.operador = <OperadorModel>(
        JSON.parse(localStorage.getItem(ConfigHelper.storageKeys.user))
      );
    }
    return OperadorProvider.operador;
  }

  static get GetTokenAccess(): string {
    return localStorage.getItem(ConfigHelper.storageKeys.token);
  }

  static get IsLogado(): boolean {
    return localStorage.getItem(ConfigHelper.storageKeys.token) != undefined;
  }
}
