import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrarCategoriaPage } from './registrar-categoria.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrarCategoriaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrarCategoriaPageRoutingModule {}
