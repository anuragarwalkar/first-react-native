import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Card from '../../components/Card/Card';
import Screen from '../../components/Screen/Screen';
import colors from '../../config/colors';

const listings = [
    {
        id: 1,
        title: "Red Jacket For Sale",
        price: 100,
        image: require("../../assets/jacket.jpg")
    },
    {
        id: 2,
        title: "Couch In Great Condition",
        price: 200,
        image: require("../../assets/couch.jpg")
    },
]

export default () => {
    return (
        <Screen style={styles.screen}>
            <FlatList 
            data={listings}
            keyExtractor={listing => listing.id.toString()}
            renderItem={({ item }) => {
                return <Card 
                title={item.title}
                subTitle={`$ ${item.price}`}
                image={item.image}
                />
            }}
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 20,
        backgroundColor: colors.light
    }
})