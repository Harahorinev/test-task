import * as React from "react";
import layout from "../constants/Layout";
import {Text, TextInput, View, StyleSheet} from "react-native";

interface Props {
    fieldName: string
    text: string
    setText: any
    secureText: boolean
}

const LogPassInputComponent = (props: Props) => {
    return (
        <View style={styles.logPassRow}>
            <Text style={styles.logPassText}>{props.fieldName}</Text>
            <View style={styles.textInputContainer}>
                <TextInput
                    onChangeText={(text) => props.setText(text)}
                    value={props.text}
                    secureTextEntry={props.secureText}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    logPassRow: {
        height: layout.isIPhone ? 91 : 45,
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: layout.isIPhone ? 'column' : 'row',
        alignItems: layout.isIPhone ? 'flex-start' : 'center',
    },
    logPassText: {
        fontSize: 24,
        fontWeight: '800',
    },
    textInputContainer: {
        height: layout.isIPhone ? 39 : 45,
        width: layout.isIPhone ? '100%' : '67%',
        borderWidth: 4,
        borderRadius: 10,
        paddingHorizontal: 7,
        justifyContent: 'center',
        borderColor: '#27569C',
        backgroundColor: '#D9D9D9'
    }
})

export default LogPassInputComponent