import React, {useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View} from "react-native";
import InputText from "../InputText";

const Auth = ({setShowRegistration, errorText, register}) => {
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [type, setType] = useState(0)

    const registerButtonPress = async () => {
        if(confirmPassword !== password){
            alert('Пароли не совпадают')
            return false
        }
        try {
            const data = {phone, password, name, email, type}
            await register(data)
            alert('Регистрация прошла успешно')
            setShowRegistration(false)
        }catch (e){

        }

    }

    return (
        <>
            <View style={styles.inputBackground}>
                <View style={styles.selectTypeWrapper}>
                    <Text onPress={() => setType(0)} style={[styles.selectTypeButton, !type && {backgroundColor: 'rgba(40,40,40,0.6)'}]}>
                            Актер
                    </Text>
                    <Text onPress={() => setType(1)} style={[styles.selectTypeButton, type && {backgroundColor: 'rgba(40,40,40,0.6)'}]}>
                            Кастинг директор
                    </Text>
                </View>
                <Text style={styles.inputTitle}>Фио</Text>
                <InputText
                    value={name}
                    onChangeText={text => setName(text)}
                />
                <Text style={styles.inputTitle}>Номер телефона</Text>
                <InputText
                    value={phone}
                    onChangeText={text => setPhone(text)}
                    keyboardType='numeric'
                />
                <Text style={styles.inputTitle}>E-mail</Text>
                <InputText
                    value={email}
                    onChangeText={text => setEmail(text)}
                />
                <Text style={styles.inputTitle}>Пароль</Text>
                <InputText
                    value={password}
                    onChangeText={text => setPassword(text)}
                    secureTextEntry={true}
                />
                <Text style={styles.inputTitle}>Подтвердите пароль</Text>
                <InputText
                    value={confirmPassword}
                    onChangeText={text => setConfirmPassword(text)}
                    secureTextEntry={true}
                />
            </View>
            {
                errorText.register != '' && <Text style={styles.error}>{errorText.register}</Text>
            }
            <View style={styles.buttons}>
                <TouchableOpacity onPress={ registerButtonPress } style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Зарегистрироваться</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonWrapper}
                    onPress={ () => setShowRegistration(false) }
                >
                    <Text style={styles.buttonText}>Выполнить вход </Text>
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
    },
    selectTypeWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: 'rgba(124,124,124,0.6)',
        borderRadius: 10
    },
    selectTypeButton: {
        flex: 1,
        textAlign: "center",
        padding: 10,
        color: '#ffffff',
        borderRadius: 10
    }
});

export default Auth;
