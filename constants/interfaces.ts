export interface Publication {
    userId: number
    name: string
    company: string
    posts: Post[] | null
    photo: string | null
}

export interface User {
    userId: number
    name: string
    company: string
}

export interface UserPosts {
    postId: number
    userPosts: Post[]

}

export interface Post {
    title: string
    body: string
}

export interface Photo {
    albumId: number,
    photo: string
}