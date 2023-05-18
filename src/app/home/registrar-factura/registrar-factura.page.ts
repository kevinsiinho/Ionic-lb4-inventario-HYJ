import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Preferences } from '@capacitor/preferences';
import { Factura } from 'src/app/clases/factura/factura';
import { Producto } from 'src/app/clases/producto/producto';
import { FacturasService } from 'src/app/services/facturas/facturas.service';
import { ProductoService } from 'src/app/services/producto/producto.service';
import { UsuarioService } from 'src/app/services/usuario/usuario.service';

@Component({
  selector: 'app-registrar-factura',
  templateUrl: './registrar-factura.page.html',
  styleUrls: ['./registrar-factura.page.scss'],
})
export class RegistrarFacturaPage implements OnInit {
  isModalOpen = false;
  public page?:any
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


  public productos:Producto[]=[];
  public factura=new Factura()
  public producto = new Producto()
  public id!:string
  public fecha= new Date()
  constructor(
    public productoService:ProductoService,
    public facturaService:FacturasService,
    public usuarioService:UsuarioService,
    private router:Router,
    ) { }

  ngOnInit() {
//trae todos los producto
    this.productoService.Productos().then((res:Producto[])=>{
      this.productos=res
    })
    this.Quien()
  }

  public alertButtons = ['OK'];
//obtiene el id del producto
  Onid(id:string){
    this.id=id
  }

  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }
//muestra los producto añadidos y luego agrega el producto a la lista
  carrito(){
    let t
    if(this.producto.cantidad>0){
    this.factura.subtotal=0
    this.productos.forEach(element => {
      if(element.id===this.id){
        element.cantidad=this.producto.cantidad
        this.factura.addproductos.push(element)
      }
    });
//calcula el valor subtotal de la lista es lo mismo para editar
    this.factura.addproductos.forEach(item=>{
      t=0
      t=item.cantidad*item.precio
      this.factura.subtotal=this.factura.subtotal+t
    })
    this.factura.iva=0.19*this.factura.subtotal
    this.factura.total=this.factura.iva+this.factura.subtotal
    this.producto.cantidad=0
    }else{alert("Revisa")}
  }
//aquí paga lo añadido y lo manda al servicio
pagar(){
  //crea  la fecha
  this.factura.fecha=""+this.fecha.getDate()+"/"+this.fecha.getMonth()+1+"/"+this.fecha.getFullYear()
  this.facturaService.Crearfactura(this.factura)
  this.router.navigate(['/home/lista-facturas'])

}

//esto quien es
 async Quien(){
    const { value } = await Preferences.get({ key: 'token' });
    if(value)
      this.usuarioService.OnQuien(value).then((data)=>{
        this.factura.vendedorId=data.data
       })

      this.router.navigate(['/home'])
    }

}

