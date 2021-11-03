import React, {useState} from 'react';
import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Auth from "../components/Auth/Auth";
import Register from "../components/Auth/Register";


const AuthScreen = ({singIn, errorText, register}) => {
    const [showRegistration, setShowRegistration] = useState(false)

    return (
        <View style={styles.container}>
                <ImageBackground source={require('../assets/bg.jpg')} resizeMode="stretch" style={styles.image}>
                    <Image
                        style={[styles.logo, {marginTop: showRegistration ? '15%' : '40%'}]}
                        source={require('../assets/logo.png')}
                    />
                    {
                        showRegistration
                            ? <Register register={register} errorText={errorText} setShowRegistration={setShowRegistration} singIn={singIn}/>
                            : <Auth errorText={errorText} setShowRegistration={setShowRegistration} singIn={singIn}/>
                    }

                </ImageBackground>
        </View>
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
    },
    image: {
        flex: 1,
        alignItems: "center",
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

export default AuthScreen;
