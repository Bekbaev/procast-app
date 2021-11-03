import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View, Picker, TouchableOpacity} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import GradientBlock from "../components/GradientBlock";
import castingTypes from "../common/enums/createCasting_types"
import DateTimePicker from '@react-native-community/datetimepicker';
import {Ionicons} from "@expo/vector-icons";
import InputText from "../components/InputText";
import {useDispatch} from "react-redux";
import {addCasting} from "../redux/reducers/castingsReducer";
import {createCasting} from "../redux/reducers/asyncReducer";

const CreateCasting = () => {
    const gradientColors = ['#dc4a5b', '#f5552b', '#f58e3c']
    const dispatch = useDispatch()

    const [city, setCity] = useState('Pavlodar')
    const [name, setName] = useState('')
    const [category, setCategory] = useState('film')
    const [sex, setSex] = useState('male')
    const [type, setType] = useState('role')
    const [duration, setDuration] = useState('shift')
    const [race, setRace] = useState('asian')
    const [eye, setEye] = useState('brown')
    const [hair, setHair] = useState('blond')
    const [language, setLanguage] = useState('english')
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [payment, setPayment] = useState('');


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const createNewCasting = () => {
        const newCasting = {
            'name': name,
            'payment': payment,
            'city': city,
            'start_date': `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
            'image': 'https://www.sion-consulting.com/wp-content/themes/consultix/images/no-image-found-360x250.png',
            'category': category
        }

        dispatch(createCasting(newCasting))

    }

    return (
        <ScrollView>
            {show && (
                <DateTimePicker
                    testID="dateTimePicker"
                    value={date}
                    mode={mode}
                    is24Hour={true}
                    display="default"
                    onChange={onChange}
                />
            )}

            <View style={styles.container}>
                <LinearGradient
                    colors={gradientColors}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.castingNameWrapper}
                >
                    <TextInput
                        style={styles.input}
                        value={name} onChangeText={text => setName(text)}
                    />
                    <Text style={styles.castingName} >Заполнитие
                        название проекта</Text>
                </LinearGradient>
                <GradientBlock marginTop="5" colors='orange'>
                    <View style={styles.formWrapper}>
                        <Text style={styles.formTitle}>
                            Дата начала сьемок
                        </Text>
                        <View style={styles.dateWrapper}>
                            <Text onPress={() => setShow(true)}
                                  style={styles.dateItem}> {date.getDate()}.{date.getMonth()}.{date.getFullYear()} </Text>
                            <Ionicons name="arrow-down" size={16} color="black"/>
                        </View>
                    </View>
                </GradientBlock>
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
                <GradientBlock marginTop="5" colors='orange'>
                    <View style={styles.formWrapper}>
                        <Text style={styles.formTitle}>
                            Оплата
                        </Text>
                        <TextInput
                            editable
                            maxLength={40}
                            style={styles.FormInput}
                            keyboardType='numeric'
                            value={payment}
                            onChangeText={text => setPayment(text)}
                        />
                    </View>
                </GradientBlock>
                <LinearGradient
                    colors={gradientColors}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.signsNameWrapper}
                >
                    <Text style={styles.signsTitle}>Особые приметы, предпочтения, описание проекта</Text>
                    <TextInput
                        style={styles.signsInput}
                    />

                </LinearGradient>
                <Text style={styles.castingName}>Дополнительные параметры кастинга</Text>
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
                            Рост
                        </Text>
                        <TextInput
                            editable
                            maxLength={40}
                            style={styles.FormInput}
                            keyboardType='numeric'
                        />
                    </View>
                </GradientBlock>
                <GradientBlock marginTop="5">
                    <View style={styles.formWrapper}>
                        <Text style={styles.formTitle}>
                            Вес
                        </Text>
                        <TextInput
                            editable
                            maxLength={40}
                            style={styles.FormInput}
                            keyboardType='numeric'
                        />
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
                        onPress={ createNewCasting }
                        style={styles.buttonWrapper}
                    >
                        <Text style={styles.buttonText}>Создать</Text>
                    </TouchableOpacity>
                </View>
            </View>
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
        marginTop: 10,
        backgroundColor: '#ffffff'
    },
    dateWrapper: {
        height: 40,
        backgroundColor: '#ffffff',
        width: '50%',
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: 'row',
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
    textButtons: {
        flexDirection: 'row',
        marginTop: 10,
        width: '90%',
        justifyContent: 'space-between'
    }
})


export default CreateCasting;
