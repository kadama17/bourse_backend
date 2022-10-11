"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entreposage = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Entreposage = class Entreposage extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        id: true,
        generated: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Entreposage.prototype, "type_stockage", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Entreposage.prototype, "type_marchandises", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Entreposage.prototype, "services_annexes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
    }),
    tslib_1.__metadata("design:type", Array)
], Entreposage.prototype, "periodes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: null,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "date_from", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: null,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "occasionnelle_debut", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: null,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "occasionnelle_fin", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "type_periode_occupation", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "titre_annonce", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "desc_annonces", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "nature_marchandise", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Entreposage.prototype, "poids", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Entreposage.prototype, "longueur", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Entreposage.prototype, "mot_cle", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Entreposage.prototype, "surface", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Entreposage.prototype, "volume", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "transactions", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "adresse", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "fax", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entreposage.prototype, "telephone", void 0);
Entreposage = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Entreposage);
exports.Entreposage = Entreposage;
//# sourceMappingURL=entreposage.model.js.map