# projetBank_ts
exercice avec typescript
## Commande à effectuer au début du projet
- npm init (package.json)
- npm install (créé le package-lock mais optionel: permet aux autres d'installer les dépendances du package.json)
- npm install typescript@latest --save-dev (--save-dev: enregistre dans le package.json)

## Commandes diverses
_ npx tsc --init (crée le fichier tsconfig.json)
- npx tsc -w (permet de build)
- Pour tester un fichier: npx tsc-node <nomFichier.ts> (pour tester fichier typescript)
- Fichier tsconfig.json contient la configuration du compilateur typescript

Ajouter dans le tsconfig.json: 
_    "outDir": "dist",
_    "sourceMap": true,
_    "declaration": true,

Executer le resultat de la configuration se rendre dans le dossier "dist" puis lancer la commande:
node <nomFichier.js>