import React, {useState} from 'react';
import {StyleSheet, View, ScrollView, Text, Picker, TextInput, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import GradientBlock from "../components/GradientBlock";
import castingTypes from "../common/enums/createCasting_types";
import {useNavigation} from "@react-navigation/native";

const FiltersScreen = () => {
    const [category, setCategory] = useState('Фильм')
    const [sex, setSex] = useState('Мужской')
    const [type, setType] = useState('Роль')
    const [duration, setDuration] = useState('Смена')
    const [race, setRace] = useState('Азиатский')
    const [eye, setEye] = useState('Карий')
    const [hair, setHair] = useState('Блонд')
    const [language, setLanguage] = useState('Казахский')

    let navigation = useNavigation()

    const toHomeScreen = () => {
        navigation.navigate('Главная')
    }

    return (
        <ScrollView>
            <View style={styles.container}>
                <View
                    style={styles.searchWrapper}
                >
                <Text style={styles.blockTitle}>Фильтры </Text>

                    <GradientBlock marginTop="5">
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Город
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker}>
                                    <Picker.Item label="Павлодар" value="Pavlodar"/>
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>
                    <GradientBlock marginTop="5" colors='orange'>
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Категория проекта
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker} value={category}
                                        selectedValue={category}
                                        onValueChange={itemValue => setCategory(itemValue)}
                                >
                                    {castingTypes.category.map((el, i) => <Picker.Item key={i} label={el.name}
                                                                                       value={el.value}/>)}
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>
                    <GradientBlock marginTop="5">
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Пол
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker}
                                        selectedValue={sex}
                                        onValueChange={itemValue => setSex(itemValue)}
                                >
                                    <Picker.Item label="Мужчина" value="male"/>
                                    <Picker.Item label="Женщина" value="famale"/>
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>
                    <GradientBlock marginTop="5" colors='orange'>
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Тип работы
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker}
                                        selectedValue={type}
                                        onValueChange={itemValue => setType(itemValue)}
                                >
                                    {castingTypes.type.map((el, i) => <Picker.Item key={i} label={el.name}
                                                                                   value={el.value}/>)}
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>
                    <GradientBlock marginTop="5">
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Длительность
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker}
                                        selectedValue={duration}
                                        onValueChange={itemValue => setDuration(itemValue)}
                                >
                                    {castingTypes.duration.map((el, i) => <Picker.Item key={i} label={el.name}
                                                                                       value={el.value}/>)}
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>

                    <GradientBlock marginTop="5">
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Типаж внешности
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker}
                                        selectedValue={race}
                                        onValueChange={itemValue => setRace(itemValue)}
                                >
                                    {castingTypes.race.map((el, i) => <Picker.Item key={i} label={el.name}
                                                                                   value={el.value}/>)}
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>
                    <GradientBlock marginTop="5" colors='orange'>
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Цвет глаз
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker}
                                        selectedValue={eye}
                                        onValueChange={itemValue => setEye(itemValue)}
                                >
                                    {castingTypes.eye.map((el, i) => <Picker.Item key={i} label={el.name}
                                                                                  value={el.value}/>)}
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>
                    <GradientBlock marginTop="5">
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Цвет волос
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker}
                                        selectedValue={hair}
                                        onValueChange={itemValue => setHair(itemValue)}
                                >
                                    {castingTypes.hair.map((el, i) => <Picker.Item key={i} label={el.name}
                                                                                   value={el.value}/>)}
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>
                    <GradientBlock marginTop="5" colors='orange'>
                        <View style={styles.formWrapper}>
                            <Text style={styles.formTitle}>
                                Знание языков
                            </Text>
                            <View style={styles.pickerWrapper}>
                                <Picker style={styles.picker}
                                        selectedValue={language}
                                        onValueChange={itemValue => setLanguage(itemValue)}
                                >
                                    {castingTypes.language.map((el, i) => <Picker.Item key={i} label={el.name}
                                                                                       value={el.value}/>)}
                                </Picker>
                            </View>
                        </View>
                    </GradientBlock>

                    <View style={styles.buttons}>
                        <TouchableOpacity
                            onPress={ toHomeScreen }
                            style={styles.buttonWrapper}
                        >
                            <Text  style={styles.buttonText}>Применить</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View >
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        padding: 10,
        width: '96%',
        marginLeft: '2%',
        borderRadius: 15,
    },
    searchWrapper: {
        width: '100%',
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e7e7e7'
    },
    blockTitle: {
        backgroundColor: 'rgba(35,35,35,0.51)',
        alignItems: 'center',
        padding: 10,
        width: '100%',
        borderRadius: 15,
        marginTop: 5,
        textAlign: 'center',
        color: '#fff',
        marginBottom: 10,
        fontSize: 14,
    },
    formTitle: {
        fontSize: 18,
        width: '50%',
        color: '#ffffff'
    },
    formWrapper: {
        height: 55,
        width: '100%',
        flexDirection: 'row',
        alignItems: "center"
    },
    pickerWrapper: {
        backgroundColor: '#ffffff',
        width: '50%',
    },
    picker: {
        borderColor: 'silver',
        borderWidth: 1,
        borderRadius: 10
    },
    castingNameWrapper: {
        width: '100%',
        height: 105,
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    castingName: {
        marginTop: 10,
    },
    signsNameWrapper: {
        width: '100%',
        height: 135,
        borderRadius: 15,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 5
    },
    signsTitle: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    },
    signsInput: {
        height: '55%',
        width: '90%',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 15,
        marginTop: 8
    },
    input: {
        height: '55%',
        width: '90%',
        backgroundColor: '#ffffff',
        padding: 10,
        borderRadius: 15,
        marginTop: 8
    },
    FormInput: {
        width: '50%',
        backgroundColor: '#ffffff',
        borderRadius: 15,
        padding: 10
    },
    buttons: {
        marginTop: 20,
        width: '100%',
    },
    buttonWrapper: {
        backgroundColor: 'rgba(65,172,35,0.6)',
        padding: 14,
        marginBottom: 10,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        color: '#ffffff',
    },
    addPhotoButton: {
        marginTop: 10,
        backgroundColor: '#898989',
        width: '98%',
        padding: 14,
        marginBottom: 20,
        borderRadius: 10
    },
    addPhotoButtonText: {
        textAlign: 'center',
        color: '#ffffff',
    },
    textButtons: {
        flexDirection: 'row',
        marginTop: 10,
        width: '90%',
        justifyContent: 'space-between'
    }
})

export default FiltersScreen;