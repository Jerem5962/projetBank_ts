# projetBank_ts
exercice avec typescript
## Commande à effectuer au début du projet
_ npm init (package.json)
- npm install (créé le package-lock mais optionel: permet aux autres d'installer les dépendances du package.json)
- npm install typescript@latest --save-dev (--save-dev: enregistre dans le package.json)

_ npx tsc -w (permet de build)
_ Pour tester un fichier: npx tsc-node <nomFichier.ts> (pour tester fichier typescript)
_ Fichier tsconfig.json contient la configuration du compilateur typescript

Ajouter dans le tsconfig.json: 
    "outDir": "dist",
    "sourceMap": true,
    "declaration": true,

Executer le resultat de la configuration se rendre dans le dossier "dist" puis lancer la commande:
node <nomFichier.js>