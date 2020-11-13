import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text } from 'react-native';
import backgroundImage from '../../assets/background.jpg';
import logo from '../../assets/logo-red.png'
import colors from '../../config/colors';
import AppButton from '../../components/Button/Button';

export default () => {
    return (
        <ImageBackground source={backgroundImage} style={styles.image}>
            <View style={styles.logoContiner}>
                <Image source={logo} style={styles.logo}></Image>
                <Text style={styles.tagLine}>Sell What You Don't Need</Text>
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title="Loginn"></AppButton>
                <AppButton title="Registerr" color="secondary"></AppButton>
            </View>
        </ImageBackground>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        alignItems: "center",
        flex: 1,
        justifyContent: "flex-end"
    },
    logo: {
        width: 100,
        height: 100
    },
    logoContiner: {
        position: "absolute",
        top: 70,
        alignItems: "center",
    },
    buttonContainer: {
        padding: 20,
        width: "100%"
    },
    tagLine: {
        fontSize: 25,
        // fontWeight: "600",
        paddingVertical: 20,
    }
  });