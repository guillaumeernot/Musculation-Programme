# Publier l'app sur GitHub Pages

À faire une fois. Ensuite, republier = redéposer `index.html` et `sw.js`.

## 1. Créer le dépôt

**Un dépôt (repository), pas un « Project ».** Les Projects de GitHub sont des
tableaux de suivi de tâches, ils n'hébergent rien.

Sur [github.com/new](https://github.com/new) :

- nom : `carnet` (ou ce que tu veux — il apparaîtra dans l'adresse)
- visibilité : **Public** — obligatoire, GitHub Pages n'accepte les dépôts
  privés qu'avec un compte payant. Ce n'est pas un problème ici : ce dossier
  ne contient que la coquille de l'app, aucune donnée personnelle.
- ne cocher aucun fichier d'initialisation

Si le dépôt est déjà créé et vide, passer directement à l'étape 2. Ignorer
« Start coding with Codespaces » et « Add collaborators », qui ne servent à
rien ici.

## 2. Déposer les fichiers

Sur la page du dépôt vide, le lien **uploading an existing file** est dans la
phrase « ...or push an existing repository ». Sinon : bouton `Add file` →
`Upload files`.

Sélectionner **tout le contenu de ce dossier**, le dossier `images/` compris,
mais **pas le dossier `publication/` lui-même** — sinon les fichiers se
retrouvent dans un sous-dossier et Pages ne trouve pas `index.html`.

Le plus simple : ouvrir `publication/`, tout sélectionner (`Ctrl+A`), et
glisser dans la page. Le navigateur conserve `images/` comme sous-dossier,
c'est ce qu'on veut.

À déposer :

- `index.html`, `manifest.webmanifest`, `sw.js`, `.nojekyll`
- `icone-192.png`, `icone-512.png`, `icone-maskable-512.png`
- le dossier `images/`

`.nojekyll` est un fichier vide : il commence par un point, donc l'explorateur
de fichiers le cache par défaut. Sur Windows, l'afficher via
`Affichage` → `Éléments masqués`. Sans lui GitHub fait passer le site par
Jekyll, qui ignore certains fichiers sans prévenir.

Puis **Commit changes**.

## 3. Activer Pages

`Settings` → `Pages` → sous *Source*, choisir `Deploy from a branch`,
branche `main`, dossier `/ (root)` → **Save**.

Au bout d'une à deux minutes l'adresse apparaît en haut de la même page :

    https://<ton-pseudo>.github.io/carnet/

## 4. Installer sur le téléphone

1. Ouvrir cette adresse dans **Chrome** sur le téléphone.
2. Menu `⋮` → **Ajouter à l'écran d'accueil** → *Installer*.
3. Lancer l'app depuis l'icône. Le bandeau de stockage doit passer au vert :
   « Stockage durable ».
4. Transférer `data/programme.json` sur le téléphone, puis dans l'app
   « Ouvrir programme.json ».

À partir de là, plus de réseau nécessaire et plus rien à installer.

## Si le bandeau de stockage reste orange

- Vérifier que l'app a bien été lancée depuis l'icône de l'écran d'accueil,
  et non depuis un onglet du navigateur.
- Vérifier que l'adresse est en `https://`.

Tant qu'il est orange, Android peut purger les données pour faire de la
place : exporter après chaque séance.
