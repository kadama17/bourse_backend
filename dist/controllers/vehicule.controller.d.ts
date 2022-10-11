import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Vehicule } from '../models';
import { VehiculeRepository } from '../repositories';
export declare class VehiculeController {
    vehiculeRepository: VehiculeRepository;
    constructor(vehiculeRepository: VehiculeRepository);
    create(vehicule: Omit<Vehicule, 'id'>): Promise<Vehicule>;
    count(where?: Where<Vehicule>): Promise<Count>;
    find(filter?: Filter<Vehicule>): Promise<Vehicule[]>;
    updateAll(vehicule: Vehicule, where?: Where<Vehicule>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Vehicule>): Promise<Vehicule>;
    updateById(id: string, vehicule: Vehicule): Promise<void>;
    replaceById(id: string, vehicule: Vehicule): Promise<void>;
    deleteById(id: string): Promise<void>;
}
