import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { Categoria } from 'src/app/clases/categoria/categoria';
import { Producto } from 'src/app/clases/producto/producto';
import { CategoriaService } from 'src/app/services/categoria/categoria.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
@Component({
  selector: 'app-registrar-producto',
  templateUrl: './registrar-producto.page.html',
  styleUrls: ['./registrar-producto.page.scss'],
})
export class RegistrarProductoPage implements OnInit {
  public alertButtons = ['OK'];
  items:any = [];
  public categorias:Categoria[]=[];
  public producto= new Producto()
  public mensaje!:string
  constructor(
    public CategoriaService:CategoriaService,
    public ProductoService:ProductoService,
    private router:Router,
    ) { }

  ngOnInit() {
  //trae todos las categorias
  this.CategoriaService.Categorias().then((res:Categoria[])=>{
    this.categorias=res
  })

  }
//crea el producto y verifica que el formulario tenga todos los campos ingresado
crear(){
  if(this.producto.nombre!="" && this.producto.precio>0 && this.producto.categoria!=""){
    this.mensaje="Se guardó correctamente"
    console.log(this.producto)
    this.ProductoService.CrearProducto(this.producto).then()
    this.producto = new Producto ()
  }else{
    this.mensaje="Algo faltó"
  }

}

//envia el formulario al servicio
  onIonInfinite(ev:any) {
    this.CategoriaService.Categorias().then();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);

  }

}
