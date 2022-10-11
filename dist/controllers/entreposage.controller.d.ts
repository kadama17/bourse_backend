import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Entreposage } from '../models';
import { EntreposageRepository } from '../repositories';
export declare class EntreposageController {
    entreposageRepository: EntreposageRepository;
    constructor(entreposageRepository: EntreposageRepository);
    create(entreposage: Omit<Entreposage, 'id'>): Promise<Entreposage>;
    count(where?: Where<Entreposage>): Promise<Count>;
    find(filter?: Filter<Entreposage>): Promise<Entreposage[]>;
    updateAll(entreposage: Entreposage, where?: Where<Entreposage>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Entreposage>): Promise<Entreposage>;
    updateById(id: string, entreposage: Entreposage): Promise<void>;
    replaceById(id: string, entreposage: Entreposage): Promise<void>;
    deleteById(id: string): Promise<void>;
}
