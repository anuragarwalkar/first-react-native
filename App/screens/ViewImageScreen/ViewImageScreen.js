import React from 'react';
import { View, StyleSheet, ImageBackground, SafeAreaView } from 'react-native';
import backgroundImage from '../../assets/chair.jpg'
import colors from '../../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default () => {
    return (
        <SafeAreaView style={{width: "100%", height: "100%", backgroundColor: colors.black}}>
            <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                <View style={{width: 50, height: 50, left: 30, top: 50}}>
                    <MaterialCommunityIcons name="close" color="white" size={30}/>
                </View>
                <View style={{width: 50, height: 50, right: 30, top: 50}}>
                    <MaterialCommunityIcons name="trash-can-outline" color="white" size={30}/>
                </View>
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