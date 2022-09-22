import * as React from 'react'
import {View, StyleSheet} from "react-native";
import TopBarComponent from "../components/TopBarComponent";
import PublicationsList from "../components/PublicationsList";
import {Publication} from "../constants/interfaces";
import layout from "../constants/Layout";

interface Props {
    publications: Publication[]
    nav: () => void
}

const ListScreen = (props: Props) => {
    return (
        <View style={styles.mainContainer}>
            <TopBarComponent showLogout={true} navigation={() => props.nav()}/>
            <View style={styles.listContainer}>
                <PublicationsList publications={props.publications}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {flex: 1, width: '100%', backgroundColor: layout.mainBackGround},
    listContainer: {flex: 1, paddingVertical: 10, paddingHorizontal: 14,}
})

export default ListScreen