import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

  aceitaPedido(){
  	this.navCtrl.push(StatusPage)
  	console.log("Pedido Aceito");
	   let toast = this.toastCtrl.create({
      message: 'Pedido Aceito',
      duration: 2000,
      position: 'top'

    });
    toast.present();
  }


    recusaPedido(){
  		this.navCtrl.push(StatusPage)
  		console.log("Pedido Recusado");
	   		let toast = this.toastCtrl.create({
      	message: 'Pedido Recusado',
      	duration: 2000,
      	position: 'top'

    	});
    	toast.present();
    }


}
