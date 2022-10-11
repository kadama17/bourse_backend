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
import {Entreposage} from '../models';
import {EntreposageRepository} from '../repositories';

export class EntreposageController {
  constructor(
    @repository(EntreposageRepository)
    public entreposageRepository : EntreposageRepository,
  ) {}

  @post('/entreposages')
  @response(200, {
    description: 'Entreposage model instance',
    content: {'application/json': {schema: getModelSchemaRef(Entreposage)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entreposage, {
            title: 'NewEntreposage',
            exclude: ['id'],
          }),
        },
      },
    })
    entreposage: Omit<Entreposage, 'id'>,
  ): Promise<Entreposage> {
    return this.entreposageRepository.create(entreposage);
  }

  @get('/entreposages/count')
  @response(200, {
    description: 'Entreposage model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Entreposage) where?: Where<Entreposage>,
  ): Promise<Count> {
    return this.entreposageRepository.count(where);
  }

  @get('/entreposages')
  @response(200, {
    description: 'Array of Entreposage model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Entreposage, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Entreposage) filter?: Filter<Entreposage>,
  ): Promise<Entreposage[]> {
    return this.entreposageRepository.find(filter);
  }

  @patch('/entreposages')
  @response(200, {
    description: 'Entreposage PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entreposage, {partial: true}),
        },
      },
    })
    entreposage: Entreposage,
    @param.where(Entreposage) where?: Where<Entreposage>,
  ): Promise<Count> {
    return this.entreposageRepository.updateAll(entreposage, where);
  }

  @get('/entreposages/{id}')
  @response(200, {
    description: 'Entreposage model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Entreposage, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Entreposage, {exclude: 'where'}) filter?: FilterExcludingWhere<Entreposage>
  ): Promise<Entreposage> {
    return this.entreposageRepository.findById(id, filter);
  }

  @patch('/entreposages/{id}')
  @response(204, {
    description: 'Entreposage PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entreposage, {partial: true}),
        },
      },
    })
    entreposage: Entreposage,
  ): Promise<void> {
    await this.entreposageRepository.updateById(id, entreposage);
  }

  @put('/entreposages/{id}')
  @response(204, {
    description: 'Entreposage PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() entreposage: Entreposage,
  ): Promise<void> {
    await this.entreposageRepository.replaceById(id, entreposage);
  }

  @del('/entreposages/{id}')
  @response(204, {
    description: 'Entreposage DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.entreposageRepository.deleteById(id);
  }
}
