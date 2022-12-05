import { Blog } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import { ZodError } from "zod";
import { prisma } from "../config/DB";
import { blogDetailsType, userDetailsType } from "../zodSchema/blogSchema";

export const getAllBlogs = async (req: Request, res: Response) => {
  try {
    const getAllBlogs = await prisma.blog.findMany();
    return res.status(200).json(getAllBlogs);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server Error !",
    });
  }
};
export const getDeatilsBlogs = async (req: Request, res: Response) => {
  const { blogid } = req.params as blogDetailsType;
  try {
    const datilsBlog = await prisma.blog.findUnique({
      where: { id: blogid },
    });

    return res.status(200).json(datilsBlog);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server Error !",
    });
  }
};



export const postNewBlog = async (req: Request, res: Response) => {
  const newBlog = req.body as Blog;
  try {
    await prisma.blog.create({
      data: newBlog,
    });

    return res.status(201).json({
      message: "Blog Added !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server Error !",
    });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  const { blogid } = req.params as blogDetailsType;
  const newBlog = req.body as Blog;
  try {
    await prisma.blog.update({
      where: { id: blogid },
      data: newBlog,
    });

    return res.status(201).json({
      message: "blog updated !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server Error !",
    });
  }
};
export const deleteBlog = async (req: Request, res: Response) => {
  const { blogid } = req.params as blogDetailsType;
  try {
    await prisma.blog.delete({
      where: { id: blogid },
    });

    return res.status(200).json({
      message: "blog deleted !",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "server Error !",
    });
  }
};
