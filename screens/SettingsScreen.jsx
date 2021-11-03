import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View, Image, ScrollView} from "react-native";


export default function SettingsScreen({navigation }) {
    return (
        <ScrollView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Push-уведомление</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>О нас</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Политика конфиденциальности</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Оценить приложение</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Поделиться приложением</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonWrapper}>
                    <Text style={styles.buttonText}>Связаться с технической поддержкой</Text>
                </TouchableOpacity>
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
    buttonWrapper: {
        backgroundColor: '#898989',
        width: '98%',
        padding: 14,
        marginBottom: 20,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
    }
})

