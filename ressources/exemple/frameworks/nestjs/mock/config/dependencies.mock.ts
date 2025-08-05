import { I } from '@faker-js/faker/dist/airline-CBNP41sR';
import { IDependencies } from '@ frameworks/_global/interface/framework-commun.model';

export function DEPENDENCIES_NESTJS_MOCK(): IDependencies {
    return {
        packageManager: 'npm', // ou "yarn"
        prod: [
            '@nestjs/swagger',
            '@nestjs/config',
            '@nestjs/typeorm',
            '@nestjs/jwt',
            '@nestjs/passport',
            'class-validator',
            'class-transformer',
            'passport',
            'passport-jwt',
            'bcrypt',
            'mysql2',
        ],
        dev: [
            'ts-node',
            'typescript',
            '@types/node',
            '@types/express',
            '@nestjs/testing',
            '@types/jsonwebtoken',
            'typeorm-seeding faker',
            '@types/bcrypt',
            '@types/passport-jwt',
        ],
    };
}
