import { Controller } from '@nestjs/common';
import { UserUseCase } from '../../application/usecases/user.usecase';

@Controller('users')
export class UsersController {
  constructor(private readonly userUseCase: UserUseCase) {}
}
