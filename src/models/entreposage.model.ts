import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Entreposage extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  type_stockage: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  type_marchandises: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  services_annexes: string[];

  @property({
    type: 'array',
    itemType: 'object',
  })
  periodes?: object[];

  @property({
    type: 'string',
    default: null,
    nullable: true,
  })
  date_from?: string;

  @property({
    type: 'string',
    default: null,
    nullable: true,
  })
  occasionnelle_debut?: string;

  @property({
    type: 'string',
    default: null,
    nullable: true,
  })
  occasionnelle_fin?: string;

  @property({
    type: 'string',
    required: true,
  })
  type_periode_occupation: string;

  @property({
    type: 'string',
    required: true,
  })
  titre_annonce: string;

  @property({
    type: 'string',
    required: true,
  })
  desc_annonces: string;

  @property({
    type: 'string',
    required: true,
  })
  nature_marchandise: string;

  @property({
    type: 'number',
    required: true,
  })
  poids: number;

  @property({
    type: 'number',
    required: true,
  })
  longueur: number;

  @property({
    type: 'array',
    itemType: 'object',
    required: true,
  })
  mot_cle: object[];

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
  transactions: string;

  @property({
    type: 'string',
    required: true,
  })
  adresse: string;

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  fax: string;

  @property({
    type: 'string',
    required: true,
  })
  telephone: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Entreposage>) {
    super(data);
  }
}

export interface EntreposageRelations {
  // describe navigational properties here
}

export type EntreposageWithRelations = Entreposage & EntreposageRelations;
