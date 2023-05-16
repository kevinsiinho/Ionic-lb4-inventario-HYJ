import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrarFacturaPageRoutingModule } from './registrar-factura-routing.module';

import { RegistrarFacturaPage } from './registrar-factura.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrarFacturaPageRoutingModule
  ],
  declarations: [RegistrarFacturaPage]
})
export class RegistrarFacturaPageModule {}
