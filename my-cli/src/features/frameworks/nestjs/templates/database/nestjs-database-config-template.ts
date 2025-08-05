export function nestjsDatabaseConfigTemplate(projectPath: string): string {
  console.log("databaseConfig.ts du projet");
  return `import { TypeOrmModuleOptions } from '@nestjs/typeorm';
    import { ConfigService } from '@nestjs/config';

    export const databaseConfig = (
    configService: ConfigService,
): TypeOrmModuleOptions => ({
    type: 'mysql',
    host: configService.get<string>('DB_HOST'),
    port: configService.get<number>('DB_PORT'),
    username: configService.get<string>('DB_USERNAME'),
    password: configService.get<string>('DB_PASSWORD'),
    database: configService.get<string>('DB_NAME'),
    autoLoadEntities: true,
    synchronize: true,
});`;
}
