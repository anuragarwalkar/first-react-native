import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import backgroundImage from '../../../assets/chair.jpg'

export default () => {
    return (
        <SafeAreaView style={{width: "100%", height: "100%", backgroundColor: 'black'}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View style={{width: 50, height: 50, backgroundColor: '#fc5c65', top: 50}}></View>
                <View style={{width: 50, height: 50, backgroundColor: '#4ECDC4', top: 50}}></View>
            </View>
            <ImageBackground resizeMode="contain"  source={backgroundImage} style={styles.image} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        // alignItems: "center"
      },
});