# Data Dictionary

## Peintures
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de l'oeuvre                          |
| titre        | VARCHAR (100)| NOT NULL                                        | Titre de l'oeuvre                                |
| date         | DATE         | NULL                                            | Date de l'oeuvre                                 |
| hauteur      | TINYINT      | NULL                                            | Hauteur de l'oeuvre                              |
| largeur      | TINYINT      | NULL                                            | Largeur de l'oeuvre                              |
| lieu         | VARCHAR (100)| NULL                                            | Ville, région où se situe l'oeuvre actuellement  |
| infos        | TEXT         | NULL                                            | Informations complémentaires sur l'oeuvre        |
| photo        | TEXT         | NULL                                            | Photo de l'oeuvre                                |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de l'oeuvre                |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de l'oeuvre                  |
| taille_id    | entity       | NULL                                            | Format de l'oeuvre                               |
| technique_id | entity       | NULL                                            | Technique utilisée pour l'oeuvre                 |
| cadre_id     | entity       | NULL                                            | Type d'encadrement de l'oeuvre                   |
| collection_id| entity       | NULL                                            | Situation de l'oeuvre, propriétaire actuel       |

## Taille
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant du format                            |
| format       | VARCHAR (10) | NOT NULL                                        | Nom du type de format                            |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement du format                  |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour du format                    |

## Technique
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de la technique                      |
| type         | VARCHAR (100)| NOT NULL                                        | Nom de la technique utilisée                     |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la technique            |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la technique              |

## Catégorie
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de la catégorie                      |
| nom          | VARCHAR (100)| NOT NULL                                        | Nom de la catégorie                              |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la catégorie            |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la catégorie              |

## Cadre
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant du type d'encadrement                |
| encadrement  | VARCHAR (100)| NOT NULL                                        | Statut de l'encadrement/Style d'encadrement      |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de l'encadrement           |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de l'encadrement             |

## Collection
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant du statut de vente                   |
| situation    | VARCHAR (100)| NOT NULL                                        | Situation de l'oeuvre, propriétaire actuel       |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la vente                |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la vente                  |

## Relation
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| peinture_id  | INT          | NOT NULL, UNSIGNED                              | Identifiant du statut de vente                   |
| categorie_id | INT          | NOT NULL, UNSIGNED                              | Identifiant du statut de vente                   |
