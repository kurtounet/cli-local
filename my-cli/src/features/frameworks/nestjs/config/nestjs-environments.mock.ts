import { IEnvironment } from "@features/frameworks/_global/interface/framework-commun.model";

export function ENVIRONMENTS_NESTJS_MOCK(): IEnvironment[] {
  return [
    {
      mode: "env",
      debug: false,
      logLevel: "string",
      variables: {
        appPort: 3000,
        corsOrigine: "http://localhost:4200",
        databaseConfig: {
          type: "mysql",
          host: "localhost",
          port: 3306,
          user: "string",
          password: "string",
          database: "string",
          entities: "dist/**/*.entity{.ts,.js}",
          synchronize: true,
        },
        mailer: {
          MAIL_host: "smtp.gmail.com",
          MAIL_port: "587",
          MAIL_USER: "ton-email@gmail.com",
          MAIL_PASS: "ton-mot-de-passe",
        },
        jwt: {
          JWT_SECRET: "super_secret_key",
          JWT_EXPIRES_IN: "3600",
          JWT_REFRESH_SECRET: "another_secret_key",
          JWT_REFRESH_EXPIRES_IN: "86400",
        },
      },
    },
    {
      mode: "development",
      debug: false,
      logLevel: "string",
      variables: {
        appPort: 3000,
        corsOrigine: "string",
        databaseConfig: {
          type: "mysql",
          host: "localhost",
          port: 3306,
          user: "string",
          password: "string",
          database: "string",
          entities: "dist/**/*.entity{.ts,.js}",
          synchronize: true,
        },
      },
    },
    {
      mode: "production",
      debug: false,
      logLevel: "string",
      variables: {
        appPort: 3000,
        corsOrigine: "string",
        databaseConfig: {
          type: "mysql",
          host: "localhost",
          port: 3306,
          user: "string",
          password: "string",
          database: "string",
          entities: "dist/**/*.entity{.ts,.js}",
          synchronize: true,
        },
      },
    },
    {
      mode: "test",
      debug: false,
      logLevel: "string",
      variables: {
        appPort: 3000,
        corsOrigine: "string",
        databaseConfig: {
          type: "mysql",
          host: "localhost",
          port: 3306,
          user: "string",
          password: "string",
          database: "string",
          entities: "dist/**/*.entity{.ts,.js}",
          synchronize: true,
        },
      },
    },
  ];
}
