import React, {useEffect, useState} from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, ScrollView} from "react-native";
import UserResponse from "../components/UserResponse";
import {useRoute} from "@react-navigation/native";
import {castingApi} from "../api/api";


export default function UserResponsesScreen({navigation}) {
    const [users, setUsers] = useState([])
    const [usersCompleted, setUsersCompleted] = useState([])
    const [usersRemoved, setUsersRemoved] = useState([])
    const route = useRoute();
    const {id, name} = route.params;

    const getUsers = async () => {
        try {
            const response = await castingApi.getRequested(id)
            const competed = await castingApi.getRequestedCompleted(id)
            const removed = await castingApi.getRequestedRemoved(id)
            setUsers(response)
            setUsersCompleted(competed)
            setUsersRemoved(removed)
        } catch (e) {
            setUsers([])
            // alert( JSON.stringify(e) )
        }
    }


    useEffect(() => {
        setUsers([])
        getUsers()
    }, [])

    useEffect(() => {
        getUsers()
    }, [id])


    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.castingName}>Отклики на кастинг: {name}</Text>
                {
                    users && users.map(u => <UserResponse navigation={navigation} key={u._id} {...u} casting_id={id} getUsers={getUsers}/>)
                }

                {
                    usersCompleted && usersCompleted.map((u, i) => <UserResponse text={'принят'} navigation={navigation} completed key={u._id + '329'} {...u} casting_id={id} getUsers={getUsers}/>)
                }
                {
                    usersRemoved && usersRemoved.map((u, i) => <UserResponse text={'Отклонен'} navigation={navigation} completed key={u._id + '329'} {...u} casting_id={id} getUsers={getUsers}/>)
                }
            </View>
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
    castingName: {
        fontWeight: 'bold',
        fontSize: 16
    }

})

