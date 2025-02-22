import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { UsersModule } from './config/users.module';
import { UsersRouter } from './presentation/routers/users.router';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
      // routers: [UsersRouter],
    }),
    UsersModule,
  ],
})
export class AppModule {}
