import { z } from "zod";

// add blog schema
export const addBlogSchema = z.object({
  body: z.object({
    title: z.string({ required_error: "title is required !" }),
    message: z.string({ required_error: "message is required !" }),
  }),
});

// get blog schema

export const getBlogDetailsSchema = z.object({
  params: z.object({
    blogid: z.string({ required_error: "blog id is required !" }),
  }),
});
export type blogDetailsType = z.infer<typeof getBlogDetailsSchema>["params"];

// get user schema

export const getUserDetailsSchema = z.object({
  params: z.object({
    userid: z.string({ required_error: "user id is required !" }),
  }),
});
export type userDetailsType = z.infer<typeof getUserDetailsSchema>["params"];
