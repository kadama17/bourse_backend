/* eslint-disable @typescript-eslint/naming-convention */
import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Vehicule extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  intitule: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  matricule_vehicule: string;

  @property({
    type: 'string',
    required: true,
  })
  marque_serie: string;

  @property({
    type: 'string',
  })
  modele_vehicule: string;

  @property({
    type: 'string',
  })
  photos_vehicule?: string;

  @property({
    type: 'string',
  })
  disponibilite: string;

  @property({
    type: 'number',
    required: true,
  })
  longueur: number;

  @property({
    type: 'number',
    required: true,
  })
  largeur: number;

  @property({
    type: 'number',
    required: true,
  })
  hauteur: number;

  @property({
    type: 'string',
    required: true,
  })
  depart: string;

  @property({
    type: 'string',
    required: true,
  })
  arrivee: string;

  @property({
    type: 'string',
    required: true,
  })
  depart_geo: string;

  @property({
    type: 'string',
    required: true,
  })
  arrivee_geo: string;

  @property({
    type: 'string',
    required: true,
  })
  pays_depart: string;

  @property({
    type: 'string',
    required: true,
  })
  pays_arrivee: string;

  @property({
    type: 'Date',
    required: true,
  })
  date: Date;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Vehicule>) {
    super(data);
  }
}

export interface VehiculeRelations {
  // describe navigational properties here
}

export type VehiculeWithRelations = Vehicule & VehiculeRelations;
