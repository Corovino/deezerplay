import { Component, Input, OnInit } from '@angular/core';

/**
 * Generated class for the TecnoPlay component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'tecno-play',
  templateUrl: 'tecno-play.html'
})
export class TecnoPlay implements OnInit{
  
  @Input() titulo: string;  
  @Input() artista: string; 
  @Input() album:  string;  
  @Input() cover:  string;  
  @Input() audioSrc: string;
  
  public audio: any;
  public ready: boolean;
  public playing: boolean;

  constructor() {
    this.ready = false;
    this.playing = false;
  }

  ngOnInit()
  {
    this.audio = new Audio();
    this.audio.src = this.audioSrc;
    this.audio.load();    

    this.audio.oncanplaythrough = () => {
      this.ready = true;
    } 
  }

  togglePlay()
  {
      if(this.playing)
      
        this.audio.playing();
      else 
        this.audio.pause();        
      
      this.playing = !this.playing;
  }

}
