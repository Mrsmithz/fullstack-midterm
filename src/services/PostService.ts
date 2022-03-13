import axios from '../axios/axios'
import IPost from '../types/post/post.type'

class PostService {
    async getAll() : Promise<Array<IPost>>{
        const result = await axios.get('/posts')
        return result.data
    }
}

export default new PostService()