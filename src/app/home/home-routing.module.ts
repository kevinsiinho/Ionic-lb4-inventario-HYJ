import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'lista-facturas',
    loadChildren: () => import('./lista-facturas/lista-facturas.module').then( m => m.ListaFacturasPageModule)
  },
  {
    path: 'registrar-factura',
    loadChildren: () => import('./registrar-factura/registrar-factura.module').then( m => m.RegistrarFacturaPageModule)
  },
  {
    path: 'registrar-categoria',
    loadChildren: () => import('./registrar-categoria/registrar-categoria.module').then( m => m.RegistrarCategoriaPageModule)
  },
  {
    path: 'registrar-producto',
    loadChildren: () => import('./registrar-producto/registrar-producto.module').then( m => m.RegistrarProductoPageModule)
  },
  {
    path: 'editar/:id',
    loadChildren: () => import('./editar/editar.module').then( m => m.EditarPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
