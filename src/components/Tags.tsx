import { Tag, Box} from "@chakra-ui/react"
import { useQuery, useQueries } from "react-query"
import TagService from "../services/TagService"
import { useEffect } from "react"
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
                <Tag key={query?.data?.id} mx={2} colorScheme={'linkedin'}>{query?.data?.name}</Tag>
            ))}
        </Box>
    )
}

export default Tags