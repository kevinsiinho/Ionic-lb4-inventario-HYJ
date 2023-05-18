import { Component, OnInit } from '@angular/core';
import { Categoria } from 'src/app/clases/categoria/categoria';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';

@Component({
  selector: 'app-registrar-categoria',
  templateUrl: './registrar-categoria.page.html',
  styleUrls: ['./registrar-categoria.page.scss'],
})
export class RegistrarCategoriaPage implements OnInit {
  public alertButtons = ['OK'];
  public categoria= new Categoria()
  public m:string=""
  constructor( public CategoriaService:CategoriaService) { }


  ngOnInit() {
  }
//crea una nueva categoria primero verifica que que si hallá escrito algo
  crear(){
    if(this.categoria.nombre!=""){
      this.CategoriaService.CrearCategoria(this.categoria).then()
      this.m="present-alert"
      alert("Guarado")
    }
  }
}
