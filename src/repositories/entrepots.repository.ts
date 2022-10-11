import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {VehiculeDataSource} from '../datasources';
import {Entrepots, EntrepotsRelations} from '../models';

export class EntrepotsRepository extends DefaultCrudRepository<
  Entrepots,
  typeof Entrepots.prototype.id,
  EntrepotsRelations
> {
  constructor(
    @inject('datasources.vehicule') dataSource: VehiculeDataSource,
  ) {
    super(Entrepots, dataSource);
  }
}
