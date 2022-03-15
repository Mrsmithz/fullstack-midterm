export default interface IComment{
    id:number,
    post:number,
    parent:number,
    author:number,
    author_name:string,
    author_url:string
    date:Date,
    date_gmt:Date,
    content:Content,
    link:string,
    status:string,
    type:string,
    author_avatar_urls:IAvatar

}
interface Content{
    rendered:string
}
interface IAvatar{
    "24":string,
    "48":string,
    "96":string
}