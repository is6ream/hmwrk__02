import { config } from 'dotenv'
config() // добавление переменных из файла .env в process.env

export const SETTINGS = {
    // все хардкодные значения должны быть здесь, для удобства их изменения
    PORT: process.env.PORT || 6000,
    PATH: {
        BLOGS: '/hometask_02/api/blogs',
        POSTS: '/hometask_02/api/posts'
    },
    ADMIN: process.env.ADMIN || 'admin:qwerty'
}

export const STATUSES = {
    OK_200: 200,
    CREATED_201: 201,
    NO_CONTENT_204: 204,
    BAD_REQUEST_400: 400,
    NOT_FOUND_404: 404
}