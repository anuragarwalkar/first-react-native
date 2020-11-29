import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import ListItem from '../../components/ListItem/ListItem';
import Screen from '../../components/Screen/Screen';
import ListItemSeperator from '../../components/ListItemSeperator/ListItemSeperator';
import ListItemDeleteAction from '../../components/ListItemDeleteAction/ListItemDeleteAction';

const messagesSource = [
    {
        id: 1,
        title: 'T1',
        description: 'D1',
        image: require("../../assets/AnuragArwalkar.jpg")
    },
    {
        id: 2,
        title: 'T2',
        description: 'D2',
        image: require("../../assets/AnuragArwalkar.jpg")
    },
]

const MessagesScreen = () => {

    const [messages, setMessages] = useState(messagesSource);
    const [refreshing, setRefreshing] = useState(false);

    const onDeleteAction = (item) => {
        const { id } = item;

        setMessages((messagesState) => {
            return newMessages = messagesState.filter(message => message.id !== id);
        })
    }

    return (
        <Screen>
            <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString() }
            renderItem={({item}) => <ListItem 
            onPress={() => console.log('onPress message')} title={item.title}
            subTitle={item.description}
            image={item.image}
            renderRightActions={() => < ListItemDeleteAction onPress={() => onDeleteAction(item)}/>}
            />} 
            ItemSeparatorComponent={ListItemSeperator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages((oldMessages) => {
                    return oldMessages.concat([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require("../../assets/AnuragArwalkar.jpg")
                        }
                    ])
                })
            }}
            />
        </Screen>
    )
}


export default MessagesScreen;