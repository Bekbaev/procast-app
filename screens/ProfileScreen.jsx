import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import GradientBlock from "../components/GradientBlock";
import ProfileCompletedBar from "../components/ProfileCompletedBar";
import {authApi} from "../api/api";
import Loading from "../components/Loading";
import { useIsFocused } from "@react-navigation/native";
import {useFocusEffect} from "@react-navigation/native";

const ProfileScreen = ({navigation}) => {
    const [info, setInfo] = useState({})
    const [profile, setProfile] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const getMyInfo = async () => {
        setIsLoading(true)
        const response = await authApi.getMe()
        const myProfile = await authApi.getProfile()
        setIsLoading(false)
        setProfile(myProfile)
        setInfo(response)
    }

    useEffect(() => {
        getMyInfo()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            getMyInfo()
        }, [])
    );



    if(isLoading){
        return <Loading />
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: profile ? profile?.image : 'https://simg.nicepng.com/png/small/128-1280406_view-user-icon-png-user-circle-icon-png.png',
                    }}
                />

                <GradientBlock marginTop="20" >
                    <Text style={[styles.mainInfoText, styles.bold]}>{info?.name}</Text>
                </GradientBlock>
                <ProfileCompletedBar percent={100} />
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text onPress={() => navigation.navigate('FillProfileScreen')} style={styles.buttonText}>Заполнить профиль</Text>
                </TouchableOpacity>

                <View style={[styles.infoBlock, {marginTop: 20}]}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Возраст</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}></Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Рост</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>{profile ? profile?.height : 'Не указан'}</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Вес</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>{profile ? profile?.weight : 'Не указан'}</Text>
                    </GradientBlock>
                </View>

                <View style={[styles.infoBlock, {marginTop: 20}]}>
                    <View style={styles.infoBlockCategory}><Text >Типаж внешности</Text></View>

                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>{profile ? profile?.race : 'Не указан'}</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Цвет глаз</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>{profile ? profile?.weight : 'Не указан'}</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Цвет волос</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>{profile ? profile?.hair : 'Не указан'}</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Особые приметы или предпочтения</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>{profile ? profile?.signs : 'Не указан'}</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Знания языков</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText} >{profile ? profile?.language : 'Не указан'}</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Город</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>{profile ? profile?.city : 'Не указан'}</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Опыт работы</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>{profile ? profile?.exp : 'Не указан'}</Text>
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
    },
    buttonWrapper: {
        backgroundColor: '#898989',
        width: '98%',
        padding: 14,
        borderRadius: 15,
        marginTop: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 15
    }
})

export default ProfileScreen;
