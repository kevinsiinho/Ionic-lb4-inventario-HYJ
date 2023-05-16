import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarCategoriaPageRoutingModule } from './registrar-categoria-routing.module';

import { RegistrarCategoriaPage } from './registrar-categoria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarCategoriaPageRoutingModule
  ],
  declarations: [RegistrarCategoriaPage]
})
export class RegistrarCategoriaPageModule {}
