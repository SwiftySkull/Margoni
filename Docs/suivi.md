# Fichier de suivi

<https://trello.com/b/SssHMhYA/margoni-admin>

## 17/12/2021

### A faire

Commencer la mise en place du projet, la documentation à créer et le skeleton à mettre pour installer l'environnement de travail

### Effectué

Création des premiers documents (MCD, Dico de données)
Création du website skeleton
Création de la base de données avec toutes les entités
Création de fixtures de travail
Mise en place de la page d'accueil
Création d'un CategoryController pour permettre la recherche des oeuvres en fonction de leur catégorie + création/modification/suppression des catégories avec sécurité token CSRF
Mise en place de templates associés avec formulaire

### Liens utiles

<https://symfony.com/doc/current/reference/forms/types.html> pour la mise en place des inputs de formulaire préfabriqués par Symfony.
<https://getbootstrap.com/docs/5.1/getting-started/introduction/> petite doc bootstrap pour de la mise en page rapide et simple

## 18/12/2021

### A faire

Continuer la mise en place des Controllers comme le CategoryController, par exemple le SituationController ou SizeController, peu importe
Mettre en place les templates qui vont avec, les sécurités token CSRF et les formulaires d'ajout et modification

### Effectué

FrameController + templates fait
SituationController + templates fait
SizeController + templates fait
TechniqueController + templates fait

Création, modification, suppression d'un tableau OK

Création d'un trello pour mieux se repérer <https://trello.com/b/SssHMhYA/margoni-admin>

Manque toujours pour le moment la récupération des informations d'une photo

Truncate de Twig installé
Petite fioriture sur le formulaire d'ajout et les pages d'affichage pour les tailles des tableaux, considérée actuellement en millimètre pour le fonctionnement de la BDD et des images, il faudra penser à le remettre en centimètre

Modification des namespace des Controllers en admin pour préparer les API

Début de création d'un comportement pour pouvoir faire plusieurs pages de tableaux à faire défiler

### Liens utiles

<https://symfony.com/doc/current/reference/forms/types/date.html> Pour le DateType pour les formulaires Symfony
<https://openclassrooms.com/forum/sujet/twig-comment-concatener-29107> Pour un rappel sur la concaténation
<https://sql.sh/cours/jointures/inner-join> Pour le LEFT JOIN
<https://twig.symfony.com/doc/2.x/filters/u.html> Pour le truncate de twig
<https://twig.symfony.com/doc/3.x/tags/for.html> pour les boucles numériques sur Twig

## 21/12/2021

### A faire

Récupération des informations d'une photo
Champ de recherche pour chercher un tableau par son nom ou une de ses caractéristiques textuelles
Préparer les routes API

Continuer le comportement de PageByPaintings.

### Fait

PageByPaintings théoriquement fini !
Pour tous les controlleurs !

Requête d'offset aussi fonctionnelle

### Liens utiles

<https://stackoverflow.com/questions/9214471/count-rows-in-doctrine-querybuilder> pour compter des lignes en query builder

## 26/12/2021

### A faire

Récupération des informations d'une photo !!

Champ de recherche pour chercher un tableau par son nom ou une de ses caractéristiques textuelles
Préparer les routes API

### Fait

Première méthode d'ajout en base de données des informations d'une photo. Récupération et encodage pour le moment.

Réduire le pourcentage de qualité des photos entre 80 et 95%, si la photo fait moins de 3mo c'est bon, si on a des ko c'est encore mieux sans tuer la qualité.

### Liens utiles

<https://webdevdesigner.com/q/php-display-image-blob-from-mysql-duplicate-46922/> pour l'utilisation de la base64 en encodage

## 27/12/2021

### A faire

Faire la pull request, vérifier un dernier coup le code de la branche Photo avant de merge le tout.

Champ de recherche pour chercher un tableau par son nom ou une de ses caractéristiques textuelles
Préparer les routes API

### Fait

Modification des formulaires ajout/edition des tableaux par rapport aux photos
Pull request pour les photos OK

Création du champ de recherche pour chercher les tableaux avec un mot clé

Modification des templates en conséquence

### Liens utiles

<https://symfony.com/doc/current/reference/constraints> Pour les contraintes notamment les contraintes de fichier (aujourd'hui)

## 28/12/2021

### A faire

Faire la pull request, vérifier un dernier coup le code de la branche SearchingTool avant de merge le tout.

Préparer les routes API

Faire la recherche par taille

Associer une taille à un format spécifique automatiquement (format 1F -> cm et inversement)

### Fait

Pull request SearchingTool faite
Routes API créées, Nelmio CORS Policy Bundle aussi installé et tout est pull sur develop.
Tout le monde peut y avoir accès pour le moment.

### Liens utiles

<https://github.com/nelmio/NelmioCorsBundle> Pour la sécurité des CORS


## XX

### A faire

Modifier le dictionnaire de données pour rajouter l'entité Picture
Ajouter un fichier pour indiquer les routes disponibles en API (API Endpoint)

Faire la recherche par taille
Associer une taille à un format spécifique automatiquement (format 1F -> cm et inversement)
