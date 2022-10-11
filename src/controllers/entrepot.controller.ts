import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  del,
  get,
  getModelSchemaRef,
  param,
  patch,
  post,
  put,
  requestBody,
  response,
} from '@loopback/rest';
import {Entrepots} from '../models';
import {EntrepotsRepository} from '../repositories';

export class EntrepotController {
  constructor(
    @repository(EntrepotsRepository)
    public entrepotRepository: EntrepotsRepository,
  ) {}

  @post('/entrepots')
  @response(200, {
    description: 'Entrepots model instance',
    content: {'application/json': {schema: getModelSchemaRef(Entrepots)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entrepots, {
            title: 'NewEntrepots',
          }),
        },
      },
    })
    entrepots: Entrepots,
  ): Promise<Entrepots> {
    return this.entrepotRepository.create(entrepots);
  }

  @get('/entrepots/count')
  @response(200, {
    description: 'Entrepots model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Entrepots) where?: Where<Entrepots>,
  ): Promise<Count> {
    return this.entrepotRepository.count(where);
  }

  @get('/entrepots')
  @response(200, {
    description: 'Array of Entrepots model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Entrepots, {includeRelations: true}),
        },
      },
    },
  })
  async find(
    @param.filter(Entrepots) filter?: Filter<Entrepots>,
  ): Promise<Entrepots[]> {
    return this.entrepotRepository.find(filter);
  }

  @patch('/entrepots')
  @response(200, {
    description: 'Entrepots PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entrepots, {partial: true}),
        },
      },
    })
    entrepots: Entrepots,
    @param.where(Entrepots) where?: Where<Entrepots>,
  ): Promise<Count> {
    return this.entrepotRepository.updateAll(entrepots, where);
  }

  @get('/entrepots/{id}')
  @response(200, {
    description: 'Entrepots model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Entrepots, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Entrepots, {exclude: 'where'})
    filter?: FilterExcludingWhere<Entrepots>,
  ): Promise<Entrepots> {
    return this.entrepotRepository.findById(id, filter);
  }

  @patch('/entrepots/{id}')
  @response(204, {
    description: 'Entrepots PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Entrepots, {partial: true}),
        },
      },
    })
    entrepots: Entrepots,
  ): Promise<void> {
    await this.entrepotRepository.updateById(id, entrepots);
  }

  @put('/entrepots/{id}')
  @response(204, {
    description: 'Entrepots PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() entrepots: Entrepots,
  ): Promise<void> {
    await this.entrepotRepository.replaceById(id, entrepots);
  }

  @del('/entrepots/{id}')
  @response(204, {
    description: 'Entrepots DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.entrepotRepository.deleteById(id);
  }
}
