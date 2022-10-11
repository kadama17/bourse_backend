import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {VehiculeDataSource} from '../datasources';
import {Entreposage, EntreposageRelations} from '../models';

export class EntreposageRepository extends DefaultCrudRepository<
  Entreposage,
  typeof Entreposage.prototype.id,
  EntreposageRelations
> {
  constructor(
    @inject('datasources.vehicule') dataSource: VehiculeDataSource,
  ) {
    super(Entreposage, dataSource);
  }
}
