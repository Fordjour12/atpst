import { protectedProcedure, publicProcedure } from "../lib/orpc";

export const appRouter = {
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "This is private",
      user: context.session?.user,
    };
  }),
  first: publicProcedure.handler(({ context }) => {
    return {
      user: context.session?.user,
      data:{
        id: context.session?.user?.id,
        email: context.session?.user?.email,
        name: context.session?.user?.name,
      }
    };
  }),
};
export type AppRouter = typeof appRouter;
