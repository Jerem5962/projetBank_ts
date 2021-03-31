import { Compte } from "./compte";

export class CompteRemunere extends Compte {

    taux: number; // Entre 0 et 1

    constructor(numero: number, solde: number, taux: number) {
        super(numero, solde)
        this.taux = taux;
    }

    getTaux(): number {
        return this.taux;
    }

    setTaux(taux: number): void {
        this.taux = taux;
    }

    calculerInteret(): number {
        let interet: number = 0;
        interet = (this.taux * this.getSolde()) / 100

        return interet
    }

    verserInteret(): void {
        this.setSolde(this.calculerInteret())
    }


}