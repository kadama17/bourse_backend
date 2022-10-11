"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VehiculeDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'vehicule',
    connector: 'mongodb',
    url: '',
    host: 'localhost',
    port: 27017,
    user: '',
    password: '',
    database: 'rest_test',
    useNewUrlParser: true
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let VehiculeDataSource = class VehiculeDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
VehiculeDataSource.dataSourceName = 'vehicule';
VehiculeDataSource.defaultConfig = config;
VehiculeDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.vehicule', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], VehiculeDataSource);
exports.VehiculeDataSource = VehiculeDataSource;
//# sourceMappingURL=vehicule.datasource.js.map