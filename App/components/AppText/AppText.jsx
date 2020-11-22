import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';

const AppText = ({children, style, ...otherProps}) => {
    return (
        <Text style={[styles.text, style]} {...otherProps}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: "Avenir"
            },
            android: {
                fontSize: 18,
                fontFamily: "Roboto"
            }
        })
    }
});

export default AppText;