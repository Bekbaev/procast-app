import React from 'react';
import {View, StyleSheet, Text} from "react-native";

const ProfileCompletedBar = ({percent}) => {
    return (
        <View style={styles.wrapper}>
            <View style={[styles.bar, {width: `${percent}%`}]} />
            <Text style={styles.percent} >Заполнено на {percent}%</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        backgroundColor: '#dbdbdb',
        borderRadius: 15,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        marginTop: 10
    },
    percent: {
        color: '#ffffff',
        fontWeight: 'bold'
    },
    bar: {
        backgroundColor: '#de5f4e',
        left: 0,
        height: '100%',
        position: 'absolute'
    }
})

export default ProfileCompletedBar;
