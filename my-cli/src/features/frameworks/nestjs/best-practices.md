Bonnes pratiques :

Entités : Seulement les décorateurs TypeORM (@Column, @Entity, etc.)
DTOs : Les décorateurs Swagger (@ApiProperty) et de validation (@IsString, @IsOptional, etc.)
Séparation des responsabilités :

Entités = Structure de la base de données
DTOs = Contrats d'API et validation des données



Cette approche permet une meilleure séparation des préoccupations et une maintenance plus facile du code.