import { DefaultCrudRepository } from '@loopback/repository';
import { VehiculeDataSource } from '../datasources';
import { Entreposage, EntreposageRelations } from '../models';
export declare class EntreposageRepository extends DefaultCrudRepository<Entreposage, typeof Entreposage.prototype.id, EntreposageRelations> {
    constructor(dataSource: VehiculeDataSource);
}
