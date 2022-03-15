import { useQuery } from "react-query";
import CategoryService from "../services/CategoryService"
import { useEffect, useState} from "react";
import ICategory from "../types/Categories/category.type";
import { HStack, Text, Link} from "@chakra-ui/react";
import { v4 as uuidv4 } from 'uuid'
import NextLink from 'next/link'

const Categories : React.FC<{categories : Array<number>}> = ({ categories }) => {
    const { isLoading, isError, data, error } = useQuery<Array<ICategory>>('categories', CategoryService.getAll)
    const [categoiresList, setCategoriesList] = useState<Array<ICategory>>([])
    useEffect(() => {
        if (data){
            const arr : Array<ICategory> = data.filter((category : ICategory) => {
                return categories.some((id : number) => {
                    return id === category.id
                })
            })
            setCategoriesList(arr)
        }
    }, [data, categories])
    return (
        <HStack>
            <Text>
                Published in
            </Text>
            {categoiresList.map((category : ICategory, index: number) => {
                if (index === categoiresList.length - 1){
                    return (
                        <NextLink key={uuidv4()} href={category.link} passHref>
                            <Link>
                                <Text as={'u'}>{category.name}</Text>
                            </Link>
                        </NextLink>
                    )
                }
                return (
                    <NextLink key={uuidv4()} href={category.link} passHref>
                        <Link>
                            <Text as={'u'}>{category.name}, </Text>
                        </Link>
                    </NextLink>
                )
            })}
        </HStack>
    )
}

export default Categories