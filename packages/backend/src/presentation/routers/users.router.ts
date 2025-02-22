import { Router, Query } from 'nestjs-trpc';
import { z } from 'zod';
import { User } from '@nestjs-trpc-next/shared';
import { UserUseCase } from '../../application/usecases/user.usecase';

const userSchema = z.object({
  id: z.string(),
  name: z.string(),
});

@Router({ alias: 'users' })
export class UsersRouter {
  constructor(private userUseCase: UserUseCase) {}

  @Query({ output: z.array(userSchema) })
  async findAll(): Promise<User[]> {
    return this.userUseCase.findAll();
  }
}
