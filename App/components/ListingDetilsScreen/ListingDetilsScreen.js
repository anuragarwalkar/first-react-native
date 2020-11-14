import React from 'react';
import { View, Image, Text } from 'react-native';
import AppText from '../AppText/AppText';
import styles from './Styles';
import ListItem from '../ListItem/ListItem';

const ListingDetilsScreen = () => {
    return (
        <View>
            <Image style={styles.image} source={require("../../assets/jacket.jpg")}/>
            <View style={styles.detailsContiner}>
                <AppText style={styles.title}>Red Jacket For Sale</AppText>
                <AppText style={styles.subTitle}>$100</AppText>
            </View>
            <View style={styles.userContainer}>
                <ListItem 
                image={require("../../assets/AnuragArwalkar.jpg")}
                title="Anruag Arwalkar"
                subTitle="5 Listings"
                />
            </View>
        </View>
    )
}

export default ListingDetilsScreen;