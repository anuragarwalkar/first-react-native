import React from 'react';
import { View, StyleSheet } from 'react-native';
import colors from '../../config/colors';
import {MaterialCommunityIcons} from '@expo/vector-icons';

const getStyles = (size, backgroundColor) => {
    return {
        width: size, 
        height: size, 
        borderRadius: size / 2, 
        backgroundColor}
}

export default ({name, size = 40 , backgroundColor = colors.black, iconColor = colors.white}) => {
    return (
        <View style={[getStyles(size, backgroundColor), styles.icon]}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5}/>
        </View>
    )
}


const styles = StyleSheet.create({
    icon: {
        justifyContent: "center",
        alignItems: "center"
    }
})