# Data Dictionary

## Painting
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de l'oeuvre                          |
| title        | VARCHAR (50) | NOT NULL, UNIQUE                                | Titre de l'oeuvre                                |
| date         | DATETIME     | NULL                                            | Date de l'oeuvre                                 |
| height       | TINYINT      | NULL                                            | Hauteur de l'oeuvre                              |
| width        | TINYINT      | NULL                                            | Largeur de l'oeuvre                              |
| location     | TEXT         | NULL                                            | Ville, région où se situe l'oeuvre actuellement  |
| information  | TEXT         | NULL                                            | Informations complémentaires sur l'oeuvre        |
| picture      | TEXT         | NOT NULL, UNIQUE                                | Photo de l'oeuvre                                |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de l'oeuvre                |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de l'oeuvre                  |
| size_id      | entity       | NULL                                            | Format de l'oeuvre                               |
| technique_id | entity       | NULL                                            | Technique utilisée pour l'oeuvre                 |
| frame_id     | entity       | NULL                                            | Type d'encadrement de l'oeuvre                   |
| collection_id| entity       | NULL                                            | Situation de l'oeuvre, propriétaire actuel       |

## Size
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant du format                            |
| format       | TINYTEXT (10)| NOT NULL, UNIQUE                                | Nom du type de format                            |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement du format                  |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour du format                    |

## Technique
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de la technique                      |
| type         | VARCHAR (40) | NOT NULL, UNIQUE                                | Nom de la technique utilisée                     |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la technique            |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la technique              |

## Category
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de la catégorie                      |
| name         | VARCHAR (30) | NOT NULL, UNIQUE                                | Nom de la catégorie                              |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la catégorie            |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la catégorie              |

## Frame
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant du type d'encadrement                |
| framing      | VARCHAR (50) | NOT NULL, UNIQUE                                | Statut de l'encadrement/Style d'encadrement      |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de l'encadrement           |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de l'encadrement             |

## (Collection =>) Situation
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| id           | INT          | PRIMARY KEY, NOT NULL, UNSIGNED, AUTO_INCREMENT | Identifiant de la situation de collection        |
| collection   | VARCHAR (40) | NOT NULL, UNIQUE                                | Situation de l'oeuvre, propriétaire actuel       |
| created_at   | DATETIME     | NOT NULL, CURRENT_TIMESTAMP                     | Date d'enregistrement de la vente                |
| updated_at   | DATETIME     | NULL                                            | Date de mise à jour de la vente                  |

## Painting_category
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| peinture_id  | INT          | NOT NULL, UNSIGNED                              | Identifiant de la peinture                       |
| categorie_id | INT          | NOT NULL, UNSIGNED                              | Identifiant de la catégorie                      |

## Painting_technique
| Field        | Type         | Specificity                                     | Description                                      |
| ------------ | ------------ | ----------------------------------------------- | ------------------------------------------------ |
| peinture_id  | INT          | NOT NULL, UNSIGNED                              | Identifiant de la peinture                       |
| technique_id | INT          | NOT NULL, UNSIGNED                              | Identifiant de la technique                      |
