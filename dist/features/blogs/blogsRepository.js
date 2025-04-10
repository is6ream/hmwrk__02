"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.blogsRepository = void 0;
const mongo_1 = require("./../../db/mongo");
const mongodb_1 = require("mongodb");
exports.blogsRepository = {
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            const deletedBlogs = yield mongo_1.blogCollection.deleteMany({});
            return deletedBlogs;
        });
    },
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return mongo_1.blogCollection.find().toArray();
        });
    },
    createBlog(newBlog) {
        return __awaiter(this, void 0, void 0, function* () {
            const blog = {
                id: new Date().toISOString(),
                name: newBlog.name,
                description: newBlog.description,
                webSiteUrl: newBlog.webSiteUrl,
                createdAt: new Date().toISOString(),
                isMembership: true
            };
            const insertResult = yield mongo_1.blogCollection.insertOne(blog);
            return Object.assign(Object.assign({}, blog), { _id: insertResult.insertedId });
        });
    },
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return mongo_1.blogCollection.findOne({ _id: new mongodb_1.ObjectId(id) });
        });
    },
    updateBlog(id, updatedBlog) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield mongo_1.blogCollection.
                updateOne({ _id: new mongodb_1.ObjectId(id) }, { $set: updatedBlog });
            return result.matchedCount === 1;
        });
    },
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield mongo_1.blogCollection.deleteOne({ _id: new mongodb_1.ObjectId(id) });
            return result;
        });
    },
};
