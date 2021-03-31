"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var Client = /** @class */ (function () {
    function Client(nom, prenom, age, numero, compte // max5
    ) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.numero = numero;
        this.comptes = compte;
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
    Client.prototype.getComptes = function (num_compte) {
        var result;
        this.comptes.forEach(function (compte) {
            if (compte.getNumero() == num_compte) {
                result = compte;
            }
            else {
                result = "Le compte n° " + num_compte + " n'existe pas!";
            }
        });
        return result;
    };
    Client.prototype.addCompte = function (compte) {
        this.comptes.push(compte);
    };
    Client.prototype.getCompte = function () { };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map