"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntreposageController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EntreposageController = class EntreposageController {
    constructor(entreposageRepository) {
        this.entreposageRepository = entreposageRepository;
    }
    async create(entreposage) {
        return this.entreposageRepository.create(entreposage);
    }
    async count(where) {
        return this.entreposageRepository.count(where);
    }
    async find(filter) {
        return this.entreposageRepository.find(filter);
    }
    async updateAll(entreposage, where) {
        return this.entreposageRepository.updateAll(entreposage, where);
    }
    async findById(id, filter) {
        return this.entreposageRepository.findById(id, filter);
    }
    async updateById(id, entreposage) {
        await this.entreposageRepository.updateById(id, entreposage);
    }
    async replaceById(id, entreposage) {
        await this.entreposageRepository.replaceById(id, entreposage);
    }
    async deleteById(id) {
        await this.entreposageRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/entreposages'),
    (0, rest_1.response)(200, {
        description: 'Entreposage model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Entreposage) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Entreposage, {
                    title: 'NewEntreposage',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntreposageController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/entreposages/count'),
    (0, rest_1.response)(200, {
        description: 'Entreposage model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Entreposage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntreposageController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/entreposages'),
    (0, rest_1.response)(200, {
        description: 'Array of Entreposage model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Entreposage, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Entreposage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntreposageController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/entreposages'),
    (0, rest_1.response)(200, {
        description: 'Entreposage PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Entreposage, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Entreposage)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Entreposage, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntreposageController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/entreposages/{id}'),
    (0, rest_1.response)(200, {
        description: 'Entreposage model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Entreposage, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Entreposage, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EntreposageController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/entreposages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Entreposage PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Entreposage, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Entreposage]),
    tslib_1.__metadata("design:returntype", Promise)
], EntreposageController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/entreposages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Entreposage PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Entreposage]),
    tslib_1.__metadata("design:returntype", Promise)
], EntreposageController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/entreposages/{id}'),
    (0, rest_1.response)(204, {
        description: 'Entreposage DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], EntreposageController.prototype, "deleteById", null);
EntreposageController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EntreposageRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EntreposageRepository])
], EntreposageController);
exports.EntreposageController = EntreposageController;
//# sourceMappingURL=entreposage.controller.js.map