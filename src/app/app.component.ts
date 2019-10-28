import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ConfigHelper } from '../app/helpers/configHelper';

import * as firebase from "firebase";
const config = {
  apiKey: "AIzaSyDlsbsgr1kvkrZndhbRmfA6dMYpW8i1-HM",
  authDomain: "fir-chat-e7621.firebaseapp.com",
  databaseURL: "https://fir-chat-e7621.firebaseio.com",
  projectId: "fir-chat-e7621",
  storageBucket: "fir-chat-e7621.appspot.com",
  messagingSenderId: "543438022590",
  appId: "1:543438022590:web:990a639cbc269175"
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'adminPanel';

  constructor(private router: Router) {
    firebase.initializeApp(config);
  }

  ngOnInit(): void {
    if (localStorage.getItem(ConfigHelper.storageKeys.user) != null) {
      this.router.navigate(['home']);
    }
  }
}
