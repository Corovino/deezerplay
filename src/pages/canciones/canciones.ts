import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeezerService } from "../../providers/deezer-service";

/**
 * Generated class for the Canciones page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-canciones',
  templateUrl: 'canciones.html',
  providers: [ DeezerService ]
})
export class Canciones {
  public playLists: any;
  public songs : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService ) {
      this.playLists =this.navParams.get('playLists');
      this.songs = [];
  }

  ionViewDidLoad() {
    this.ds.getPLayListsSong(this.playLists.id).subscribe( data => {
       this.songs = data.data;
       console.log(this.songs);
    })
  }

}
