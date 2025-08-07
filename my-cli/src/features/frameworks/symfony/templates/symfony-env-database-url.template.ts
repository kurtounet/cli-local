import { IDatabase } from "@frameworks-models/database.model";

 

export function symfonyEnvDatabaseUrlTemplate(db: IDatabase): string {
  let DATABASE_URL = "";
  switch (db.type) {
    case "mysql":
      DATABASE_URL = `mysql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}?serverVersion=8.0.32&charset=utf8mb4`;
      break;
    case "mariadb":
      DATABASE_URL = `mysql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}?serverVersion=10.11.2-MariaDB&charset=utf8mb4`;
      break;
    case "postgres":
      DATABASE_URL = `postgresql://${db.user}:${db.password}@${db.host}:${db.port}/${db.database}?serverVersion=16&charset=utf8`;
      break;
    case "sqlite":
      DATABASE_URL = `sqlite:///%kernel.project_dir%/var/data_%kernel.environment%.db`;
      break;
  }
  return `###> doctrine/doctrine-bundle ###
# Format described at https://www.doctrine-project.org/projects/doctrine-dbal/en/latest/reference/configuration.html#connecting-using-a-url
# IMPORTANT: You MUST configure your server version, either here or in config/packages/doctrine.yaml
DATABASE_URL="${DATABASE_URL}" 
# DATABASE_URL="sqlite:///%kernel.project_dir%/var/data_%kernel.environment%.db"
# DATABASE_URL="mysql://app:!ChangeMe!@127.0.0.1:3306/app?serverVersion=10.11.2-MariaDB&charset=utf8mb4"
# DATABASE_URL="postgresql://app:!ChangeMe!@127.0.0.1:5432/app?serverVersion=16&charset=utf8"
 
###< doctrine/doctrine-bundle ###
`;
}
