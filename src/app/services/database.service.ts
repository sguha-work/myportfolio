import { Injectable } from '@angular/core';

declare var firebase;
let config = {
  apiKey: "AIzaSyCFpQpoUM7eA94kJ4XQG-tG0Q1-lPSAk9E",
  authDomain: "myportfolio-41920.firebaseapp.com",
  databaseURL: "https://myportfolio-41920.firebaseio.com",
  projectId: "myportfolio-41920",
  storageBucket: "myportfolio-41920.appspot.com",
  messagingSenderId: "922861002581"
};
let firebaseapp = firebase.initializeApp(config);

//firebase.database()
@Injectable()
export class DatabaseService {
  private db: any;
  constructor() {
    this.db = firebaseapp.database(); console.log(this.db);
  }

  public set(key: string, userData: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.ref('/' + key).push(userData).then((data) => { // if non empty pushing data
        resolve(data);
      }).catch((error) => {
        reject(error);
      });
    });
  }

  public get(key: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.db.ref('/' + key).once('value').then((data) => {
        resolve(data.val());
      }).catch((error) => {
        reject(error);
      });
    });
  }
}