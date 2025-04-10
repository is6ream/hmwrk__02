import { Request, Response, Router } from "express";
import { postCollection, blogCollection } from "../../db/mongo";
import { blogsControllers } from "../../features/blogs/blogsControllers";

export const testingRouter = Router();

testingRouter.delete('/all-data', async (req: Request, res: Response) => {
    await Promise.all([
        postCollection.deleteMany(),
        blogCollection.deleteMany()
    ]);
    res.sendStatus(204)
})

