import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {VehiculeDataSource} from '../datasources';
import {Fret, FretRelations} from '../models';

export class FretRepository extends DefaultCrudRepository<
  Fret,
  typeof Fret.prototype.id,
  FretRelations
> {
  constructor(@inject('datasources.vehicule') dataSource: VehiculeDataSource) {
    super(Fret, dataSource);
    (this.modelClass as any).observe('persist', async (ctx: any) => {
      ctx.data.modified = new Date();
    });
  }
}
