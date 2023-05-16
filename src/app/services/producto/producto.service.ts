import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Producto } from 'src/app/clases/producto/producto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  public uri = environment.uri
  public producto= new Producto()
  public productos:Producto[]=[]
  constructor() { }

Productos = async () => {
 const { value } = await Preferences.get({ key: 'token' });
  const option = {
    url: this.uri+'/productos',
    headers: { "Content-Type": "application/json",
    "Authorization": 'Bearer ' + value
  }
  };
const res: HttpResponse = await CapacitorHttp.get(option);
this.productos=[]
      res.data.forEach((res:any)=> {
        this.producto=new Producto();
        this.producto.setvalores(res.id,res.categoria,res.nombre,res.precio,res.cantidad)
        this.productos.push(this.producto)
      });
      return this.productos
}


CrearProducto = async (producto:Producto) => {
 const { value } = await Preferences.get({ key: 'token' });
  const option = {
    url: this.uri+'/productos',
    data: producto,
    headers: { "Content-Type": "application/json",
    "Authorization": 'Bearer ' + value
  }
    };
  const res: HttpResponse = await CapacitorHttp.post(option);
  return res.data
}
}
