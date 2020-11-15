import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../../components/Icon/Icon';
import ListItem from '../../components/ListItem/ListItem';
import ListItemSeperator from '../../components/ListItemSeperator/ListItemSeperator';
import Screen from '../../components/Screen/Screen';
import colors from '../../config/colors';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        },
        id: "1"
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        },
        id: "2"
    }
]

export default () => {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem 
                title="Anurag Arwalkar"
                subTitle="anuragarwalkar@gmail.com"
                image={require("../../assets/AnuragArwalkar.jpg")} />
            </View>
            <View style={styles.container}>
               <FlatList 
               data={menuItems}
               keyExtractor={menuItem => menuItem.id} 
               ItemSeparatorComponent={ListItemSeperator}
               renderItem={({item}) => {
                return <ListItem 
                title={item.title}
                IconComponent={
                    <Icon 
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    />
                }
                />
               }}
               />
            </View>
            <ListItem 
            title="Log Out"
            IconComponent={
                <Icon  
                name="logout"
                backgroundColor="#ffe66d"
                />
            }
            />
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    screen: {
        backgroundColor: colors.light
    }
})