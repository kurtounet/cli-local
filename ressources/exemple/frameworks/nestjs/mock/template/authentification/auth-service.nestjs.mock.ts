export function createAuthServiceNestjsMock() {
    return `import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from '../modules/account/account.service';
import { CreateAccountDto } from '../modules/account/dto/create-account.dto';
import { LoginDto } from './dto/login.dto';
import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Account } from '../modules/account/entity/account.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validateUser(
    email: string,
    password: string,
  ): Promise<Omit<Account, 'password'> | null> {
    const account = await this.accountService.findOneByEmail(email);

    if (account && (await bcrypt.compare(password, account.password))) {
      const { password, ...result } = account;
      return result;
    }

    return null;
  }

  async login(loginDto: LoginDto) {
    const account = await this.validateUser(loginDto.email, loginDto.password);

    if (!account) {
      throw new UnauthorizedException('Identifiants invalides');
    }

    const payload: JwtPayload = {
      email: account.email,
      sub: account.id,
      roles: account.roles,
      permissions: account.permissions,
    };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(createAccountDto: CreateAccountDto) {
    // Vérifier si l'utilisateur existe déjà
    const existingAccount = await this.accountService.findOneByEmail(
      createAccountDto.email,
    );
    if (existingAccount) {
      throw new UnauthorizedException('Cet email est déjà utilisé');
    }

    // Hash du mot de passe
    const hashedPassword = await bcrypt.hash(createAccountDto.password, 10);

    // Définir les rôles par défaut si non fournis
    const roles = createAccountDto.roles || ['user'];

    // Créer le compte
    const newAccount = await this.accountService.create({
      ...createAccountDto,
      password: hashedPassword,
      roles: roles,
    });

    // Ne pas retourner le mot de passe
    const { password, ...result } = newAccount;
    return result;
  }
}
`;
}
