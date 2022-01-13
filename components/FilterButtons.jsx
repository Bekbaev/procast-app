import React, {useState} from 'react';
import {StyleSheet, Text, View} from "react-native";
import {useNavigation} from "@react-navigation/native";

const FilterButtons = () => {
    let [timeFilter, setTimeFilter] = useState(0)

    let navigation = useNavigation()

    const handleTimeFilter = () => {
        if(timeFilter === 0){
            setTimeFilter(1)
        }else{
            setTimeFilter(0)
        }
    }

    const toFilterScreen = () => {
        navigation.navigate('FiltersScreen')
    }


    return (
        <View style={styles.filterButtonWrapper}>
            <Text onPress={ handleTimeFilter } style={styles.filterButton} >{timeFilter ? 'Ранние' : 'Последние'}</Text>
            <Text onPress={ toFilterScreen } style={styles.filterButton}>Фильтр</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    filterButtonWrapper: {
        backgroundColor: 'rgba(49,49,49,0.51)',
        padding: 10,
        width: '99%',
        marginLeft: '1%',
        borderRadius: 15,
        flexDirection: 'row',
        marginTop: 5,
        justifyContent: 'space-between',
        marginBottom: 10
    },
    filterButton: {
        color: '#fff',
        fontWeight: 'bold'
    },

})

export default FilterButtons;