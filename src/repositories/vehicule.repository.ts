import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {VehiculeDataSource} from '../datasources';
import {Vehicule, VehiculeRelations} from '../models';

export class VehiculeRepository extends DefaultCrudRepository<
  Vehicule,
  typeof Vehicule.prototype.id,
  VehiculeRelations
> {
  constructor(@inject('datasources.vehicule') dataSource: VehiculeDataSource) {
    console.log(Vehicule);
    super(Vehicule, dataSource);
  }
}
