export class Compte {

    private numero: number;
    private solde: number;

    constructor(numero: number, solde: number){
        this.numero = numero;
        this.solde = solde;
    }

    ajouter(quantite: number): void {
        this.setSolde(this.getSolde() + quantite)
    }

    retirer(quantite: number) {
        this.setSolde(this.getSolde() - quantite)
    }

    getNumero(): number {
        return this.numero;
    }

    setNumero(numero: number): void {
        this.numero = numero; 
    }

    getSolde(): number {
        return this.solde;
    }

    setSolde(solde: number): void {
        this.solde += solde; 
    }

}