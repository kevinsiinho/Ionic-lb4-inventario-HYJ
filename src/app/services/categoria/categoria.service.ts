import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Preferences } from '@capacitor/preferences';
import { Categoria } from 'src/app/clases/categoria/categoria';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  public uri = environment.uri
  public categoria= new Categoria()
  public categorias:Categoria[]=[]
  constructor() { }



Categorias = async () => {
  const { value } = await Preferences.get({ key: 'token' });

  const option = {
    url: this.uri+'/categorias',
    headers: { "Content-Type": "application/json",
    "Authorization": 'Bearer ' + value
  }
  };
const res: HttpResponse = await CapacitorHttp.get(option);
this.categorias=[]
      res.data.forEach((res:any)=> {
        this.categoria=new Categoria();
        this.categoria.setvalores(res.id,res.nombre )
        this.categorias.push(this.categoria)
      });
      return this.categorias
}


CrearCategoria = async (categoria:Categoria) => {
 const { value } = await Preferences.get({ key: 'token' });
  const option = {
    url: this.uri+'/categorias',
    data: categoria,
    headers: { "Content-Type": "application/json",
    "Authorization": 'Bearer ' + value
  }
    };
  const res: HttpResponse = await CapacitorHttp.post(option);
  return res.data
}
}
