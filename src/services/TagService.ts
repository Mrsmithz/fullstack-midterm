import axios from '../axios/axios'
import ITag from '../types/tag/tag.type'

class TagService {
    async getAll() : Promise<Array<ITag>> {
        const { data } = await axios.get('/tags')
        return data
    }
    async getById(id : number) : Promise<ITag> {
        const { data } = await axios.get(`/tags/${id}`)
        return data
    }
}

export default new TagService()