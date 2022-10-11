"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FretRepository = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const datasources_1 = require("../datasources");
const models_1 = require("../models");
let FretRepository = class FretRepository extends repository_1.DefaultCrudRepository {
    constructor(dataSource) {
        super(models_1.Fret, dataSource);
        this.modelClass.observe('persist', async (ctx) => {
            ctx.data.modified = new Date();
        });
    }
};
FretRepository = tslib_1.__decorate([
    tslib_1.__param(0, (0, core_1.inject)('datasources.vehicule')),
    tslib_1.__metadata("design:paramtypes", [datasources_1.VehiculeDataSource])
], FretRepository);
exports.FretRepository = FretRepository;
//# sourceMappingURL=fret.repository.js.map