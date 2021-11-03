import React from 'react';
import {View, ActivityIndicator} from "react-native";

const Loading = () => {
    return (
        <View style={{flex: 2, justifyContent: 'center', alignItems: 'center'}}>
            <ActivityIndicator size='large' color="#f5552b"/>
        </View>
    );
};

export default Loading;
