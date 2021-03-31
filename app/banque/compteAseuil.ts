import { Compte } from "./compte";

export class CompteAseuil extends Compte {
    seuil: number; // Montant auquel le solde ne peut pas descendre

    constructor(numero: number, solde: number, seuil: number = 0): CompteAseuil {
        super(numero, solde)
        this.seuil = seuil;
    }

    getSeuil(): number {
        return this.seuil;
    }

    setSeuil(seuil: number): void {
        this.seuil = seuil;
    }

    retirer(montant: number) {
        if(this.getSolde() - montant > this.seuil){
            //this.setSolde(this.getSolde() - montant)
            super.retirer(montant)
        }
    }

}