import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Factura } from 'src/app/clases/factura/factura';
import { Producto } from 'src/app/clases/producto/producto';
import { FacturasService } from 'src/app/services/facturas/facturas.service';
import { ProductoService } from 'src/app/services/producto/producto.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.page.html',
  styleUrls: ['./editar.page.scss'],
})
export class EditarPage implements OnInit {
  isModalOpen = false;
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  public page?:any
  public productos:Producto[]=[];
  public factura=new Factura()
  public producto = new Producto()
  public id!:string
  constructor(
    public productoService:ProductoService,
    public facturaService:FacturasService,
    private router:Router,
    private activerouter:ActivatedRoute,
    ) { }

  ngOnInit() {
    //obtiene el id de la ruta y lo guarda en la varible id
    this.id=this.activerouter.snapshot.paramMap.get('id')!
    //traer la información de la factura selecionada
    this.facturaService.facturaOne(this.id).then((res:Factura)=>{
      this.factura=res
    })
    this.productoService.Productos().then((res:Producto[])=>{
      this.productos=res
    })

  }

  public alertButtons = ['OK'];
//le manda el id solo por si hay algun error
  Onid(id:string){
    this.id=id
  }
//esto es de ionic
  async canDismiss(data?: any, role?: string) {
    return role !== 'gesture';
  }

//carrito añade todos los producto que son selecionado o añadidos
  carrito(){
    let t
    //comprueba que la cantidad ingresada sea mayor a sino muestra un mensaje
    if(this.producto.cantidad>0){
      //pone el subtotal de la factura en 0 siempre para que cada vez que se añada un nuevo producto el valor se sume y no se acumule
    this.factura.subtotal=0
    this.productos.forEach(element => {
      //recore los producto y seleciona el que no interesa
      if(element.id===this.id){
        element.cantidad=this.producto.cantidad
        //agrega el nuevo produtcto a la factura
        this.factura.addproductos.push(element)
      }
    });
//esto es para calcular el valor de la compra
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

//aqui paga y redireciona a la lista de facutas
pagar(){
  this.factura.vendedorId="1148954816"
  this.facturaService.Actualizarfacturas(this.factura)
  this.router.navigate(['/home/lista-facturas'])

}
//para eliminar un producto de la facutra en caso de error
eliminar(x:number){
  let t
  this.factura.addproductos.splice(x,1)
  this.factura.subtotal=0
  this.factura.addproductos.forEach(element => {
    t=0
    t=element.cantidad*element.precio
    this.factura.subtotal=this.factura.subtotal+t
  });
  this.factura.iva=0.19*this.factura.subtotal
  this.factura.total=this.factura.subtotal+this.factura.iva
 }


}
