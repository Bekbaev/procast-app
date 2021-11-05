import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView} from "react-native";
import GradientBlock from "../components/GradientBlock";
import {LinearGradient} from "expo-linear-gradient";
import {useDispatch, useSelector} from "react-redux";
import {fetchRequestedCastings} from "../redux/reducers/asyncReducer";


export default function ResponsesScreen({navigation }) {
    const castingsArray = useSelector(state => state.castingsReducer.myCastings);
    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchRequestedCastings())
    }, [])

    if(castingsArray.length == 0) {
        return <><Text>Тут будет загрузка</Text></>
    }

    return (
        <ScrollView>
            <View style={styles.container}>

                {castingsArray.map((c, i) => <GradientBlock marginTop={i === 0 ? '0' : '20'} key={c._id} >
                    <View style={styles.responseTitle}>
                        <Text style={[styles.title, {flex: 1}]}>Кастинг на проект</Text>
                        <LinearGradient
                            colors={['#dc4a5b', '#f5552b', '#f58e3c']}
                            start={{x: 0, y: 0}}
                            end={{x: 1, y: 0}}
                            style={styles.responseTitleNameBlock}
                        >
                            <Text style={styles.responseTitleName}>{c.name}</Text>
                        </LinearGradient>
                    </View>
                    <View style={styles.responseBody}>
                        <View style={styles.responseInfoWrapper}>
                            <Text style={styles.title}>Категория проекта</Text>
                            <Text style={styles.subtitle}>{c.category}</Text>
                            <Text style={styles.title}>Дата начала сьемок</Text>
                            <Text style={styles.subtitle}>{c.start_date}</Text>
                            <Text style={styles.title}>Город</Text>
                            <Text style={styles.subtitle}>{c.city}</Text>
                        </View>

                        <View style={styles.responseStatusWrapper}>
                            <View style={[styles.responseStatus, {backgroundColor: c.status == '0' ? '#959595' : '#47d252'}]}>
                                <Text style={styles.responseStatusText}>{c.status == '0' ? 'Заяка подана' : 'Заявка принята, с вами скоро свяжутся'}</Text>
                            </View>
                        </View>
                    </View>
                </GradientBlock>)}
            </View >
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 15,
        width: '94%',
        marginLeft: '3%',
        borderRadius: 15,
        marginTop: 10,
        backgroundColor: '#ffffff',
    },
    responseStatusWrapper: {
        flex: 1,
        justifyContent: 'center'
    },
    responseStatusText: {
        textAlign: 'center',
        marginTop: -3,
        color: '#fff'
    },
    responseStatus: {
        padding: 10,
        borderRadius: 15,
        justifyContent: 'center'
    },
    responseInfoWrapper: {
        flex: 1
    },
    responseBody: {
        backgroundColor: 'rgba(255,255,255,0.8)',
        height: 150,
        width: '98%',
        borderRadius: 15,
        flexDirection: 'row',
        padding: 12,
        marginTop: 10
    },
    responseTitle:{
        backgroundColor: 'rgba(255,255,255,0.8)',
        height: 45,
        width: '98%',
        borderRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        padding: 12
    },
    title: {
        color: '#181818',
        fontSize: 14,
    },
    subtitle: {
        color: '#3e3e3e',
        fontSize: 12,
        marginTop: -2,
        marginBottom: 5
    },
    responseTitleName: {
        color: '#ffffff',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: -2
    },
    responseTitleNameBlock: {
        flex: 2,
        height: 35,
        borderRadius: 15,
        justifyContent: 'center'
    }
})

