export function accountControllerMock() {
    return `// src/account/account.controller.ts
import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RolesGuard } from 'src/auth/guards/roles.guard';

import { AccountService } from './account.service';
import { Roles } from 'src/auth/decorators/roles.decorator';

@Controller('account')
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  @Get()
  async findAll() {
    // Cette méthode devrait être implémentée dans le service
    // Elle est montrée ici à titre d'exemple pour démontrer les guards
    return { message: 'Cette route est protégée pour les admins seulement' };
  }
}
`;
}
