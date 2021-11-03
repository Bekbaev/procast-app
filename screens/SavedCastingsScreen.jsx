import React, {useState} from 'react';
import {StyleSheet, Text, View, ScrollView, TextInput } from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import CastingBlock from "../components/CastingBlock";
import {useDispatch, useSelector} from "react-redux";

export default function SavedCastingsScreen({navigation }) {
    const gradientColors = ['#dc4a5b', '#f5552b', '#f58e3c']
    const castingsArray = useSelector(state => state.castingsReducer.castings.filter(c => c.favorite === true));
    const dispatch = useDispatch()

    return (
        <ScrollView>
            <View style={styles.container}>
                <LinearGradient
                    colors={gradientColors}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.searchWrapper}
                >
                    <Text style={styles.searchText}>Поиск кастингов</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Поиск"
                    />
                </LinearGradient>

                {/*<View style={styles.casting}>*/}
                {/*    <LinearGradient*/}
                {/*        colors={gradientColors}*/}
                {/*        start={{x: 0, y: 0}}*/}
                {/*        end={{x: 1, y: 0}}*/}
                {/*        style={styles.castingHeader}*/}
                {/*    >*/}
                {/*        <View style={styles.castingHeaderIcon}>*/}
                {/*            <Ionicons name="menu" size={26} color="white" />*/}
                {/*        </View>*/}
                {/*        <View style={styles.castingHeaderTitleWrapper}>*/}
                {/*            <Text style={styles.castingHeaderSubtitle}>*/}
                {/*                Кастинг на проект*/}
                {/*            </Text>*/}
                {/*            <Text style={styles.castingHeaderTitle}>*/}
                {/*                Братья*/}
                {/*            </Text>*/}
                {/*        </View>*/}
                {/*        <View style={styles.castingHeaderIcon}>*/}
                {/*            <Ionicons name="star" size={26} color="red" />*/}
                {/*        </View>*/}
                {/*    </LinearGradient>*/}
                {/*</View>*/}

                { castingsArray.map(casting => <CastingBlock key={casting.id} casting={casting} dispatch={dispatch} />) }

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
    castingInfoTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    castingInfoSubtitle: {
        marginBottom: 8,
        fontWeight: 'bold',
    },
    castingInfoTitle: {
        fontSize: 16,
        marginTop: -13,
        color: '#1a1a1a'
    },
    castingInfo: {
        width: '100%',
        height: 90,
        borderRadius: 15,
        marginTop: 10,
        padding: 10,
    },
    casting: {
        backgroundColor: '#ffffff',
        padding: 5,
        borderRadius: 15,
        width: '100%',
        marginTop: 10
    },
    castingHeader: {
        width: '100%',
        height: 50,
        borderRadius: 15,
        flexDirection: 'row',
    },
    castingHeaderIcon: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        height: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    castingHeaderTitleWrapper: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },
    castingHeaderSubtitle: {
        color: '#ffffff',
        marginTop: -2
    },
    castingHeaderTitle: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: -3
    }
})

