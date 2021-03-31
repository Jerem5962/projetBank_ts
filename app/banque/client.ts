import { Compte } from "./compte";

export class Client {

    private nom: string;
    private prenom: string;
    private age: number;
    private numero: number;
    private comptes: Array<Compte>;

    constructor(
        nom: string,
        prenom: string,
        age: number,
        numero: number,
        comptes: Array<Compte> // max5
        )

        {
            this.nom = nom;
            this.prenom = prenom;
            this.age = age;
            this.numero = numero;
            this.comptes = comptes;

        }

        setNom(nom: string): void {
            this.nom = nom;
        }
        getNom(): string {
            return this.nom;
        }

        setPrenom(prenom: string): void {
            this.prenom = prenom;
        }
        getPrenom(): string {
            return this.prenom;
        }

        setAge(age: number): void {
            this.age = age;
        }
        getAge(): number {
            return this.age;
        }

        setNumero(numero: number): void {
            this.numero = numero;
        }
        getNumero(): number {
            return this.numero;
        }

        setComptes(compte: Compte): void {
            this.comptes.push(compte)
        }

        getCompte(num_compte: number): Compte | undefined {
            let result;

            this.comptes.forEach(compte => {
                if(compte.getNumero() == num_compte){
                    result = compte
                }
            })
            return result;
        }

        getComptes(): Array <Compte> {
            return this.comptes;
        }

        addCompte(compte: Compte): void {
            this.comptes.push(compte)
        }

        to_string() {
            return "nom: " + this.nom + "; Prénom: " + this.prenom 
                    + ", possede compte n°: " + this.getComptes(1)?.getNumero() + " avec un solde de: " + this.getComptes(1)?.getSolde() + "€"
        }

}