import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from "react-native";
import CastingBlock from "../components/CastingBlock";
import {useDispatch, useSelector} from "react-redux";
import {fetchMyCastings} from "../redux/reducers/asyncReducer";


export default function MyCastings({navigation}) {
    const castingsArray = useSelector(state => state.castingsReducer.myCastings);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchMyCastings())
    }, [])

    if(castingsArray.length == 0) {
        return <><Text>Тут будет загрузка</Text></>
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                { castingsArray.map(c => <CastingBlock myCasting navigation={navigation} key={c._id} casting={c} dispatch={dispatch}/>) }
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

