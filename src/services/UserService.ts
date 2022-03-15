import axios from '../axios/axios'
import IUser from '../types/user/user.type'

class UserService{
    async getAll() : Promise<Array<IUser>>{
        const { data } = await axios.get(`/users`)
        return data
    }
    async getById(authorId : number) : Promise<IUser>{
        const { data } = await axios.get(`/users/${authorId}`)
        return data
    }
}

export default new UserService()