import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputText = (props) => {
    return (
        <TextInput
            {...props}
            editable
            maxLength={40}
            style={styles.input}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        padding: 5,
        width: '100%',
        backgroundColor: '#dcdcdc',
        borderRadius: 10,
        marginBottom: 5
    },
})

export default InputText;
