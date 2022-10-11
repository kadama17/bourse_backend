"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculeController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let VehiculeController = class VehiculeController {
    constructor(vehiculeRepository) {
        this.vehiculeRepository = vehiculeRepository;
    }
    async create(vehicule) {
        return this.vehiculeRepository.create(vehicule);
    }
    async count(where) {
        return this.vehiculeRepository.count(where);
    }
    async find(filter) {
        return this.vehiculeRepository.find(filter);
    }
    async updateAll(vehicule, where) {
        return this.vehiculeRepository.updateAll(vehicule, where);
    }
    async findById(id, filter) {
        return this.vehiculeRepository.findById(id, filter);
    }
    async updateById(id, vehicule) {
        await this.vehiculeRepository.updateById(id, vehicule);
    }
    async replaceById(id, vehicule) {
        await this.vehiculeRepository.replaceById(id, vehicule);
    }
    async deleteById(id) {
        await this.vehiculeRepository.deleteById(id);
    }
};
tslib_1.__decorate([
    (0, rest_1.post)('/vehicules'),
    (0, rest_1.response)(200, {
        description: 'Vehicule model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicule) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicule, {
                    title: 'NewVehicule',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculeController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehicules/count'),
    (0, rest_1.response)(200, {
        description: 'Vehicule model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Vehicule)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculeController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehicules'),
    (0, rest_1.response)(200, {
        description: 'Array of Vehicule model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Vehicule, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Vehicule)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculeController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vehicules'),
    (0, rest_1.response)(200, {
        description: 'Vehicule PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicule, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Vehicule)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Vehicule, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculeController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/vehicules/{id}'),
    (0, rest_1.response)(200, {
        description: 'Vehicule model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicule, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Vehicule, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculeController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/vehicules/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehicule PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Vehicule, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vehicule]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculeController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/vehicules/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehicule PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String, models_1.Vehicule]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculeController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/vehicules/{id}'),
    (0, rest_1.response)(204, {
        description: 'Vehicule DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.string('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [String]),
    tslib_1.__metadata("design:returntype", Promise)
], VehiculeController.prototype, "deleteById", null);
VehiculeController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.VehiculeRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.VehiculeRepository])
], VehiculeController);
exports.VehiculeController = VehiculeController;
//# sourceMappingURL=vehicule.controller.js.map