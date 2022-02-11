import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image} from "react-native";
import {castingApi} from "../api/api";


export default function UserResponse(props) {

    const toProfile = () => {
        props.navigation.navigate('UserProfileScreen', {
            id: props._id
        })
    }

    const accept = async () => {
        await castingApi.updateRequest(props.casting_id, props._id, 1)
        props.getUsers()
    }

    const decline = async () => {
        await castingApi.updateRequest(props.casting_id, props._id, 2)
        props.getUsers()
    }

    return (
        <View style={styles.responseWrapper}>
            <View style={styles.responseInfoWrapper}>
                <View style={styles.responseImageWrapper}>
                    <Image
                        style={styles.image}
                        source={{
                            uri: 'http://food-j.kz/uploads/I6st1EgaMCimage.jpg',
                        }}
                    />
                </View>
                <View style={styles.responseLeftWrapper}>
                    <Text style={styles.responseInfoName}>{props.name}</Text>
                    <View style={styles.responseInfo}>
                        <Text>Возраст: 1</Text>
                        <Text>Рост: 1</Text>
                    </View>
                </View>
            </View>

            <View style={styles.responseButtons}>
                <TouchableOpacity style={styles.responseButton}>
                    <Text onPress={toProfile} style={styles.responseButtonText}>Анкета</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.responseButton}>
                    <Text onPress={accept} style={styles.responseButtonText}>Пригласить</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.responseButton}>
                    <Text onPress={decline} style={styles.responseButtonText}>Отклонить</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    responseWrapper: {
        borderWidth: 1,
        padding: 10,
        width: '100%',
        borderRadius: 5,
        marginTop: 10,
        borderColor: 'rgba(0,0,0,0.3)',
    },
    responseImageWrapper: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center'
    },
    image: {
        borderRadius: 40,
        width: 80,
        height: 80
    },
    responseLeftWrapper: {
        marginTop: 5,
        alignItems: "center"
    },
    responseInfoName: {
        fontWeight: "bold",
        fontSize: 17,
        textAlign: "center"
    },
    responseInfo: {
        marginTop: 5
    },
    responseButtons: {
        flexDirection: 'row',
        marginTop: 15,
        borderRadius: 10
    },
    responseButton: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 2,
    },
    responseButtonText: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: '#ffffff',
        paddingVertical: 8,
        width: '95%',
        textAlign: "center",
        borderRadius: 5

    }

})

