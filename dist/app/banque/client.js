"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(nom, prenom, age, numero, comptes // max5
    ) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.numero = numero;
        this.comptes = comptes;
    }
    Client.prototype.setNom = function (nom) {
        this.nom = nom;
    };
    Client.prototype.getNom = function () {
        return this.nom;
    };
    Client.prototype.setPrenom = function (prenom) {
        this.prenom = prenom;
    };
    Client.prototype.getPrenom = function () {
        return this.prenom;
    };
    Client.prototype.setAge = function (age) {
        this.age = age;
    };
    Client.prototype.getAge = function () {
        return this.age;
    };
    Client.prototype.setNumero = function (numero) {
        this.numero = numero;
    };
    Client.prototype.getNumero = function () {
        return this.numero;
    };
    Client.prototype.setComptes = function (compte) {
        this.comptes.push(compte);
    };
    Client.prototype.getCompte = function (num_compte) {
        var result;
        this.comptes.forEach(function (compte) {
            if (compte.getNumero() == num_compte) {
                result = compte;
            }
        });
        return result;
    };
    Client.prototype.getComptes = function () {
        return this.comptes;
    };
    Client.prototype.addCompte = function (compte) {
        this.comptes.push(compte);
    };
    Client.prototype.to_string = function () {
        var _a, _b;
        return "nom: " + this.nom + "; Prénom: " + this.prenom
            + ", possede compte n°: " + ((_a = this.getComptes(1)) === null || _a === void 0 ? void 0 : _a.getNumero()) + " avec un solde de: " + ((_b = this.getComptes(1)) === null || _b === void 0 ? void 0 : _b.getSolde()) + "€";
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map