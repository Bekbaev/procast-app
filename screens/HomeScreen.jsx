import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import CastingBlock from "../components/CastingBlock";
import {useDispatch, useSelector} from "react-redux";
import {fetchCastings} from "../redux/reducers/asyncReducer";
import {searchCasting} from "../redux/reducers/castingsReducer";


export default function HomeScreen({navigation}) {
    const gradientColors = ['#dc4a5b', '#f5552b', '#f58e3c']
    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()
    const castingsArray = useSelector(state => state.castingsReducer.castings);

    const search = (text) => {
        if(text){
            dispatch(searchCasting(text))
        }else {
            dispatch(fetchCastings())
        }

        setSearchText(text)
    }

    useEffect(() => {
        dispatch(fetchCastings())
    }, [])

    if(castingsArray.length == 0) {
        return <><Text>Тут будет загрузка</Text></>
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <LinearGradient
                    colors={gradientColors}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.searchWrapper}
                >
                    <Text style={styles.searchText} >Поиск кастингов</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Поиск"
                        value={searchText}
                        onChangeText={text => search(text)}
                    />
                </LinearGradient>

                { castingsArray.map(c => <CastingBlock navigation={navigation} key={c._id} casting={c} dispatch={dispatch}/>) }
            </View >
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        width: '96%',
        marginLeft: '2%',
        borderRadius: 15,
        marginTop: 10,
    },
    searchWrapper: {
        width: '100%',
        height: 85,
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchText: {
        marginTop: -10
    },
    input: {
        height: '55%',
        width: '90%',
        backgroundColor: '#d2d2d2',
        padding: 10,
        borderRadius: 15,
        marginTop: 8
    },
    sendRequestButtonWrapper: {
        width: '100%'
    },
    sendRequestText: {
        color: '#ffffff'
    },
    sendRequestButton: {
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 10
    },
    photo: {
        width: '100%',
        height: 140,
        marginTop: 10,
        borderRadius: 15,
    },
})

