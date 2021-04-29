import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Person extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  generation: string;

  @property({
    type: 'string',
    required: true,
  })
  motherId: string;

  @property({
    type: 'string',
    required: true,
  })
  fatherId: string;

  @property({
    type: 'string',
    required: false,
  })
  image: string;

  @property({
    type: 'string',
    required: false,
  })
  about: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: false,
  })
  links: string[];

  @property({
    type: 'date',
    required: false,
  })
  dob: Date;

  @property({
    type: 'boolean',
    required: false,
  })
  hideDob: boolean;

  constructor(data?: Partial<Person>) {
    super(data);
  }
}

export interface PersonRelations {
  // describe navigational properties here
}

export type PersonWithRelations = Person & PersonRelations;
