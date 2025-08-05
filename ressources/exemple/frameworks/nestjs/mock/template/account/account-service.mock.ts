export function accountServiceMock(): string {
    return `// src/account/account.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Account } from './entity/account.entity';
import { CreateAccountDto } from './dto/create-account.dto';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  async findOneByEmail(email: string): Promise<Account | null> {
    return this.accountRepository.findOne({ where: { email } });
  }

  async findOneById(id: number): Promise<Account | null> {
    return this.accountRepository.findOne({ where: { id } });
  }

  async create(createAccountDto: CreateAccountDto): Promise<Account> {
    const account = this.accountRepository.create(createAccountDto);
    return this.accountRepository.save(account);
  }

  async update(id: number, updateData: Partial<Account>): Promise<Account> {
    await this.accountRepository.update(id, updateData);
    const updatedAccount = await this.findOneById(id);
    if (!updatedAccount) {
      throw new NotFoundException(\`Account with ID "\${id}" not found\`);
    }
    return updatedAccount;
  }
}

`;
}
