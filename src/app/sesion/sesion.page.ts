import { Component, OnInit } from '@angular/core';
import { Usuario } from '../clases/usuario/usuario';
import { UsuarioService } from '../services/usuario/usuario.service';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.page.html',
  styleUrls: ['./sesion.page.scss'],
})
export class SesionPage implements OnInit {
    public alertButtons = ['OK'];
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  public mensaje!:string
  public mensaje2!:string
  public usuario = new Usuario()
  constructor(
    public usuarioService: UsuarioService,
    public router:Router
    ) { }

  ngOnInit() {
  }

 entrar(){
    if(this.usuario.email!="" && this.usuario.password!=""){
      this.usuarioService.OnLogin(this.usuario.email,this.usuario.password).then(async(data)=>{
        console.log(data.data)
        if(!data.data.token){
          this.mensaje2="Algó esta mal"
        }else{
          this.mensaje2="Usuario encontrado"
          await Preferences.set({
            key: 'token',
            value: data.data.token
          });
          this.Quien()
        }
      })
    }else{
      this.mensaje2="Algó esta mal"

  }
  }


 async Quien(){
    const { value } = await Preferences.get({ key: 'token' });
    if(value)
      this.usuarioService.OnQuien(value).then((data)=>{ })
      this.router.navigate(['/home'])
    }


    crearusuario(){
      if(this.usuario.username!="" && this.usuario.email!="" && this.usuario.password){

        this.mensaje="Se guardó correctamente"
        console.log(this.usuario)
        this.usuarioService.OnRegistrar(this.usuario)
        this.router.navigate(['/sesion'])
      }else{
        this.mensaje="Algó esta mal, verifica"
      }
    }



  }



