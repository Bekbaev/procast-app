import React from 'react';
import {LinearGradient} from "expo-linear-gradient";
import {StyleSheet} from "react-native";

export default function GradientBlock(props) {
    const marginTop = props.marginTop | 0
    let colors = '';
    switch (props.colors) {
        case 'orange': {
            colors = ['#585858', '#767676']
            break
        }
        case 'default': {
            colors = ['#585858', '#767676']
            break
        }
        case 'red': {
            colors = ['#dc4a5b', '#f5552b', '#f58e3c']
            break
        }
        default:
            colors = ['#585858', '#767676']
    }

    return (
        <LinearGradient
            colors={colors}
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            style={[styles.gradientBlock, {marginTop: marginTop}]}
        >
            {props.children}
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradientBlock: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 8,
        width: '100%',
        borderRadius: 15,
        marginTop: 10,
        color: '#ffffff',
    }
})

