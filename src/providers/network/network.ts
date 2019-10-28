// import { Platform } from "ionic-angular";
import { Injectable } from "@angular/core";

// declare var navigator: any;
// declare var Connection: any;

@Injectable()
export class NetworkProvider {
  constructor() {}

  get IsOnline(): boolean {
    return true;
  }
}
