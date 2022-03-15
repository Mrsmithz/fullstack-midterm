import axios from '../axios/axios'
import IComment from '../types/comment/comment.type'
import IPostComment from '../types/comment/PostComment.type'

class CommentService{

    async getAll() : Promise<Array<IComment>> {
        const { data } = await axios.get('/comments')
        return data
    }
    async getByPostId(postId : number) : Promise<Array<IComment>>{
        const { data } = await axios.get('/comments')
        return data.filter((comment : IComment) => comment.post === postId)
    }
    async postComment(comment : IPostComment) : Promise<any>{
        const result = await axios.post('/comments', comment)
        return result
    }
}

export default new CommentService()