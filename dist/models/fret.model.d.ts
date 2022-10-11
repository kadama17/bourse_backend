import { Entity } from '@loopback/repository';
export declare class Fret extends Entity {
    id?: string;
    created?: string;
    modified?: string;
    particularite: string;
    type_vehicule: object;
    coords_depart: object;
    coords_dest: object;
    escaleData: object[];
    specificite: string;
    transactionsType: object;
    prix_fixe?: string;
    prix_propose?: number;
    prix_a_partir_de?: number;
    prix_a_debattre?: number;
    pas?: number;
    mise_en_jeu?: number;
    valeur?: number;
    seuil?: number;
    pays_depart: string;
    ville_depart: string;
    cp_depart: string;
    adresse_depart: string;
    pays_dest: string;
    ville_dest: string;
    cp_dest: string;
    adresse_dest: string;
    longueur: number;
    poids: number;
    autres?: string;
    surface: number;
    volume: number;
    nature_marchandise: string;
    [prop: string]: any;
    constructor(data?: Partial<Fret>);
}
export interface FretRelations {
}
export declare type FretWithRelations = Fret & FretRelations;
