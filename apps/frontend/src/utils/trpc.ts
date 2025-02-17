import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import { AppRouter } from '@nestjs-trpc-next/shared';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8000/trpc",
    }),
  ],
});
