import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Canciones } from "../canciones/canciones";
import { DeezerService } from "../../providers/deezer-service";
/**
 * Generated class for the Plalists page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-plalists',
  templateUrl: 'plalists.html',
   providers: [ DeezerService ]
})
export class Plalists {
  public user: any;
  public playList : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService) {
      this.user = this.navParams.get('user');
      this.playList = [];
  }

  goTocanciones(playLists)
  {
     this.navCtrl.push(Canciones, { playLists: playLists });
  }

  ionViewDidLoad() {
    this.ds.getUserPlayLists(this.user.id).subscribe( data => {
      this.playList = data.data;
      
    } )
  }

}
