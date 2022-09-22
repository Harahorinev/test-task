import * as React from "react";
import {View, StyleSheet, Text, TouchableOpacity} from "react-native";
import layout from "../constants/Layout";
import LogPassInputComponent from "./LogPassInputComponent";
import {useState} from "react";
import {auth} from "../api";

interface Props {
    submit: () => void
}

const AuthorizationComponent = (props: Props) => {
    const [login, setLogin] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [error, setError] = useState<string>('')

    const authBtn = () => {
        auth(login, password).then((response) => {
            if (response.status === 200) {
                props.submit()
            }
        }).catch((err) => {
            setError(err.response.data.message)
            setTimeout(() => {
                setError('')
            }, 1000)
        })
    }

    return (
        <View style={styles.authContainer}>
            <Text style={styles.authText}>{'Authorization'}</Text>

            <View style={styles.firstSeparator}/>

            <LogPassInputComponent
                fieldName={'login'}
                text={login}
                setText={setLogin}
                secureText={false}
            />

            <View style={styles.secondSeparator}/>

            <LogPassInputComponent
                fieldName={'password'}
                text={password}
                setText={setPassword}
                secureText={true}
            />

            <View style={styles.thirdSeparator}/>

            <TouchableOpacity
                style={styles.submitBtn}
                onPress={() => authBtn()}
                disabled={!!error}
            >
                <Text style={styles.submitText}>{'Submit'}</Text>
            </TouchableOpacity>

            {error
                ? <View style={styles.toast}>
                    <Text>{error}</Text>
                </View>
                : null
            }

            <View style={styles.botPadding}/>
        </View>
    )
}

const styles = StyleSheet.create({
    authContainer: {
        height: '100%',
        flex: layout.isIPhone ? 290 : 480,
        borderWidth: 4,
        borderRadius: 4,
        borderColor: '#27569C',
        alignItems: 'center',
        paddingTop: layout.isIPhone ? 8 : 25,
        paddingBottom: layout.isIPhone ? 32 : 27,
        paddingHorizontal: layout.isIPhone ? 35 : 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        backgroundColor: layout.mainBackGround,
    },
    authText: {
        fontSize: 24,
        fontWeight: '800',
        color: '#27569C'
    },
    submitBtn: {
        height: 43,
        width: 213,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        backgroundColor: '#E4B062',
    },
    submitText: {
        fontSize: 24,
        fontWeight: '800',
    },
    firstSeparator: {flex: layout.isIPhone ? 13 : 40},
    secondSeparator: {flex: layout.isIPhone ? 13 : 25},
    thirdSeparator: {flex: layout.isIPhone ? 23 : 25},
    botPadding: {flex: 13},
    toast: {
        position: 'absolute',
        alignSelf: 'center',
        bottom: -50,
        padding: 10,
        borderRadius: 5,
        backgroundColor: 'red'
    },
})

export default AuthorizationComponent