export class Producto {
  public id!:string
  public categoria!:string
  public nombre!:string
  public precio!:number
  public cantidad!:number
  setvalores(id:string,categoria:string,nombre:string,precio:number,cantidad:number){
    this.id=id
    this.categoria=categoria
    this.nombre=nombre
    this.precio=precio
    this.cantidad=cantidad
  }
}
