import * as React from "react";
import {Image, StyleSheet, TouchableOpacity, View} from "react-native";
import layout from "../constants/Layout";

interface Props {
    showLogout: boolean
    navigation?: () => void
}

const TopBarComponent = (props: Props) => {
    return (
        <View style={styles.topBar}>
            <Image style={styles.logoImg}
                   source={
                       layout.isIPhone
                           ? require('../assets/images/logo.png')
                           : require('../assets/images/logoIPad.png')}
            />

            <View style={{flex: 1}}/>

            {props.showLogout
                ? <TouchableOpacity onPress={() => props.navigation!()}>
                    <Image style={styles.logoutImg} source={require('../assets/images/logout.png')}/>
                </TouchableOpacity>
                : null
            }
        </View>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: '100%',
    },
    topBar: {
        height: 118,
        width: '100%',
        paddingVertical: 27,
        paddingHorizontal: layout.isIPhone ? 15 : 37,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E4B062',
    },
    logoImg: {
        height: 63,
        width: layout.isIPhone ? 70 : 273,
        resizeMode: 'contain'
    },
    logoutImg: {
        height: 56,
        width: 62,
        resizeMode: 'contain'
    }
})

export default TopBarComponent
