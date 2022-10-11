"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Entrepots = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Entrepots = class Entrepots extends repository_1.Entity {
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
], Entrepots.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Entrepots.prototype, "type_stockage", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Entrepots.prototype, "type_marchandises", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Entrepots.prototype, "services_annexes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
    }),
    tslib_1.__metadata("design:type", Array)
], Entrepots.prototype, "periodes", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: null,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "date_from", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: null,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "type_annonce", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: null,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "occasionnelle_debut", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        default: null,
        nullable: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "occasionnelle_fin", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "type_periode_occupation", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "titre_annonce", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "nom_entreprise", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "desc_annonces", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "nature_marchandise", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Entrepots.prototype, "poids", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Entrepots.prototype, "longueur", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'array',
        itemType: 'object',
        required: true,
    }),
    tslib_1.__metadata("design:type", Array)
], Entrepots.prototype, "mot_cle", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Entrepots.prototype, "surface", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
    }),
    tslib_1.__metadata("design:type", Number)
], Entrepots.prototype, "volume", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "transactions", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "adresse", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "email", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "fax", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
    }),
    tslib_1.__metadata("design:type", String)
], Entrepots.prototype, "telephone", void 0);
Entrepots = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { strict: false } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Entrepots);
exports.Entrepots = Entrepots;
//# sourceMappingURL=entrepots.model.js.map