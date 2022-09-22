import * as React from 'react'
import {SafeAreaView, StyleSheet} from "react-native";
import {RootStackScreenProps} from "../types";
import {useEffect, useState} from "react";
import ListScreen from "./ListScreen";
import {threeResponse} from "../api";
import {Photo, Post, Publication, User, UserPosts} from "../constants/interfaces";
import layout from "../constants/Layout";

const ListContainer = ({navigation}: RootStackScreenProps<'ListContainer'>) => {
    const [publications, setPublications ] = useState<Publication[]>([])

    useEffect(() => {
        let users: null | User[] = null
        let posts: null | UserPosts[] = null
        let photos: null | Photo[] = null
        threeResponse().then((res) => {
            users = res.users
            posts = res.posts
            photos = res.photos
            if (users && posts && photos) {
                let tmpPublications: Publication[] = users.map(user => {
                    return {
                        userId: user.userId,
                        name: user.name,
                        company: user.company,
                        posts: null,
                        photo: null
                    }
                })
                tmpPublications = tmpPublications.map(publication => {
                    let updatePosts: Post[] | null = null
                    let updatePhoto: string | null = null
                    for (let i = 0; i < posts!.length; i++) {
                        if (posts![i].postId === publication.userId && posts![i].userPosts) {
                            updatePosts = posts![i].userPosts
                        }
                    }
                    for (let i = 0; i < photos!.length; i++) {
                        if (photos![i].albumId === publication.userId && photos![i].photo) {
                            updatePhoto = photos![i].photo
                        }
                    }
                    return {
                        ...publication,
                        photo: updatePhoto,
                        posts: updatePosts
                    }
                })
                setPublications(tmpPublications)
            }
        })
    }, [])

    return (
        <SafeAreaView style={styles.mainContainer}>
            <ListScreen publications={publications} nav={() => navigation.replace('AuthorizationScreen')}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        width: '100%',
        backgroundColor: layout.mainBackGround
    }
})

export default ListContainer