import axios from '../axios/axios'
import IPost from '../types/post/post.type'

class PostService {
    async getAll() : Promise<Array<IPost>>{
        const result = await axios.get('/posts')
        return result.data
    }
    async getBySlug(slug : string | undefined | string[]) : Promise<IPost>{
        if (slug === undefined){
            return Promise.reject('slug is undefined')
        }
        const { data } = await axios.get('/posts')
        return data.find((post : IPost) => {
            return post.slug === slug
        })
    }
}

export default new PostService()