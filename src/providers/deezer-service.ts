import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';



/*
  Generated class for the DeezerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class DeezerService {
  public deezerAPI : string;
  constructor(public http: Http) {
    console.log('Hello DeezerService Provider');
    this.deezerAPI = "/deezerAPI/";
  }

  getUsers()
  {
     return   this.http.get('https://api.myjson.com/bins/mcjrb')
        .map( res => res.json() )
   
  }

  getUserDetail( userId )
  {
   return   this.http.get( this.deezerAPI + "user/" + userId )
      .map( res => res.json() )
   
  }

  getUserPlayLists(userId)
  {
     return   this.http.get( this.deezerAPI + "user/" + userId + "/playlists")
      .map( res => res.json() )
  }

  getPLayListsSong(playListId)
  {
    return   this.http.get( this.deezerAPI + "playlist/" + playListId + "/tracks")
      .map( res => res.json() )
  }

}
