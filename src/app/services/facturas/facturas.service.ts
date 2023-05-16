import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Factura } from 'src/app/clases/factura/factura';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {
  public uri = environment.uri
  public factura= new Factura()
  public facturas:Factura[]=[]
  constructor() { }

 facturasAll = async () => {
    const { value } = await Preferences.get({ key: 'token' });
    const option = {
      url:this.uri+'/facturas',
      headers: { 'X-Fake-Header': 'Fake-Value',
      "Authorization": 'Bearer ' + value
    }
    };
    const res: HttpResponse = await CapacitorHttp.get(option);
    res.data.forEach((res:any)=> {
      this.factura = new Factura();
      this.factura.setValores(res)
      this.facturas.push(this.factura)
    });
    return this.facturas
  };

  facturaOne = async(id:String)=>{
    const { value } = await Preferences.get({ key: 'token' });
    const options = {
      url: this.uri+'/facturas/'+id,
      headers: { "Content-Type": "application/json",
      "Authorization": 'Bearer ' + value
    }
    };

  const res: HttpResponse = await CapacitorHttp.get(options);
        return res.data
  }

Crearfactura = async (nueva:Factura) =>{
  const { value } = await Preferences.get({ key: 'token' });
      const options = {
        url: this.uri+'/facturas',
        data: nueva,
        headers: { "Content-Type": "application/json",
        "Authorization": 'Bearer ' + value
      }
        };
      const res: HttpResponse = await CapacitorHttp.post(options);
            return res.data
     };




 Actualizarfacturas = async (modificar:Factura) =>{
  const { value } = await Preferences.get({ key: 'token' });
      const options = {
        url: this.uri+'/facturas/'+modificar.id,
        data:modificar,
        headers: { "Content-Type": "application/json",
        "Authorization": 'Bearer ' + value
      }
        };
      const res: HttpResponse = await CapacitorHttp.put(options);
      return res.data
     };
  }
