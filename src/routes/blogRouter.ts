import express from "express";
import {
  deleteBlog,
  getAllBlogs,
  postNewBlog,
  updateBlog,
} from "../controlers/blogControler";
import validate from "../middaleware/validate";
import { protect } from "../middaleware/auth";
import { addBlogSchema, getBlogDetailsSchema } from "../zodSchema/blogSchema";

const blogRouter = express.Router();

blogRouter.get(`/`, protect, getAllBlogs);
blogRouter.post(`/`, protect, validate(addBlogSchema), postNewBlog);
blogRouter.put(`/:blogid`, protect, validate(getBlogDetailsSchema), updateBlog);
blogRouter.delete(
  `/:blogid`,
  protect,
  validate(getBlogDetailsSchema),
  deleteBlog
);

export default blogRouter;
