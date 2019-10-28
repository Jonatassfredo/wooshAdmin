import { Injectable } from "@angular/core";
import { ProviderBase } from "../../app/base/providerBase";
import { EnderecoEntregaModel } from "../../app/models/enderecoModel";
import { ConfigHelper } from "../../app/helpers/configHelper";
import { HttpProvider } from "../http/http";

@Injectable()
export class EnderecoEntregaProvider extends ProviderBase<
  EnderecoEntregaModel
> {
  url: string = `${ConfigHelper.Url}enderecoEntrega`;

  constructor(public http: HttpProvider) {
    super(`${ConfigHelper.Url}enderecoEntrega`, http);
  }
}
