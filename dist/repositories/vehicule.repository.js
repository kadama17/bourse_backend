"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculeRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let VehiculeRepository = class VehiculeRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        console.log(models_1.Vehicule);
        super(models_1.Vehicule, dataSource);
    }
};
VehiculeRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.vehicule')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.VehiculeDataSource])
], VehiculeRepository);
exports.VehiculeRepository = VehiculeRepository;
//# sourceMappingURL=vehicule.repository.js.map