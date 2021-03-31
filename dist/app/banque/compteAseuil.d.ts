import { Compte } from "./compte";
export declare class CompteAseuil extends Compte {
    seuil: number;
    constructor(numero: number, solde: number, seuil?: number);
    getSeuil(): number;
    setSeuil(seuil: number): void;
    retirer(montant: number): void;
}
