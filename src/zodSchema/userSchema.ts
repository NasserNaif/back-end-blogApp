import { z } from "zod";

export const loginSchema = z.object({
  body: z.object({
    username: z.string({ required_error: "username is required !" }),
    password: z.string({ required_error: "password is required !" }),
  }),
});

export type logInType = z.infer<typeof loginSchema>["body"];

export const registerSchema = z.object({
  body: z.object({
    username: z
      .string({ required_error: "username is required !" })
      .min(3, "username must be more than 2 chars"),
    password: z
      .string({ required_error: "password is required !" })
      .min(6, "password must be more than 5 chars"),
    email: z
      .string({ required_error: "email is required !" })
      .min(5, "email must be more than 4 chars"),
  }),
});
