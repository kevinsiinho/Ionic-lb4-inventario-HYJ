import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public router:Router) {}

async  cerrar(){
  //elimina el token
    await Preferences.remove({ key: 'token' });
    this.router.navigate(['/sesion'])
  }
  }
