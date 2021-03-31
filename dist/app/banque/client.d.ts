import { Compte } from "./compte";
export declare class Client {
    private nom;
    private prenom;
    private age;
    private numero;
    private comptes;
    constructor(nom: string, prenom: string, age: number, numero: number, comptes: Array<Compte>);
    setNom(nom: string): void;
    getNom(): string;
    setPrenom(prenom: string): void;
    getPrenom(): string;
    setAge(age: number): void;
    getAge(): number;
    setNumero(numero: number): void;
    getNumero(): number;
    setComptes(compte: Compte): void;
    getCompte(num_compte: number): Compte | undefined;
    getComptes(): Array<Compte>;
    addCompte(compte: Compte): void;
    to_string(): string;
}
