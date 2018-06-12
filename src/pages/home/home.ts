import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { StatusPage } from '../status/status';
import { ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  pedidos: any

  constructor(public http:HttpClient, public navCtrl: NavController, public toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    this.http.get('http://127.0.0.1:8000/api/pedido')
      .toPromise()
      .then((response) => {
        this.pedidos = response;
      },(err) => console.log(err));

  }

  detalhaPedido(){
  	// this.navCtrl.push(StatusPage)
  	// console.log("Detalhes do pedido aberto");
	  //  let toast = this.toastCtrl.create({
    //   message: 'Detalhes do pedido aberto',
    //   duration: 2000,
    //   position: 'top'

    // });
    // toast.present();
  }

}
