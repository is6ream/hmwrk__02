import { BlogInputModel, BlogViewModel } from '../../input-output-types/blogsAndPost-types';
import { BlogType } from '../../db/db';
import { db } from '../../db/db';
import { error } from 'console';


export const blogsRepository = {
    deleteAll() {
        db.blogs = []
        db.posts = []
        return db;
    },

    getAll() {
        // console.log("Тут работает")
        return db.blogs
    },

    create(blog: BlogInputModel) {
        const newBlog: BlogType = {
            id: new Date().toISOString() + Math.random(),
            name: blog.name,
            description: blog.description,
            websiteUrl: blog.websiteUrl,
        }
        db.blogs = [...db.blogs, newBlog]
        return newBlog
    },


    find(id: string) {
        return db.blogs.find(b => b.id === id)
    },

    updateBlog(id: string, updatedBlog: BlogInputModel) {
        const findBlog = db.blogs.find(b => b.id === id)
        if (!findBlog) {
            return { error: "Not found" }
        }
        findBlog.name = updatedBlog.name
        findBlog.description = updatedBlog.description
        findBlog.websiteUrl = updatedBlog.websiteUrl

        return findBlog;
    },
    delete(id: string) {
        let filteredBlogs = db.blogs.filter(b => b.id !== id)
        if (!filteredBlogs) {
            return { error: "Not found" }
        }
        db.blogs = filteredBlogs
        return filteredBlogs;
    },

    clear() {
        db.blogs = []
    }
}


