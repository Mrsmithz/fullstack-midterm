import axios from '../axios/axios'
import ICategory from '../types/Categories/category.type';

class CategoryService{
    async getAll() : Promise<Array<ICategory>> {
        const { data } = await axios.get('/categories')
        return data
    }
    async getById(id : number) : Promise<ICategory>{
        const { data } = await axios.get(`/categories/${id}`)
        return data
    }
}

export default new CategoryService()