import { useQuery } from "react-query"
import { Box, Text, Heading} from "@chakra-ui/react"
import CommentService from "../services/CommentService"
import { useEffect } from "react"

const CountComments : React.FC<{postId : number}> = ({postId}) => {
    const {isLoading, isError, data, error } = useQuery(['comment', postId], () => CommentService.getByPostId(postId))
    useEffect(() => {
        console.log(data)
    }, [data])
    return (
        <Heading textAlign={'center'} fontWeight={'400'}>{data?.length} Comments</Heading>
    )
}

export default CountComments