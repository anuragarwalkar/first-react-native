import React from 'react';
import { View, ImageBackground, Image, StyleSheet, Text, SafeAreaView } from 'react-native';
import backgroundImage from '../../../assets/background.jpg';
import logo from '../../../assets/logo-red.png'

export default () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={backgroundImage} style={styles.image}>
                <Image source={logo} style={{width: 100, height: 100, top: 100}}></Image>
                <Text style={{top: 120}}>Sell What You Don't Need</Text>
          </ImageBackground>
          <View style={{width: '100%', height: 70, backgroundColor: '#fc5c65'}}></View>
          <View style={{width: '100%', height: 70, backgroundColor: '#4ECDC4'}}></View>
        </View>
    )
}


const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: "cover",
        alignItems: "center"
      },
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });