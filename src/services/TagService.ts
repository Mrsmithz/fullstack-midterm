import axios from '../axios/axios'
import ITag from '../types/tag/tag.type'

class TagService {
    async getAll() : Promise<Array<ITag>> {
        const result = await axios.get('/tags')
        return result.data
    }
    async getById(id : number) : Promise<ITag> {
        const result = await axios.get(`/tags/${id}`)
        return result.data
    }
}

export default new TagService()