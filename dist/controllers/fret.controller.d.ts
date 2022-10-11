import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Fret } from '../models';
import { FretRepository } from '../repositories';
export declare class FretController {
    fretRepository: FretRepository;
    constructor(fretRepository: FretRepository);
    create(fret: Fret): Promise<Fret>;
    count(where?: Where<Fret>): Promise<Count>;
    find(filter?: Filter<Fret>): Promise<Fret[]>;
    updateAll(fret: Fret, where?: Where<Fret>): Promise<Count>;
    findById(id: string, filter?: FilterExcludingWhere<Fret>): Promise<Fret>;
    updateById(id: string, fret: Fret): Promise<void>;
    replaceById(id: string, fret: Fret): Promise<void>;
    deleteById(id: string): Promise<void>;
}
