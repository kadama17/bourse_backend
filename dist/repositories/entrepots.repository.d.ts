import { DefaultCrudRepository } from '@loopback/repository';
import { VehiculeDataSource } from '../datasources';
import { Entrepots, EntrepotsRelations } from '../models';
export declare class EntrepotsRepository extends DefaultCrudRepository<Entrepots, typeof Entrepots.prototype.id, EntrepotsRelations> {
    constructor(dataSource: VehiculeDataSource);
}
