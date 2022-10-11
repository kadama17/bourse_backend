"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FretController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let FretController = class FretController {
    constructor(fretRepository) {
        this.fretRepository = fretRepository;
    }
    async create(fret) {
        return this.fretRepository.create(fret);
    }
    async count(where) {
        return this.fretRepository.count(where);
    }
    async find(filter) {
        return this.fretRepository.find(filter);
    }
    async updateAll(fret, where) {
        return this.fretRepository.updateAll(fret, where);
    }
    async findById(id, filter) {
        return this.fretRepository.findById(id, filter);
    }
    async updateById(id, fret) {
        await this.fretRepository.updateById(id, fret);
    }
    async replaceById(id, fret) {
        await this.fretRepository.replaceById(id, fret);
    }
    async deleteById(id) {
        await this.fretRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/frets'),
    (0, rest_1.response)(200, {
        description: 'Fret model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Fret) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Fret, {
                    title: 'NewFret',
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Fret]),
    tslib_1.__metadata("design:returntype", Promise)
], FretController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/frets/count'),
    (0, rest_1.response)(200, {
        description: 'Fret model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Fret)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FretController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/frets'),
    (0, rest_1.response)(200, {
        description: 'Array of Fret model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Fret, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Fret)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FretController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/frets'),
    (0, rest_1.response)(200, {
        description: 'Fret PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Fret, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Fret)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Fret, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FretController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/frets/{id}'),
    (0, rest_1.response)(200, {
        description: 'Fret model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Fret, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Fret, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], FretController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/frets/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fret PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Fret, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Fret]),
    tslib_1.__metadata("design:returntype", Promise)
], FretController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/frets/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fret PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Fret]),
    tslib_1.__metadata("design:returntype", Promise)
], FretController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/frets/{id}'),
    (0, rest_1.response)(204, {
        description: 'Fret DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], FretController.prototype, "deleteById", null);
FretController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.FretRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.FretRepository])
], FretController);
exports.FretController = FretController;
//# sourceMappingURL=fret.controller.js.map