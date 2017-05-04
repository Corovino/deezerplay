import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Plalists } from "../plalists/plalists";
import { DeezerService } from "../../providers/deezer-service";


/**
 * Generated class for the Perfiles page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-perfiles',
  templateUrl: 'perfiles.html',
  providers: [ DeezerService ]
})
export class Perfiles {
  public user : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public ds: DeezerService ) {
    this.user = [];
  }

  goToPlayLists( user )
  {
       this.navCtrl.push(Plalists, { user : user });
       
  }
  ionViewDidLoad() {
    
    this.ds.getUsers().subscribe( userId => {
      userId.map( userID =>{
        this.ds.getUserDetail(userID).subscribe( user => {
          this.user.push(user);
          console.log(user);
        });
      });
    });
  }

}
