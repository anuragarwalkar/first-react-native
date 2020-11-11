import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import backgroundImage from '../../assets/chair.jpg'
import colors from '../../config/colors';

export default () => {
    return (
        <SafeAreaView style={{width: "100%", height: "100%", backgroundColor: colors.black}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View style={{width: 50, height: 50, backgroundColor: colors.primary, top: 50}}></View>
                <View style={{width: 50, height: 50, backgroundColor: colors.secondary, top: 50}}></View>
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