import { I } from '@faker-js/faker/dist/airline-CBNP41sR';
import { IFramework } from '@ frameworks/_global/interface/framework-commun.model';

export function databaseSourceNestjsMock(
    thisProjectConfig: IFramework,
): string {
    console.log('databaseConfig.ts du projet');
    return `import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

export const getDatabaseConfig = (
  configService: ConfigService,
): TypeOrmModuleOptions => ({
  type: 'mysql',
  host: configService.get<string>('DB_HOST', 'localhost'),
  port: parseInt(configService.get<string>('DB_PORT', '3306')),
  username: configService.get<string>('DB_USERNAME', 'root'),
  password: configService.get<string>('DB_PASSWORD', ''),
  database: configService.get<string>('DB_DATABASE', 'nestjs_db'),
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true, // Désactiver en production !
  autoLoadEntities: true,
  logging: ['error', 'query'],
});
`;
}
