import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Platform, StyleSheet, TextInput, View } from 'react-native';
import colors from '../../config/colors';

const CustomTextInput = ({icon, width = "100%", ...otherProps}) => {
    return ( 
        <View style={[styles.container, {width }]}>
            {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium}/>}
            <TextInput {...otherProps} style={styles.textInput}/>
        </View>
     );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        fontSize: 20,
        ...Platform.select({
            ios: {
                fontFamily: "Avenir"
            },
            android: {
                fontFamily: "Roboto"
            }
        }),
        color: colors.dark
    },
    icon: {
        marginRight: 10
    }
})
 
export default CustomTextInput;