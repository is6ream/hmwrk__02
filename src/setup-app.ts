import { Express } from "express";
import { SETTINGS } from "./settings";
import { blogsRouter } from "./features/blogs/blogsRoutes";
import { postsRouter } from "./features/posts/postRoutes";
import express from 'express';

export const setupApp = async (app: Express) => {
    
    //мидлв для парсинга объектов
    app.use(express.json());
   
    //регистрация роутов
    app.use(SETTINGS.PATH.BLOGS, blogsRouter);
    app.use(SETTINGS.PATH.POSTS, postsRouter);

    return app;
};


