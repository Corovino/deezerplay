import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { Inicio } from '../pages/inicio/inicio';
import { Perfiles } from '../pages/perfiles/perfiles';
import { Contacto } from '../pages/contacto/contacto';
import { Acerca } from '../pages/acerca/acerca';

import { Plalists } from "../pages/plalists/plalists";
import { Canciones } from "../pages/canciones/canciones";

import { TecnoPlay } from "../components/tecno-play/tecno-play";



@NgModule({
  declarations: [
    MyApp,
    Inicio,
    Perfiles,
    Contacto,
    Acerca,

    Plalists,
    Canciones,
    TecnoPlay
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Inicio,
    Perfiles,
    Contacto,
    Acerca,
    Plalists,
    Canciones,
    TecnoPlay
  ],
  providers: [
    StatusBar, 
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
