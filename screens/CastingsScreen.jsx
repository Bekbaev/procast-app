import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import GradientBlock from "../components/GradientBlock";
import ProfileCompletedBar from "../components/ProfileCompletedBar";
import { castingApi} from "../api/api";
import {useDispatch} from "react-redux";
import { useRoute } from '@react-navigation/native';

const CastingScreen = () => {
    const [info, setInfo] = useState({})
    const route = useRoute();
    const { id } = route.params;

    const getInfo = async () => {
        const response = await castingApi.getById(id)

        setInfo(response)
    }

    useEffect(() => {
        getInfo()
    }, [])


    return (
        <ScrollView>
            <View style={styles.container}>
                <GradientBlock  >
                    <Text style={[styles.mainInfoText, styles.bold]}>{info?.name}</Text>
                </GradientBlock>

                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://www.sion-consulting.com/wp-content/themes/consultix/images/no-image-found-360x250.png',
                    }}
                />

                <View style={[styles.infoBlock, {marginTop: 20}]}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Категория проекта</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.category}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Город</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.city}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Тип работы</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.type}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Пол</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.gender}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Длительность</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.duration}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Оплата</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.payment}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Типаж внешности</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.race}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Рост</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.height}</Text>
                    </View>
                </View>
                <View style={[styles.infoBlock, {flexDirection: 'column',}]}>
                    <GradientBlock >
                        <Text style={[styles.mainInfoText, {fontSize: 14}]}>Особые приметы, предпочтения, описание проекта</Text>
                    </GradientBlock>
                    <View style={[styles.infoBlockCategory, {width: '100%', minHeight: 80, alignItems: 'center'}]}>
                        <Text>{info.signs} </Text>
                    </View>
                </View>
                <Text style={{marginTop: 10}}>Дополнительное описание</Text>

                <View style={[styles.infoBlock, {marginTop: 20}]}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Вес</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.weight}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Цвет глаз</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.eye}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Цвет волос</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.hair}</Text>
                    </View>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Знание языков</Text></View>
                    <View style={styles.backGroundBlock}>
                        <Text style={styles.mainInfoText}>{info.language}</Text>
                    </View>
                </View>

            </View >
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        width: '94%',
        marginLeft: '3%',
        borderRadius: 15,
        marginTop: 10,
        backgroundColor: '#ffffff',
    },
    mainInfoText: {
        fontSize: 18,
        color: '#ffffff',
        textAlign: 'center'
    },
    infoBlockWrapper: {
        marginTop: 20,
        width: '100%'
    },
    backGroundBlock: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 8,
        width: '100%',
        borderRadius: 15,
        color: '#ffffff',
        backgroundColor: 'grey'
    },
    infoBlock: {
        flex: 1,
        width: '100%',
        flexDirection: 'row',
        minHeight: 40,
        borderColor: '#e5e5e5',
        borderWidth: 1,
        borderRadius: 15,
        overflow: 'hidden'
    },
    infoBlockTop: {
        height: 10
    },
    infoBlockCategory: {
        width: '34%',
        fontSize: 14,
        flex: 2,
        justifyContent: 'center',
        paddingLeft: 10,

    },
    bold: {
        fontWeight: 'bold'
    },
    left: {
        textAlign: 'center'
    },
    logo: {
        width: '100%',
        height: 160,
        marginTop: 20
    }
})

export default CastingScreen;
