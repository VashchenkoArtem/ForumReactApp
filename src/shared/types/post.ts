export interface ITag {
    id: number;
    name: string;
}
export interface ITagOnPost{
    postId: number,
    tagId: number,
    tag: {
        id: number,
        name: string
    }
}
export interface IUser{
    id: number;
    firstName: string;
    secondName: string;
    email: string;
}
export interface ILike{
    id: number;
    userId: number;
    postId: number;
    user: IUser;
    post: IPost;
}
export interface IComments{
    id: number,
    body: string,
    createdAt: Date,
    authorId: number,
    author: IUser;
    postId: number
}
export interface IPost {
    id?: number | undefined;
    title: string;
    description: string;
    image: string;
    authorId: number;
    createdBy: IUser;
    likes: ILike[];
    comments: IComments[];
    tags?: ITagOnPost[];
}

export interface IPropsPostCard{
    post: IPost
}
export interface IPostsProps {
    posts: IPost[]
}

