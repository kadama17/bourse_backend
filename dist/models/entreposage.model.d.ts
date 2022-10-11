import { Entity } from '@loopback/repository';
export declare class Entreposage extends Entity {
    id?: string;
    type_stockage: string[];
    type_marchandises: string[];
    services_annexes: string[];
    periodes?: object[];
    date_from?: string;
    occasionnelle_debut?: string;
    occasionnelle_fin?: string;
    type_periode_occupation: string;
    titre_annonce: string;
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
    constructor(data?: Partial<Entreposage>);
}
export interface EntreposageRelations {
}
export declare type EntreposageWithRelations = Entreposage & EntreposageRelations;
