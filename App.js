import * as React from 'react';
import {Button, View, Text, Image, AsyncStorage} from 'react-native';
import AuthScreen from "./screens/AuthScreen";
import {useEffect, useState} from "react";
import Loading from "./components/Loading";
import {authApi} from "./api/api";
import SplashScreen from "./screens/SplashScreen";
import instance from "./api/instance";
import {useDispatch, useSelector} from "react-redux";
import {handleLoad} from "./redux/reducers/castingsReducer";
import {setRole} from "./redux/reducers/userReducer";

export default function App() {
    const [showAuthScreen, setShowAuthScreen] = useState(false)
    const [errorText, setErrorText] = useState({auth: '', register: ''})
    const isLoading = useSelector(state => state?.castingsReducer.isLoading);
    const dispatch = useDispatch()

    const isAuth = async () => {
        try {
            const token = await AsyncStorage.getItem('token')
            if(token != 0 || !token){
                instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
                const info = await authApi.getMe()
                await AsyncStorage.setItem('user_id', info._id)
                dispatch(setRole(info.type))
            }

            setShowAuthScreen(token)

            dispatch(handleLoad(false))
        }catch (e){
            console.log(e)
        }
    }


    const singIn = async (phone, password) => {
        dispatch(handleLoad(true))
        try {
            let data = await authApi.login(phone, password)
            await AsyncStorage.setItem('token', data.token)
            isAuth()
        }catch (e){
            dispatch(handleLoad(false))
            setErrorText({auth: e})
        }

    }

    const register = async (data) => {
        dispatch(handleLoad(true))
        try {
            await authApi.registration(data)
        }catch (e){
            setErrorText({auth: e})
        }finally {
            dispatch(handleLoad(false))
        }
    }

    const singOut = async () => {
        await AsyncStorage.setItem('token', '0')
        isAuth()
    }

    useEffect(() => {
        isAuth()
    }, [])

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    return (
        <>
            {
                showAuthScreen == '0'
                    ? <AuthScreen register={register} singIn={singIn} errorText={errorText}/>
                    : <SplashScreen singOut={singOut}/>
            }
        </>
    );
}
