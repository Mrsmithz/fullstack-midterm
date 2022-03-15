import { useQuery } from "react-query"
import { Box, Text, Heading, Center, Stack, Avatar, HStack, Divider} from "@chakra-ui/react"
import CommentService from "../services/CommentService"
import { useEffect, useState } from "react"
import IComment from "../types/comment/comment.type"
import moment from "moment"
import CommentForm from "./CommentForm"
const Comments : React.FC<{postId : number}> = ({postId}) => {
    const {isLoading, isError, data, error } = useQuery<Array<IComment>>(['comment', postId], () => CommentService.getByPostId(postId))
    const [comments, setComments] = useState<Array<IComment>>([])
    useEffect(() => {
        if (data){
            const arr : Array<IComment> = [...data]
            arr.sort(sortCommentByDate)
            setComments(arr)
        }
    }, [data])
    const sortCommentByDate = (a : IComment, b : IComment) : number => {
        return +new Date(a.date) - +new Date(b.date)
    }
    if (data){
        return (
            <Box>
                {comments.map((comment : IComment) => {
                    return (
                        <Center mb={5} key={comment.id}>
                            <Box maxW={'800px'}
                                w={'1000px'}
                                boxShadow={'xl'}
                                rounded={'md'}
                                p={6}
                                overflow={'hidden'}
                            >
                                <HStack m={3}>
                                    <Avatar src={comment.author_avatar_urls[96]}></Avatar>
                                    <Text>{comment.author_name}</Text>
                                </HStack>
                                <Text dangerouslySetInnerHTML={{__html:comment.content.rendered}} p={3}></Text>
                                <Divider/>
                                <Text p={3} fontSize={12}>{moment(comment.date).format("MMM Do YYYY")}</Text>
                            </Box>
                        </Center>
                    )
                })}
                <Center mb={5}>
                    <Box maxW={'800px'}
                        w={'1000px'}
                        boxShadow={'xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <CommentForm postId={postId}/>
                    </Box>
                </Center>
            </Box>
        )
    }
    return (
        <h1>Loading...</h1>
    )
}

export default Comments