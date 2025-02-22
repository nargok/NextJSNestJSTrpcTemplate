import { Router, Query } from 'nestjs-trpc';
import { z } from 'zod';
import { User } from '@nestjs-trpc-next/shared';
import { UsersService } from '../../application/services/users.service';

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
});

@Router({ alias: 'users' })
export class UsersRouter {
  constructor(private usersService: UsersService) {}

  @Query({ output: z.array(userSchema) })
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }
} 