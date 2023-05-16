import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {InventarioDataSource} from '../datasources';
import {Categoria, CategoriaRelations} from '../models';

export class CategoriaRepository extends DefaultCrudRepository<
  Categoria,
  typeof Categoria.prototype.id,
  CategoriaRelations
> {
  constructor(
    @inject('datasources.inventario') dataSource: InventarioDataSource,
  ) {
    super(Categoria, dataSource);
  }
}
