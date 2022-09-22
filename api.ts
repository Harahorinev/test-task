import axios from "axios";

export const auth = (login: string, password: string) => {
    return (
        axios.post("http://localhost:3000/api/auth/login",
            {login, password})
    )
}

export const threeResponse = () => {
    let users
    let posts
    let photos

    return (
        Promise.all(
            [
                axios.get('http://localhost:3000/users').then((response) => {
                    if (response.status) {
                        users = response.data
                        return users
                    }
                }),
                axios.get('http://localhost:3000/posts').then((response) => {
                    if (response.status) {
                        posts = response.data
                        return posts
                    }
                }),
                axios.get('http://localhost:3000/photos').then((response) => {
                    if (response.status) {
                        photos = response.data
                        return photos
                    }
                })
            ]
        ).then(() => {
            return {
                users, posts, photos
            }
        })
    )
}