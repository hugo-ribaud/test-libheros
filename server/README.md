# Mon API de Notes

Cette API permet aux utilisateurs de s'inscrire, de se connecter et de gérer leurs notes personnelles.

## Prérequis

- Node.js (version recommandée v14 ou ultérieure)
- npm (généralement installé avec Node.js)
- MongoDB (localement ou via un service cloud comme MongoDB Atlas)

## Comment démarrer

### 1. Cloner le répertoire

Pour obtenir une copie locale du projet, clonez le répertoire en utilisant git :

```bash
git clone git@github.com:hugo-ribaud/test-libheros.git
cd <NOM_DU_DOSSIER_DU_REPO>
```


### 2. Installer les dépendances

Une fois à l'intérieur du dossier du projet, installez les dépendances nécessaires avec npm :

```bash
npm install
```

### 3. Configuration de la base de données

Assurez-vous d'avoir MongoDB en cours d'exécution. Si vous utilisez MongoDB localement, il devrait fonctionner sur l'URL par défaut `mongodb://localhost:27017`. Sinon, ajustez la chaîne de connexion en conséquence dans votre fichier de configuration ou vos variables d'environnement.

### 4. Démarrage de l'API

Pour démarrer l'API en mode développement :

```bash
npm run dev
```

Ou en mode production :

```bash
npm start
```

L'API devrait démarrer sur `http://localhost:3000` ou sur le port spécifié dans vos variables d'environnement.

## Comment tester

Pour tester l'API depuis une autre machine :

1. Assurez-vous que le port sur lequel votre API fonctionne (par exemple, le port 3000) est ouvert et accessible depuis d'autres machines.
2. Remplacez `localhost` par l'adresse IP de la machine hôte dans l'URL de l'API.
3. Utilisez un client HTTP comme Postman ou Insomnia pour envoyer des requêtes à votre API.


## Endpoints

### 1. Inscription

- **URL** : `/signup`
- **Méthode** : `POST`
- **Données du corps de la requête** :
  ```json
  {
    "username": "exemple",
    "password": "motdepasse123"
  }
  ```

### 2. Connexion

- **URL** : `/signup`
- **Méthode** : `POST`
- **Données du corps de la requête** :
  ```json
  {
    "username": "exemple",
    "password": "motdepasse123"
  }
  ```

### 3. Ajouter une note

- **URL** : `/notes`
- **Méthode** : `POST`
- **Données du corps de la requête** :
  ```json
  {
    "title": "Titre de la note",
    "content": "Contenu de la note"
  }
  ```

### 4. Obtenir toutes les notes

- **URL** : `/notes`
- **Méthode** : `GET`

### 5. Obtenir une note spécifique

- **URL** : `/notes/:noteId`
- **Méthode** : `GET`

### 6. Mettre à jour une note

- **URL** : `/notes/:noteId`
- **Méthode** : `PATCH`
- **Données du corps de la requête** :
  ```json
  {
    "title": "Nouveau titre",
    "content": "Nouveau contenu"
  }
  ```

### 7. Supprimer une note

- **URL** : `/notes/:noteId`
- **Méthode** : `DELETE`

---

## Happy Testing !