import { DefaultCrudRepository } from '@loopback/repository';
import { VehiculeDataSource } from '../datasources';
import { Fret, FretRelations } from '../models';
export declare class FretRepository extends DefaultCrudRepository<Fret, typeof Fret.prototype.id, FretRelations> {
    constructor(dataSource: VehiculeDataSource);
}
