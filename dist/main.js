"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("./app/banque/client");
var compte_1 = require("./app/banque/compte");
var compteAseuil_1 = require("./app/banque/compteAseuil");
var compteRemunere_1 = require("./app/banque/compteRemunere");
var client = new client_1.Client("borly", "jerem", 35, 123, []);
var compte = new compte_1.Compte(1, 10);
var compteRemun = new compteRemunere_1.CompteRemunere(2, 10, 25);
var compteAseuil = new compteAseuil_1.CompteAseuil(3, 10);
client.addCompte(compte);
client.addCompte(compteRemun);
client.addCompte(compteAseuil);
console.log(client.getCompte(2));
client.getComptes().forEach(function (compte) {
    if (compte instanceof compteRemunere_1.CompteRemunere) {
        compte.verserInteret();
    }
});
console.log(client.getCompte(2));
//console.log(client)
//# sourceMappingURL=main.js.map