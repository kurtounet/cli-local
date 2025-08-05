import { IEnvironment } from '@ frameworks/_global/interface/framework-commun.model';

export function environmentsMock(environment: IEnvironment) {
    return `MODE=${environment.mode}
DEBUG=${environment.debug}
APP_PORT=${environment.variables?.appPort}
CORS_ORIGIN=${environment.variables?.corsOrigine}                   #  http://localhost:4200  Remplace par ldomaine de ton frontend sinécessair
DB_TYPE=${environment.variables?.databaseConfig.type}                # Remplace par POSTGRES si besoin
DB_HOST=${environment.variables?.databaseConfig.host}               # localhost
DB_PORT=${environment.variables?.databaseConfig.port}               # 3306 Msql ou5432 pour PostgreSQL
DB_USERNAME=${environment.variables?.databaseConfig.user}           # Ton utilisateur MySQL/PostgreSQL
DB_PASSWORD=${environment.variables?.databaseConfig.password}       # Ton mot de passe
DB_DATABASE=${environment.variables?.databaseConfig.database}           # Nom de la base de données MySQL/PostgreSQL
DB_ENTITIES=${environment.variables?.databaseConfig.entities}       # ["dist/**/*.entity{.ts,.js}"]
DB_SYNCHRONIZE=${environment.variables?.databaseConfig.synchronize} # true ⚠️ Active la synchro automatique deentités (à désactiver en prod)

MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USER=ton-email@gmail.com
MAIL_PASS=ton-mot-de-pass

JWT_SECRET=super_secret_key
JWT_EXPIRES_IN=3600
JWT_REFRESH_SECRET=another_secret_key
JWT_REFRESH_EXPIRES_IN=86400  # 24 heures pour le Refresh Token`;
}
