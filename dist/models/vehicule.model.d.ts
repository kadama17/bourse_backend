import { Entity } from '@loopback/repository';
export declare class Vehicule extends Entity {
    id?: string;
    intitule: string;
    description: string;
    matricule_vehicule: string;
    marque_serie: string;
    modele_vehicule: string;
    photos_vehicule?: string;
    disponibilite: string;
    longueur: number;
    largeur: number;
    hauteur: number;
    depart: string;
    arrivee: string;
    depart_geo: string;
    arrivee_geo: string;
    pays_depart: string;
    pays_arrivee: string;
    date: Date;
    [prop: string]: any;
    constructor(data?: Partial<Vehicule>);
}
export interface VehiculeRelations {
}
export declare type VehiculeWithRelations = Vehicule & VehiculeRelations;
