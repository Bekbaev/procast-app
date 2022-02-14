import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from "react-native";
import GradientBlock from "../components/GradientBlock";
import ProfileCompletedBar from "../components/ProfileCompletedBar";
import {authApi} from "../api/api";
import {useRoute} from "@react-navigation/native";

const UserProfileScreen = () => {
    const [info, setInfo] = useState({})

    const route = useRoute();
    const id = route.params?.id;

    const getUserInfo = async () => {
        const response = await authApi.getUser(id)
        const profileInfo = await authApi.getProfile(id)
        alert(JSON.stringify(profileInfo))
        setInfo(response)
    }

    useEffect(() => {
       getUserInfo()
    }, [id])


    return (
        <ScrollView>
            <View style={styles.container}>
                <Image
                    style={styles.logo}
                    source={{
                        uri: 'http://food-j.kz/uploads/I6st1EgaMCimage.jpg',
                    }}
                />

                <GradientBlock marginTop="20" >
                    <Text style={[styles.mainInfoText, styles.bold]}>{info?.name}</Text>
                </GradientBlock>

                <View style={[styles.infoBlock, {marginTop: 20}]}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Возраст</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>1</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Рост</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}>1</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text style={styles.bold}>Вес</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>1</Text>
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
                        <Text style={styles.mainInfoText}>1</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Знания языков</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText} >Казахский</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Город</Text></View>
                    <GradientBlock>
                        <Text style={styles.mainInfoText}>Павлодар</Text>
                    </GradientBlock>
                </View>
                <View style={styles.infoBlock}>
                    <View style={styles.infoBlockCategory}><Text >Опыт работы</Text></View>
                    <GradientBlock colors="orange">
                        <Text style={styles.mainInfoText}></Text>
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

export default UserProfileScreen;
