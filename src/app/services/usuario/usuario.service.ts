import { Injectable } from '@angular/core';
import { CapacitorHttp, HttpResponse } from '@capacitor/core';
import { Usuario } from 'src/app/clases/usuario/usuario';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  public uri = environment.uri
  public usuario= new Usuario()
  constructor() { }


OnRegistrar = async (usuario:Usuario)=>{
  const options = {
    url: this.uri+'/signup',
    headers: { "Content-Type": "application/json" },
    data: usuario
    };
  const response: HttpResponse = await CapacitorHttp.post(options);
  return response.status
};


OnLogin = async(email:string,password:string)=>{
  const options = {
    url: this.uri+'/users/login/',
    headers: { "Content-Type": "application/json" },
    data: {email:email,password:password}
  };

const response: HttpResponse = await CapacitorHttp.post(options);
 return response
}

OnQuien = async(token:string)=>{
  const options = {
    url: this.uri+'/whoAmI',
    headers: { "Content-Type": "application/json",
                "Authorization": 'Bearer ' + token
             }
  };

const response: HttpResponse = await CapacitorHttp.get(options);
     return response
}

}

