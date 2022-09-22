import * as React from "react";
import {FlatList, Image, ListRenderItem, ListRenderItemInfo, View, StyleSheet} from "react-native";
import layout from "../constants/Layout";
import PublicationText from "./PublicationText";
import {Publication} from "../constants/interfaces";
import PublicationBodyText from "./PublicationBodyText";

interface Props {
    publications: Publication[]
}

const PublicationsList = (props: Props) => {

    let separator = () => {
        return <View style={{height: layout.isIPhone ? 10 : 25}}/>
    }

    let renderItem: ListRenderItem<Publication> = (itm: ListRenderItemInfo<Publication>) => {
        return (
            <View style={{
                ...styles.listItem,
                marginRight: !layout.isIPhone && itm.index % 2 === 0 ? 10 : 0,
                marginLeft: !layout.isIPhone && itm.index % 2 === 1 ? 10 : 0,
            }}>

                {layout.isIPhone
                    ? null
                    : !!itm.item.photo
                        ? <Image style={styles.img} source={{uri: itm.item.photo}}/>
                        : null
                }

                <View style={{height: layout.isIPhone || !itm.item.photo ? 0 : 22}}/>
                <PublicationText text={itm.item.name}/>

                <View style={styles.textSeparator}/>
                <PublicationText text={itm.item.company}/>

                <View style={styles.textSeparator}/>
                <PublicationText text={itm.item.posts![0].title}/>

                <View style={styles.textSeparator}/>
                <PublicationBodyText text={itm.item.posts![0].body}/>
            </View>
        )
    }

    return (
        <FlatList
            data={props.publications}
            renderItem={renderItem}
            keyExtractor={item => item.userId.toString()}
            numColumns={layout.isIPhone ? 1 : 2}
            ItemSeparatorComponent={separator}
        />
    )
}

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#27569C',
        paddingVertical: layout.isIPhone ? 12 : 25,
        paddingHorizontal: layout.isIPhone ? 17 : 25,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: layout.mainBackGround,
    },
    img: {height: 150, width: 150,},
    textSeparator: {height: layout.isIPhone ? 17 : 8},
})

export default PublicationsList