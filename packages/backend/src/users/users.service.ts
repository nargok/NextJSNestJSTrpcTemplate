import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  async findAll() {
    const users = [
      { id: '1', name: 'Meiyu' },
      { id: '2', name: 'tsuyuni' },
    ];

    return users;
  }
}
