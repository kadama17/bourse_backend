import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Entrepots } from '../models';
import { EntrepotsRepository } from '../repositories';
export declare class EntrepotController {
    entrepotRepository: EntrepotsRepository;
    constructor(entrepotRepository: EntrepotsRepository);
    create(entrepots: Entrepots): Promise<Entrepots>;
    count(where?: Where<Entrepots>): Promise<Count>;
    find(filter?: Filter<Entrepots>): Promise<Entrepots[]>;
    updateAll(entrepots: Entrepots, where?: Where<Entrepots>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Entrepots>): Promise<Entrepots>;
    updateById(id: string, entrepots: Entrepots): Promise<void>;
    replaceById(id: string, entrepots: Entrepots): Promise<void>;
    deleteById(id: string): Promise<void>;
}
