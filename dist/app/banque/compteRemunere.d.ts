import { Compte } from "./compte";
export declare class CompteRemunere extends Compte {
    taux: number;
    constructor(numero: number, solde: number, taux: number);
    getTaux(): number;
    setTaux(taux: number): void;
    calculerInteret(): number;
    verserInteret(): void;
}
