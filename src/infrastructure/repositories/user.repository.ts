import { Injectable } from '@nestjs/common';
import { User } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/repositories/user.repository.interface';

@Injectable()
export class UserRepository implements IUserRepository {
  async findAll(): Promise<User[]> {
    return [
      new User('1', 'Meiyu'),
      new User('2', 'tsuyuni'),
    ];
  }
} 