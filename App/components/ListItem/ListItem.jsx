import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

export default ({title, IconComponent,subTitle, image, onPress, renderRightActions}) => {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
            <View style={styles.container}>
               {image && <Image style={styles.image} source={image}/>}
               {IconComponent}
                <View style={styles.textContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subTitle && <AppText style={styles.subTitle}>{subTitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
        </Swipeable>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: colors.white
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    title: {
        fontWeight: "500"
    },
    subTitle: {
        color: colors.medium
    },
    textContainer: {
        marginLeft: 10,
        justifyContent: "center"
    }
})  