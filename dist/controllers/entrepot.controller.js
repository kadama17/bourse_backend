"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntrepotController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EntrepotController = class EntrepotController {
    constructor(entrepotRepository) {
        this.entrepotRepository = entrepotRepository;
    }
    async create(entrepots) {
        return this.entrepotRepository.create(entrepots);
    }
    async count(where) {
        return this.entrepotRepository.count(where);
    }
    async find(filter) {
        return this.entrepotRepository.find(filter);
    }
    async updateAll(entrepots, where) {
        return this.entrepotRepository.updateAll(entrepots, where);
    }
    async findById(id, filter) {
        return this.entrepotRepository.findById(id, filter);
    }
    async updateById(id, entrepots) {
        await this.entrepotRepository.updateById(id, entrepots);
    }
    async replaceById(id, entrepots) {
        await this.entrepotRepository.replaceById(id, entrepots);
    }
    async deleteById(id) {
        await this.entrepotRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/entrepots'),
    (0, rest_1.response)(200, {
        description: 'Entrepots model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Entrepots) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Entrepots, {
                    title: 'NewEntrepots',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Entrepots]),
    tslib_1.__metadata("design:returntype", Promise)
], EntrepotController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/entrepots/count'),
    (0, rest_1.response)(200, {
        description: 'Entrepots model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Entrepots)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntrepotController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/entrepots'),
    (0, rest_1.response)(200, {
        description: 'Array of Entrepots model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Entrepots, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Entrepots)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntrepotController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/entrepots'),
    (0, rest_1.response)(200, {
        description: 'Entrepots PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Entrepots, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Entrepots)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Entrepots, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntrepotController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/entrepots/{id}'),
    (0, rest_1.response)(200, {
        description: 'Entrepots model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Entrepots, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Entrepots, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntrepotController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/entrepots/{id}'),
    (0, rest_1.response)(204, {
        description: 'Entrepots PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Entrepots, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Entrepots]),
    tslib_1.__metadata("design:returntype", Promise)
], EntrepotController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/entrepots/{id}'),
    (0, rest_1.response)(204, {
        description: 'Entrepots PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Entrepots]),
    tslib_1.__metadata("design:returntype", Promise)
], EntrepotController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/entrepots/{id}'),
    (0, rest_1.response)(204, {
        description: 'Entrepots DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EntrepotController.prototype, "deleteById", null);
EntrepotController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EntrepotsRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EntrepotsRepository])
], EntrepotController);
exports.EntrepotController = EntrepotController;
//# sourceMappingURL=entrepot.controller.js.map