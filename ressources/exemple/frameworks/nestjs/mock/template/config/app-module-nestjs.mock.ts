export function appModuleMock(
    entities: Array<{
        entityNamePascalCase: string;
        entityNameKebabCase: string;
    }>,
): string {
    const entitiesModules = entities.map(
        (entity) => `${entity.entityNamePascalCase}Module`,
    );
    // const modules = ['AuthModule', 'MailerCustomModule'];

    const importStatements = entitiesModules
        .map((mod) => {
            const folder = mod
                .replace('Module', '')
                .replace(/([a-z])([A-Z])/g, '$1-$2')
                .toLowerCase();
            return `import { ${mod} } from './modules/${folder}/${folder}.module';`;
        })
        .join('\n');

    const importedModules = entitiesModules.join(',\n    ');

    return `import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config'; //, ConfigService 
import { SeedModule } from './seeds/seed.module';
import { AuthModule } from './auth/auth.module';
import { AccountModule } from 'src/modules/account/account.module';
${importStatements}

@Module({
  imports: [
    SeedModule,
    AuthModule,
    AccountModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ['.env'],
    }),
    TypeOrmModule.forRoot({
      // imports: [ConfigModule],
      // inject: [ConfigService],
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'nestjs_db',
      // Charge toutes les entités dans dist/ après la compilation
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true, // à désactiver en prod !
    }),     
    ${entitiesModules.sort((a: string, b: string) => a.localeCompare(b)).join(',\n    ')},
  ],
})
export class AppModule {}
`;
}
/*
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { User } from './modules/user/entity/user.entity';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // Configuration du module avec variables d'environnement
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      // Charge toutes les entités dans dist/ après la compilation
      entities: ['dist/** *.entity{.ts,.js}'],
      synchronize: true, // à désactiver en prod !
    }),
    // TypeOrmModule.forFeature([User]),
    // Modules de l'application
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

*/
