import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, ScrollView} from "react-native";
import UserResponse from "../components/UserResponse";


export default function UserResponsesScreen({navigation }){
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text>Отклики на кастинг: FILM NAME</Text>

                <UserResponse />
                <UserResponse />
                <UserResponse />

            </View >
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 20,
        width: '96%',
        marginLeft: '2%',
        borderRadius: 15,
        marginTop: 10,
        backgroundColor: '#ffffff',
    },

})

