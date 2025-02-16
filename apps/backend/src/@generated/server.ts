import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();
const publicProcedure = t.procedure;

const appRouter = t.router({
  users: t.router({
    findAll: publicProcedure.output(z.array(z.object({
      id: z.string(),
      name: z.string(),
    }))).query(async () => "PLACEHOLDER_DO_NOT_REMOVE" as any)
  })
});
export type AppRouter = typeof appRouter;

