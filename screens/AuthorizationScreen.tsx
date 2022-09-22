import * as React from 'react'
import {View, StyleSheet, SafeAreaView} from "react-native";
import TopBarComponent from "../components/TopBarComponent";
import {RootStackScreenProps} from "../types";
import AuthorizationComponent from "../components/AuthorizationComponent";
import layout from "../constants/Layout";

const AuthorizationScreen = ({navigation}: RootStackScreenProps<'AuthorizationScreen'>) => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <TopBarComponent showLogout={false}/>

            <View style={styles.container}>
                <View style={styles.topPadding}/>
                <View style={styles.authorizationRow}>
                    <View style={styles.leftRightPaddings}/>

                    <AuthorizationComponent submit={() => navigation.replace('ListContainer')}/>

                    <View style={styles.leftRightPaddings}/>
                </View>
                <View style={styles.botPadding}/>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: '100%',
        backgroundColor: layout.mainBackGround,
    },
    container: {
        flex: 1,
        width: '100%',
        paddingHorizontal: 15,
        paddingTop: 14,
    },
    authorizationRow: {
        flex: 330,
        width: '100%',
        flexDirection: 'row',
    },
    topPadding: {flex: layout.isIPhone ? 0 : 270},
    leftRightPaddings: {flex: layout.isIPhone ? 0 : 117},
    botPadding: {flex: layout.isIPhone ? 103 : 401},
})

export default AuthorizationScreen