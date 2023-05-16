export class Usuario {
  public email!:string
  public password!:string
  public username!:string
  setdatos(item:any){
    this.username=item.username
    this.email=item.email
    this.password=item.password

  }
}
