import React, {useState} from 'react';
import {Image, AsyncStorage , StyleSheet, Text, TouchableOpacity, View} from "react-native";
import InputText from "../InputText";

const Auth = ({singIn, setShowRegistration, errorText}) => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
                <View style={styles.inputBackground}>
                    <Text style={styles.inputTitle}>Номер телефона</Text>
                    <InputText
                        value={phone}
                        onChangeText={text => setPhone(text)}
                        keyboardType='numeric'
                    />
                    <Text style={styles.inputTitle}>Пароль</Text>
                    <InputText
                        value={password}
                        onChangeText={text => setPassword(text)}
                        secureTextEntry={true}
                    />
                </View>
                {
                    errorText.auth != '' && <Text style={styles.error}>{errorText.auth}</Text>
                }
                <View style={styles.textButtons}>
                    <Text>Пропустить</Text>
                    <Text>Забыли пароль ?</Text>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={ () => singIn(phone, password) }
                        style={styles.buttonWrapper}
                    >
                        <Text style={styles.buttonText}>Войти</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonWrapper}
                        onPress={ () => setShowRegistration(true) }
                    >
                        <Text style={styles.buttonText}>Регистрация</Text>
                    </TouchableOpacity>
                </View>
        </>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logo: {
        width: 260,
        height: 80,
        resizeMode: 'stretch',
        marginBottom: 40,
        marginTop: '20%'
    },
    error: {
        marginTop: 20,
        color: '#ff0000',
        backgroundColor: 'rgba(90,90,90,0.85)',
        width: '92%',
        textAlign: 'center',
        padding: 5
    },
    image: {
        flex: 1,
        alignItems: "center"
    },
    inputBackground: {
        backgroundColor: 'rgba(255,255,255,0.7)',
        padding: 20,
        width: '92%',
        borderRadius: 20
    },
    inputTitle: {
        marginBottom: 5
    },
    buttons: {
        marginTop: 20,
        width: '92%',
    },
    buttonWrapper: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        padding: 14,
        marginBottom: 10,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
    },
    textButtons: {
        flexDirection: 'row',
        marginTop: 10,
        width: '90%',
        justifyContent: 'space-between'
    }
});

export default Auth;
