import { Query, Router } from 'nestjs-trpc';
import { TrpcService } from './trpc.service';
import { initTRPC } from '@trpc/server';
import { z } from 'zod';

// const t = initTRPC.create();

// export type AppRouter = ReturnType<TrpcRouter['createRouter']>;

@Router({ alias: 'hello' })
export class TrpcRouter {
  constructor(private readonly trpcService: TrpcService) {}

  @Query({ output: z.string() })
  async hello(): Promise<string> {
    return 'Hello from tRPC!';
  }
}
