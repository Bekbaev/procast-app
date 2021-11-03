import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import GradientBlock from "../components/GradientBlock";
import ProfileCompletedBar from "../components/ProfileCompletedBar";
import {authApi} from "../api/api";
import {handleLoad} from "../redux/reducers/castingsReducer";
import {useDispatch} from "react-redux";

const ProfileScreen = () => {
    const [info, setInfo] = useState({})
    const dispatch = useDispatch()

    const getInfo = async () => {
        const response = await authApi.getMe()
        setInfo(response)
    }

    useEffect(() => {
        getInfo()
    }, [])


    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png',
                    }}
                />

                <GradientBlock marginTop="20" >
                    <Text style={[styles.mainInfoText, styles.bold]}>{info?.name}</Text>
                </GradientBlock>
                <ProfileCompletedBar percent={100} />

                <View style={[styles.infoBlock, {marginTop: 20}]}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Возраст</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>21</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Рост</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>171</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Вес</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>58</Text>
                    </GradientBlock>
                </View>

                <View style={[styles.infoBlock, {marginTop: 20}]}>
                    <View style={styles.infoBlockCategory}><Text >Типаж внешности</Text></View>

                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>Азиатский</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Цвет глаз</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>Голубые</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Цвет волос</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>Шатен</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Особые приметы или предпочтения</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>глаза темные, кожа светлая, много морщин вокруг глаз, на коже раздражение («как после бритья»), «обвисшие щеки». Нос крупный («картошкой»).</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Знания языков</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText} >Казахский, Русский, Английский</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Город</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>Алматы</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Опыт работы</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>58</Text>
                    </GradientBlock>
                </View>


                <GradientBlock marginTop="20">
                    <Text style={[styles.mainInfoText, styles.bold]}>{info?.phone}</Text>
                </GradientBlock>
                <GradientBlock marginTop="10" >
                    <Text style={[styles.mainInfoText, styles.bold]}>{info?.email}</Text>
                </GradientBlock>

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
        borderRadius: 160 / 2,
        width: 160,
        height: 160
    }
})

export default ProfileScreen;
