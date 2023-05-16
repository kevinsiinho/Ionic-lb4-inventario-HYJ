import { Component, OnInit } from '@angular/core';
import { Factura } from 'src/app/clases/factura/factura';
import { FacturasService } from 'src/app/services/facturas/facturas.service';

@Component({
  selector: 'app-lista-facturas',
  templateUrl: './lista-facturas.page.html',
  styleUrls: ['./lista-facturas.page.scss'],
})
export class ListaFacturasPage implements OnInit {

  public listafacturas:Factura[]=[];
  constructor(
    public facturaService:FacturasService
    ) { }

  ngOnInit() {
    this.facturaService.facturasAll().then((res:Factura[])=>{
      this.listafacturas=res
      console.log(this.listafacturas)
    })
  }

}
