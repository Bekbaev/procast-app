import React, {useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, Alert} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import {Ionicons} from '@expo/vector-icons';
import {
    addToFavorite,
    removeFromFavorite,
} from "../redux/reducers/castingsReducer";
import { useSelector} from "react-redux";
import {createRequest, deleteRequest} from "../redux/reducers/asyncReducer";
import {castingApi} from "../api/api";


export default function CastingBlock({casting, dispatch, navigation, myCasting = false, change = false}) {
    const gradientColors = ['#dc4a5b', '#f5552b', '#f58e3c']
    const gradientColorsAdded = ['#e1a64f', '#ffaf2c', '#fff82a']
    const grey = ['#898989', '#898989']
    const castingId = casting._id
    const role = useSelector(state => state.userReducer.role);

    const handleRequest = () => {
        if (casting.added) {
            dispatch(deleteRequest(castingId))
        } else {
            dispatch(createRequest(castingId))
        }
    }
    const toResponses = () => {
        navigation.navigate('UserResponsesScreen', {
            id: castingId,
            name: casting.name,
        })
    }

    const toChange = () => {
        navigation.navigate('CastingChange', {
            id: castingId,
            casting_name: casting.name,
        })
    }

    const handleFavorite = () => {
        castingApi.toSavedCastings(castingId)

        if (casting.favorite) {
            dispatch(removeFromFavorite(castingId))
        } else {
            dispatch(addToFavorite(castingId))
        }
    }

    const toCastingScreen = () => {
        navigation.navigate('CastingScreen', {
            id: castingId,
        })
    }


    return (
        <View  style={styles.casting}>
            <LinearGradient
                colors={gradientColors}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.castingHeader}
            >
                <View style={styles.castingHeaderIcon} >
                    <Ionicons onPress={ toCastingScreen } name="menu" size={26} color="white"/>
                </View>
                <View style={styles.castingHeaderTitleWrapper}>
                    <Text style={styles.castingHeaderSubtitle}>
                        ?????????????? ???? ????????????
                    </Text>
                    <Text style={styles.castingHeaderTitle}>
                        {casting.name}
                    </Text>
                </View>
                <View
                    style={styles.castingHeaderIcon}
                >
                    <Ionicons onPress={handleFavorite} name="star" size={26}
                              color={casting.favorite ? 'yellow' : 'green'}/>
                </View>
            </LinearGradient>
            <LinearGradient
                colors={gradientColors}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
                style={styles.castingInfo}
            >
                <View style={styles.castingInfoTitleWrapper}>
                    <View>
                        <Text style={styles.castingInfoSubtitle}>
                            ?????????????????? ??????????????
                        </Text>
                        <Text style={styles.castingInfoTitle}>
                            {casting.category}
                        </Text>
                        <Text style={styles.castingInfoSubtitle}>
                            ????????????
                        </Text>
                        <Text style={styles.castingInfoTitle}>
                            {casting.payment} ???? ??????????
                        </Text>
                    </View>
                    <View>
                        <Text style={styles.castingInfoSubtitle}>
                            ??????????
                        </Text>
                        <Text style={styles.castingInfoTitle}>
                            {casting.city}
                        </Text>
                        <Text style={styles.castingInfoSubtitle}>
                            ???????? ???????????? ????????????
                        </Text>
                        <Text style={styles.castingInfoTitle}>
                            {casting.start_date}
                        </Text>
                    </View>
                </View>
            </LinearGradient>
            <Image
                style={styles.photo}
                source={{
                    uri: casting.image || 'https://www.sion-consulting.com/wp-content/themes/consultix/images/no-image-found-360x250.png',
                }}
            />
            {role === '0' &&
                <TouchableOpacity
                    style={styles.sendRequestButtonWrapper}
                    onPress={handleRequest}
                >
                    <LinearGradient
                        colors={casting.added ? gradientColorsAdded : grey}
                        start={{x: 0, y: 0}}
                        end={{x: 1, y: 0}}
                        style={styles.sendRequestButton}
                    >
                        <Text style={styles.sendRequestText}>{casting.added ? '???????????????? ????????????' : '?????????????????? ????????????'}</Text>
                    </LinearGradient>
                </TouchableOpacity>
            }
            {myCasting &&
                <TouchableOpacity
                    style={styles.sendRequestButtonWrapper}
                    onPress={ toResponses }
                >
                    <View
                        style={styles.toResponsesButton}
                    >
                        <Text style={styles.sendRequestText}>??????????????</Text>
                    </View>
                </TouchableOpacity>
            }
            {change &&
                <TouchableOpacity
                    style={styles.sendRequestButtonWrapper}
                    onPress={ toChange }
                >
                    <View
                        style={styles.toChangeButton}
                    >
                        <Text style={styles.sendRequestText}>????????????????</Text>
                    </View>
                </TouchableOpacity>
            }

        </View>
    );
}
const styles = StyleSheet.create({
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
    toResponsesButton: {
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 10,
        backgroundColor: 'rgba(24,140,0,0.6)'
    },
    toChangeButton: {
        width: '100%',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        marginTop: 10,
        backgroundColor: 'rgba(196,196,0,0.6)'
    },
    photo: {
        width: '100%',
        height: 140,
        marginTop: 10,
        borderRadius: 15,
    },
    castingInfoTitleWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    castingInfoSubtitle: {
        marginBottom: 8,
        fontWeight: 'bold',
        color: '#ffffff'
    },
    castingInfoTitle: {
        fontSize: 16,
        marginTop: -13,
        color: '#ffffff'
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
        marginTop: 20
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
        marginTop: -3,
        textAlign: 'center',

    }
})

