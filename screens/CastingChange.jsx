import React, {useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, TextInput, View, Picker, TouchableOpacity, Image} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import GradientBlock from "../components/GradientBlock";
import castingTypes from "../common/enums/createCasting_types"
import DateTimePicker from '@react-native-community/datetimepicker';
import {Ionicons} from "@expo/vector-icons";
import {useDispatch} from "react-redux";
import {changeCasting, createCasting} from "../redux/reducers/asyncReducer";
import * as ImagePicker from "expo-image-picker";
import {useFocusEffect, useRoute} from "@react-navigation/native";
import {castingApi} from "../api/api";
import Loading from "../components/Loading";

const CastingChange = ({navigation}) => {
    const gradientColors = ['#dc4a5b', '#f5552b', '#f58e3c']
    const dispatch = useDispatch()
    const route = useRoute();
    const {id, casting_name} = route.params;

    const [city, setCity] = useState('Павлодар')
    const [name, setName] = useState(casting_name)
    const [category, setCategory] = useState('Фильм')
    const [sex, setSex] = useState('Мужской')
    const [type, setType] = useState('Роль')
    const [duration, setDuration] = useState('Смена')
    const [race, setRace] = useState('Азиатский')
    const [eye, setEye] = useState('Карий')
    const [hair, setHair] = useState('Блонд')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [language, setLanguage] = useState('Казахский')
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [signs, setSigns] = useState('');
    const [payment, setPayment] = useState('');
    const [image, setImage] = useState(null);

    const [isLoading, setIsLoading] = useState(false)


    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const getCastingInfo = async () => {
        setIsLoading(true)
        const response = await castingApi.getById(id)

        setCategory(response?.category)
        setSex(response?.gender)
        setType(response?.type)
        setDuration(response?.duration)
        setRace(response?.race)
        setEye(response?.eye)
        setHair(response?.hair)
        setHeight(response?.height)
        setWeight(response?.weight)
        setLanguage(response?.language)
        setSigns(response?.signs)
        setPayment(response?.payment)
        setImage(response?.image)
        setIsLoading(false)
    }




    useEffect(() => {
        getCastingInfo()
    }, [])

    useFocusEffect(
        React.useCallback(() => {
            getCastingInfo()
        }, [id])
    );



    const createNewCasting = () => {
        setIsLoading(true)
        const newCasting = {
            '_id': id,
            'name': name,
            'payment': payment,
            'city': city,
            'start_date': `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`,
            'category': category,
            'type': type,
            'gender': sex,
            'race': race,
            'eye': eye,
            'hair': hair,
            'language': language,
            'duration': duration,
            'weight': weight,
            'height': height,
            'signs': signs,
        }

        dispatch(changeCasting(newCasting, image))
        setIsLoading(false)
        setTimeout(() => {
            navigation.goBack()
            alert('Кастинг изменен')
        }, 3000)

    }

    const deleteCasting = async () => {
        await castingApi.deleteCasting(id)
        navigation.goBack()
        alert('Кастинг удален')
    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [6, 4],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    if(isLoading){
        return <Loading />
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
                {/*<LinearGradient*/}
                {/*    colors={gradientColors}*/}
                {/*    start={{x: 0, y: 0}}*/}
                {/*    end={{x: 1, y: 0}}*/}
                {/*    style={styles.castingNameWrapper}*/}
                {/*>*/}
                {/*    <TextInput*/}
                {/*        style={styles.input}*/}
                {/*        value={name}*/}
                {/*    />*/}
                {/*    <Text style={styles.castingName} >название проекта(изменить нельзя)</Text>*/}
                {/*</LinearGradient>*/}
                <GradientBlock marginTop="5" colors='orange'>
                    <View style={styles.formWrapper}>
                        <Text style={styles.formTitle}>
                            Дата начала сьемок
                        </Text>
                        <View style={styles.dateWrapper}>
                            <Text onPress={() => setShow(true)}
                                  style={styles.dateItem}> {date.getDate()}.{date.getMonth() + 1}.{date.getFullYear()} </Text>
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
                            <Picker style={styles.picker} selectedValue={city} onValueChange={itemValue => setCity(itemValue)}>
                                {castingTypes.city.map((el, i) => <Picker.Item key={el.city} label={el.city}
                                                                               value={el.city}/>)}
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
                                <Picker.Item label="Мужской" value="Мужской"/>
                                <Picker.Item label="Женский" value="Женский"/>
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
                <View style={styles.addPhotoButton}  >
                    <Text style={styles.addPhotoButtonText} onPress={pickImage}>Добавить фото</Text>
                </View>

                {image && <Image source={{ uri: image }} style={{ width: '96%', height: 300 }} />}
                <LinearGradient
                    colors={gradientColors}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}
                    style={styles.signsNameWrapper}
                >
                    <Text style={styles.signsTitle}>Особые приметы, предпочтения, описание проекта</Text>
                    <TextInput
                        style={styles.signsInput}
                        value={signs} onChangeText={text => setSigns(text)}
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
                            value={weight} onChangeText={text => setWeight(text)}
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
                            value={height} onChangeText={text => setHeight(text)}
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
                        <Text style={styles.buttonText}>Сохранить</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity
                        onPress={ deleteCasting }
                        style={styles.buttonWrapperDelete}
                    >
                        <Text style={styles.buttonText}>Удалить кастинг</Text>
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
    buttonWrapperDelete: {
        backgroundColor: 'rgba(198,0,0,0.6)',
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


export default CastingChange;
