import { useRouter } from "next/router";
import type { NextPage } from 'next'
import { useEffect } from "react";
import { useQuery } from "react-query";
import PostService from "../../src/services/PostService";
import {
    Box,
    Center,
    Heading,
    Text,
    Stack,
    Avatar,
    useColorModeValue,
    Link
} from '@chakra-ui/react'
import CountComments from "../../src/components/CountComments";
import Comments from "../../src/components/Comments";
const Post : NextPage = () => {
    const router = useRouter()
    const { slug } = router.query
    const {isLoading, isError, data, error} = useQuery(['post', slug], () => PostService.getBySlug(slug))
    useEffect(() => {
        console.log(data)
    }, [data])
    if (data){
        return (
            <Box mb={20}>
                <Center m={10} p={5}>
                    <Box maxW={'800px'}
                        w={'1000px'}
                        boxShadow={'xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <Stack>
                            <Heading textAlign={'center'} fontWeight={'400'}>
                                {data?.title.rendered}
                            </Heading>
                            <Box dangerouslySetInnerHTML={{__html:data?.content.rendered}} p={6}>
                            </Box>
                        </Stack>
                    </Box>
                </Center>
                <Center mb={5}>
                    <Box maxW={'800px'}
                        w={'1000px'}
                        boxShadow={'xl'}
                        rounded={'md'}
                        p={6}
                        overflow={'hidden'}
                    >
                        <CountComments postId={data.id} />
                    </Box>
                </Center>
                <Comments postId={data.id} />
            </Box>
        )
    }
    return (
        <Text>Loading....</Text>
    )

}

export default Post