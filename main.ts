import { Client } from "./app/banque/client";
import { Compte } from "./app/banque/compte";
import { CompteAseuil } from "./app/banque/compteAseuil";
import { CompteRemunere } from "./app/banque/compteRemunere";

let client = new Client("borly", "jerem", 35, 123, [])
let compte = new Compte(1, 10);
let compteRemun = new CompteRemunere(2, 10, 25)
let compteAseuil = new CompteAseuil(3, 10)

client.addCompte(compte)
client.addCompte(compteRemun)
client.addCompte(compteAseuil)

console.log(client.getCompte(2))

client.getComptes().forEach(compte => {
    if(compte instanceof CompteRemunere){
        compte.verserInteret()
    }
})

console.log(client.getCompte(2))
//console.log(client)