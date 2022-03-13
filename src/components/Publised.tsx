import { Text, Box, Link} from '@chakra-ui/react'
import UserService from '../services/UserService'
import IUser from '../types/user/user.type'
import { useQuery } from 'react-query'
import { useEffect } from 'react'
import moment from 'moment'

const Published : React.FC<{authorId:number, date:Date}> = ({authorId, date}) => {
    const {isLoading, isError, data, error} = useQuery<IUser>([`author`, authorId], () => UserService.getById(authorId))
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <Box textAlign={'center'}>
            <Text>
                Published By <Link href={data?.link} isExternal>{data?.name}</Link> on {moment(date).format("MMM Do YYYY")}
            </Text>
        </Box>
    )
}

export default Published