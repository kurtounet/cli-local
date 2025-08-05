export function nestjsUserTemplate(): string {
  return `import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [];

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find(user => user.username === username);
  }

  async create(user: any): Promise<any> {
    const newUser = {
      userId: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    
    const { password, ...result } = newUser;
    return result;
  }
}`;
}
