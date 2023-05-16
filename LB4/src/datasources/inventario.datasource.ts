import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'inventario',
  connector: 'mongodb',
  url: 'mongodb://root@localhost:27017/inventario',
  host: 'localhost',
  port: 27017,
  user: 'root',
  password: '',
  database: 'inventario',
  useNewUrlParser: false
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class InventarioDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'inventario';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.inventario', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
