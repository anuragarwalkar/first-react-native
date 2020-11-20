import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import Screen from '../../components/Screen/Screen';
import CustomTextInput from '../../components/CustomTextInput/CustomTextInput';
import AppButton from '../../components/Button/Button';

const LoginScreen = () => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return <Screen style={styles.container}>
        <Image 
        source={require("../../assets/logo-red.png")}
        style={styles.logo}
        />

        <CustomTextInput 
        autoCapitalize="none"
        placeholder="Email" 
        icon="email" 
        onChangeText={text => setEmail(text)}
        autoCorrect={false} 
        keyboardType="email-address"
        textContentType="emailAddress"
        />

        <CustomTextInput 
        autoCapitalize="none"
        autoCorrect={false}
        icon="lock"
        placeholder="Password"
        onChangeText={text => setPassword(text)}
        textContentType="password"
        secureTextEntry={true}
        />

        <AppButton title="Login" onPress={() => console.log('Email-Password', email, password)}/>
    </Screen>
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: "center",
        marginTop: 50,
        marginBottom: 20
    },
    container: {
        padding: 20
    }
})
 
export default LoginScreen;