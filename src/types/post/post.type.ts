export default interface IPost {
    id: number,
    author: number,
    categories: Array<number>,
    type: string,
    tags: Array<number>,
    title: Title,
    content: Content,
    link: string,
    date: Date,
    status: string,
    excerpt:Content
}

interface Title{
    rendered: string
}

interface Content{
    protected: boolean,
    rendered: string
}