import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: './src/@generated',
    }),
    UsersModule,
  ],
})
export class AppModule {}
