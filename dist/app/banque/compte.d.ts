export declare class Compte {
    private numero;
    private solde;
    constructor(numero: number, solde: number);
    ajouter(quantite: number): void;
    retirer(quantite: number): void;
    getNumero(): number;
    setNumero(numero: number): void;
    getSolde(): number;
    setSolde(solde: number): void;
}
