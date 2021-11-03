import React, {useEffect} from 'react';
import {View} from "react-native";


export default function ExitScreen({singOut}) {

    useEffect(() => {
        singOut()
    }, [])

    return (
        <View>

        </View>
    );
}