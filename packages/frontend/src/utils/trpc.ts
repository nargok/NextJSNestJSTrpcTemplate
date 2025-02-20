import { createTRPCProxyClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "@nestjs-trpc-next/backend/src/@generated/server";


export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: "http://localhost:8000/trpc",
    }),
  ],
});
