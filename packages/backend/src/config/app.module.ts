import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { UsersModule } from './users.module';
import { AppController } from '../presentation/controllers/app.controller';
import { AppUseCase } from '../application/usecases/app.usecase';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppUseCase],
})
export class AppModule {}
