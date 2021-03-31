import { Compte } from "./compte";
export declare class Client {
    private nom;
    private prenom;
    private age;
    private numero;
    private comptes;
    private compte;
    constructor(nom: string, prenom: string, age: number, numero: number, compte: Array<Compte>);
    setNom(nom: string): void;
    getNom(): string;
    setPrenom(prenom: string): void;
    getPrenom(): string;
    setAge(age: number): void;
    getAge(): number;
    setNumero(numero: number): void;
    getNumero(): number;
    setComptes(compte: Compte): void;
    getComptes(num_compte: number): any;
    addCompte(compte: Compte): void;
    getCompte(): void;
}
