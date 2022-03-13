import axios from '../axios/axios'
import IUser from '../types/user/user.type'

class UserService{
    async getAll() : Promise<Array<IUser>>{
        const result = await axios.get(`/users`)
        return result.data
    }
    async getById(authorId : number) : Promise<IUser>{
        const result = await axios.get(`/users/${authorId}`)
        return result.data
    }
}

export default new UserService()