# Memory-React.JS

## Présentation

Memory-React.JS est une application web développée en ReactJS qui reprend le célèbre jeu Memory. Le but est simple : retrouver toutes les paires de cartes identiques parmi des cartes retournées face cachée.

## Principe du jeu

- Les cartes sont disposées face cachée.
- À chaque tour, le joueur retourne deux cartes.
- Si les cartes sont identiques, elles restent visibles.
- Sinon, elles se retournent face cachée.
- Le jeu est gagné lorsque toutes les paires ont été trouvées.

## Fonctionnalités principales

- Affichage dynamique des cartes avec animation lors du retournement.
- Gestion de l’état du jeu via les hooks React (`useState`).
- Bouton pour relancer une nouvelle partie.
- Message de victoire lorsque toutes les paires sont révélées.

## Architecture du projet

- Le projet est créé avec Vite, un bundler moderne et rapide.
- Le dossier `src/components` contient les composants réutilisables :
  - `App.jsx` : composant principal contenant la logique du jeu.
  - `Card.jsx` : composant représentant une carte du jeu.
  - `Button.jsx` : composant bouton générique pour relancer la partie.
- Les ressources (images, icônes) sont stockées dans `src/assets`.

## Installation et lancement

1. Cloner le dépôt.
2. Installer les dépendances avec `npm install`.
3. Lancer le serveur de développement avec `npm run dev`.
4. Ouvrir l’application dans un navigateur à l’adresse indiquée.