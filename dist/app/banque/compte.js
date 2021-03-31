"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Compte = void 0;
var Compte = /** @class */ (function () {
    function Compte(numero, solde) {
        this.numero = numero;
        this.solde = solde;
    }
    Compte.prototype.ajouter = function (quantite) {
        this.setSolde(this.getSolde() + quantite);
    };
    Compte.prototype.retirer = function (quantite) {
        this.setSolde(this.getSolde() - quantite);
    };
    Compte.prototype.getNumero = function () {
        return this.numero;
    };
    Compte.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Compte.prototype.getSolde = function () {
        return this.solde;
    };
    Compte.prototype.setSolde = function (solde) {
        this.solde += solde;
    };
    return Compte;
}());
exports.Compte = Compte;
//# sourceMappingURL=compte.js.map