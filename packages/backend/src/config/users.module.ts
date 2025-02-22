import { Module } from '@nestjs/common';
import { UsersController } from '../presentation/controllers/users.controller';
import { UsersRouter } from '../presentation/routers/users.router';
import { UserUseCase } from '../application/usecases/user.usecase';
import { UserRepository } from '../infrastructure/repositories/user.repository';
import { USER_REPOSITORY } from '../domain/repositories/user.repository.interface';

@Module({
  controllers: [UsersController],
  providers: [
    UserUseCase,
    UsersRouter,
    {
      provide: USER_REPOSITORY,
      useClass: UserRepository,
    },
  ],
})
export class UsersModule {}
