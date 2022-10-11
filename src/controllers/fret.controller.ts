import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
} from '@loopback/rest';
import {Fret} from '../models';
import {FretRepository} from '../repositories';

export class FretController {
  constructor(
    @repository(FretRepository)
    public fretRepository : FretRepository,
  ) {}

  @post('/frets')
  @response(200, {
    description: 'Fret model instance',
    content: {'application/json': {schema: getModelSchemaRef(Fret)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fret, {
            title: 'NewFret',
            
          }),
        },
      },
    })
    fret: Fret,
  ): Promise<Fret> {
    return this.fretRepository.create(fret);
  }

  @get('/frets/count')
  @response(200, {
    description: 'Fret model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Fret) where?: Where<Fret>,
  ): Promise<Count> {
    return this.fretRepository.count(where);
  }

  @get('/frets')
  @response(200, {
    description: 'Array of Fret model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Fret, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Fret) filter?: Filter<Fret>,
  ): Promise<Fret[]> {
    return this.fretRepository.find(filter);
  }

  @patch('/frets')
  @response(200, {
    description: 'Fret PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fret, {partial: true}),
        },
      },
    })
    fret: Fret,
    @param.where(Fret) where?: Where<Fret>,
  ): Promise<Count> {
    return this.fretRepository.updateAll(fret, where);
  }

  @get('/frets/{id}')
  @response(200, {
    description: 'Fret model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Fret, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Fret, {exclude: 'where'}) filter?: FilterExcludingWhere<Fret>
  ): Promise<Fret> {
    return this.fretRepository.findById(id, filter);
  }

  @patch('/frets/{id}')
  @response(204, {
    description: 'Fret PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Fret, {partial: true}),
        },
      },
    })
    fret: Fret,
  ): Promise<void> {
    await this.fretRepository.updateById(id, fret);
  }

  @put('/frets/{id}')
  @response(204, {
    description: 'Fret PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() fret: Fret,
  ): Promise<void> {
    await this.fretRepository.replaceById(id, fret);
  }

  @del('/frets/{id}')
  @response(204, {
    description: 'Fret DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.fretRepository.deleteById(id);
  }
}
