import { Entity } from '@loopback/repository';
export declare class Entrepots extends Entity {
    id?: string;
    type_stockage: string[];
    type_marchandises: string[];
    services_annexes: string[];
    periodes?: object[];
    date_from?: string;
    type_annonce?: string;
    occasionnelle_debut?: string;
    occasionnelle_fin?: string;
    type_periode_occupation: string;
    titre_annonce: string;
    nom_entreprise: string;
    desc_annonces: string;
    nature_marchandise: string;
    poids: number;
    longueur: number;
    mot_cle: object[];
    surface: number;
    volume: number;
    transactions: string;
    adresse: string;
    email: string;
    fax: string;
    telephone: string;
    [prop: string]: any;
    constructor(data?: Partial<Entrepots>);
}
export interface EntrepotsRelations {
}
export declare type EntrepotsWithRelations = Entrepots & EntrepotsRelations;
