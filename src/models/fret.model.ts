import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Fret extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  created?: string;

  @property({
    type: 'date',
    default: () => new Date(),
  })
  modified?: string;
  @property({
    type: 'string',
    required: true,
  })
  particularite: string;

  @property({
    type: 'object',
    required: true,
  })
  type_vehicule: object;

  @property({
    type: 'object',
    required: true,
  })
  coords_depart: object;

  @property({
    type: 'object',
    required: true,
  })
  coords_dest: object;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  escaleData: object[];

  @property({
    type: 'string',
    required: true,
  })
  specificite: string;

  @property({
    type: 'object',
    required: true,
  })
  transactionsType: object;

  @property({
    type: 'string',
  })
  prix_fixe?: string;

  @property({
    type: 'number',
  })
  prix_propose?: number;

  @property({
    type: 'number',
  })
  prix_a_partir_de?: number;

  @property({
    type: 'number',
  })
  prix_a_debattre?: number;

  @property({
    type: 'number',
  })
  pas?: number;

  @property({
    type: 'number',
  })
  mise_en_jeu?: number;

  @property({
    type: 'number',
  })
  valeur?: number;

  @property({
    type: 'number',
  })
  seuil?: number;

  @property({
    type: 'string',
    required: true,
  })
  pays_depart: string;

  @property({
    type: 'string',
    required: true,
  })
  ville_depart: string;

  @property({
    type: 'string',
    required: true,
  })
  cp_depart: string;

  @property({
    type: 'string',
    required: true,
  })
  adresse_depart: string;

  @property({
    type: 'string',
    required: true,
  })
  pays_dest: string;

  @property({
    type: 'string',
    required: true,
  })
  ville_dest: string;

  @property({
    type: 'string',
    required: true,
  })
  cp_dest: string;

  @property({
    type: 'string',
    required: true,
  })
  adresse_dest: string;

  @property({
    type: 'number',
    required: true,
  })
  longueur: number;

  @property({
    type: 'number',
    required: true,
  })
  poids: number;

  @property({
    type: 'string',
  })
  autres?: string;

  @property({
    type: 'number',
    required: true,
  })
  surface: number;

  @property({
    type: 'number',
    required: true,
  })
  volume: number;

  @property({
    type: 'string',
    required: true,
  })
  nature_marchandise: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Fret>) {
    super(data);
  }
}

export interface FretRelations {
  // describe navigational properties here
}

export type FretWithRelations = Fret & FretRelations;
