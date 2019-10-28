import { UsuarioModel } from './../models/usuarioModel';
import { UsuarioProvider } from 'src/providers/usuario/usuario';
import { OperadorProvider } from "../../providers/operador/operador";
import { OperadorModel } from "./../../app/models/operadorModel";
import { Component, OnInit } from '@angular/core';
import * as firebase from 'Firebase';

@Component({
  selector: 'app-mensagens',
  templateUrl: './mensagens.component.html',
  styleUrls: ['./mensagens.component.scss']
})
export class MensagensComponent implements OnInit {
  // @ViewChild(Content) content: Content;
  dataSala = { nome: "" };
  nicknameModel: UsuarioModel = new UsuarioModel();
  operadorModel: OperadorModel = new OperadorModel();
  ref = firebase.database().ref("chats/mensagens");
  dataNick = { nickname: "" };
  data = { type: "", nickname: "", mensagem: "" };
  chats = [];
  key: string;
  nickname: string = "";
  offStatus: boolean = false;
  salas = [];
  messageType = "userMessage";

  constructor() {
    this.nicknameModel = UsuarioProvider.GetUsuario();
    this.operadorModel = OperadorProvider.GetOperador();

    this.ref.on("value", resp => {
      this.chats = [];
      this.chats = snapshotToArray(resp);
      console.log(this.chats);
    });

    firebase
      .database()
      .ref("chats/mensagens")
      .on("value", resp => {
        this.chats = [];
        this.chats = snapshotToArray(resp);
      });
  }

  ngOnInit() { }

  enviarMensagem() {
    if (this.data.mensagem === "") {
      console.log("mensagen vazia");
      return;
    }
    let newData = firebase
      .database()
      .ref("chats/mensagens/" + this.nicknameModel._id)
      .push();
    newData.set({
      type: this.messageType,
      user: this.nicknameModel.nome,
      userID: this.nicknameModel._id,
      mensagem: this.data.mensagem,
      sendDate: Date()
    });
    this.data.mensagem = "";
  }
}

export const snapshotToArray = snapshot => {
  let returnArr = [];
  snapshot.forEach(childSnapshot => {
    let item = childSnapshot.val();
    item.key = childSnapshot.key;
    returnArr.push(item);
  });
  return returnArr;
};