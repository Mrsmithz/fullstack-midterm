import { Tag, Box} from "@chakra-ui/react"
import { useQuery, useQueries } from "react-query"
import TagService from "../services/TagService"
import { useEffect } from "react"
import { v4 as uuidv4 } from 'uuid'

const Tags : React.FC<{tagList : Array<number>}> = ({ tagList }) => {
    const tagQueries = useQueries(
        tagList.map(tagId => {
            return {
                queryKey: ['tag', tagId],
                queryFn: () => TagService.getById(tagId)
            }
        })
    )
    useEffect(() => {
        console.log(tagQueries)
    }, [tagQueries])
    return (
        <Box>
            {tagQueries.map(query => (
                <Tag key={uuidv4()} mx={2} colorScheme={'linkedin'}>{query?.data?.name}</Tag>
            ))}
        </Box>
    )
}

export default Tags