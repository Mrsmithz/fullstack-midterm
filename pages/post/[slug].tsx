import { useRouter } from "next/router";
import type { NextPage } from 'next'


const Post : NextPage = () => {
    const router = useRouter()
    const { slug } = router.query
    return (
        <h1>{slug}</h1>
    )
}

export default Post