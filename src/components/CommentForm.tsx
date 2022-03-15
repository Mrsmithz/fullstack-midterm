import { useEffect, useState } from "react"
import {
    Heading,
    Box,
    Stack,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Textarea,
    Text,
    Button,
    Flex,
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
    CloseButton
} from "@chakra-ui/react"
import CommentService from "../services/CommentService"
import IPostComment from "../types/comment/PostComment.type"
import { useQueryClient, useMutation } from "react-query"
const CommentForm : React.FC<{postId : number}> = ({postId}) => {
    const queryClient = useQueryClient()
    const [name, setName] = useState<string>('Anonymous')
    const [email, setEmail] = useState<string>('')
    const [comment, setComment] = useState<string>('')
    const [error, setError] = useState<string>('')
    const submitComment = () : void => {
        const comment_obj : IPostComment = {
            post:postId,
            author_name:name,
            author_email:email,
            author_url:'',
            content:comment
        }
        commentMutation.mutate(comment_obj)
    }
    const commentMutation = useMutation(CommentService.postComment, {
        onSuccess: () => {
            console.log('test')
            queryClient.invalidateQueries(['comment', postId])
        },
        onError: (err : any) => {
            setError(err.response.data.message)
            setTimeout(() => setError(''), 3000)
            console.log(err.response)
        }
    })
    return (
        <Stack p={3}>
            {error &&
                <Alert status='error' my={5}>
                <AlertIcon />
                <AlertTitle mr={2}>{error}</AlertTitle>
                <CloseButton position='absolute' right='8px' top='8px' onClick={() => setError('')}/>
                </Alert>
            }
            <Heading fontWeight={'300'} mb={3}>Leave a comment</Heading>
            <FormControl>
                <FormLabel htmlFor="name">Name (optional)</FormLabel>
                <Input id='name' type='text' onChange={(e) => setName(e.target.value)}/>
                <FormLabel htmlFor="email" mt={3}>Email (optional)</FormLabel>
                <Input id='email' type='email' onChange={(e) => setEmail(e.target.value)}/>
                <FormHelperText>Your email will not be published.</FormHelperText>
                <Text my={3} fontWeight={'500'}>Comment</Text>
                <Textarea onChange={(e) => setComment(e.target.value)}></Textarea>
                <Flex mt={5} flexDirection={'row-reverse'}>
                    <Button width={'100px'} color={'white'} backgroundColor={'blue.400'} onClick={submitComment}>Comment</Button>
                </Flex>
            </FormControl>
        </Stack>
    )
}

export default CommentForm