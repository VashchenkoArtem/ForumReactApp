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
export interface IPost {
    id?: number | undefined;
    title: string;
    description: string;
    image: string;
    userId: number;
    likes: number;
    tags?: ITagOnPost[];
}

export interface IPropsPostCard{
    post: IPost
}