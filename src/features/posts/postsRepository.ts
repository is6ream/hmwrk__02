import { PostInputModel } from "../../input-output-types/blogsAndPost-types";
import { PostType } from "../../db/db";
import { db } from "../../db/db";
import { title } from "process";
import { error } from "console";

export const postRepository = {
    getAll() {
        return db.posts;
    },

    createPost(post: PostInputModel) {
        const newPost = {
            id: new Date().toISOString() + Math.random(),
            title: post.title,
            shortDescription: post.shortDescription,
            content: post.content,
            blogId: post.blogId,
            blogName: post.blogName
        }

         db.posts = [...db.posts, newPost]
        return newPost;
    },

    findPost(id: string){
        return db.posts.find(p => p.id === id)
    },

    updatePost(id: string, updatedPost: PostInputModel){
        const findPost = db.posts.find(p => p.id === id)
        if(!findPost){
            return {error: "Not found!"}
        }

        findPost.title = updatedPost.title
        findPost.shortDescription = updatedPost.shortDescription
        findPost.content = updatedPost.content
        findPost.blogId = updatedPost.blogId

        return findPost
    },

    delete(id: string){
        let filteredPosts = db.posts.filter(p => p.id !== id)
        db.posts = filteredPosts;
        return filteredPosts
    }


}