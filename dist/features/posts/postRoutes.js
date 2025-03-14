"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postsRouter = void 0;
const express_1 = require("express");
const postsController_1 = require("../posts/postsController");
const postValidators_1 = require("./middlewares/postValidators");
const admin_middleware_1 = require("../../global-middlewares/admin-middleware");
exports.postsRouter = (0, express_1.Router)();
exports.postsRouter.get('/posts', postsController_1.postsControllers.getPostController);
exports.postsRouter.post('/posts', ...postValidators_1.postValidators, postsController_1.postsControllers.createPostController);
exports.postsRouter.get('/posts/:id', postValidators_1.findPostValidator, postsController_1.postsControllers.findPostController);
exports.postsRouter.delete('/posts/:id', admin_middleware_1.adminMiddleware, postValidators_1.findPostValidator, postsController_1.postsControllers.deletePostController);
exports.postsRouter.put('/posts/:id', postValidators_1.findPostValidator, ...postValidators_1.postValidators, postsController_1.postsControllers.updatePostController);
