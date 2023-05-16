import { Producto } from "../producto/producto"

export class Factura {
  public id!:string
  public vendedorId!:string
  public fecha!:string
  public iva!:number
  public subtotal!:number
  public total!:number
  public addproductos:Producto[]=[]
  setValores(items:any){
    this.id=items.id
    this.vendedorId=items.vendedorId
    this.fecha=items.fecha
    this.iva=items.iva
    this.subtotal=items.subtotal
    this.total=items.total
    this.addproductos=items.addproductos
  }
}
