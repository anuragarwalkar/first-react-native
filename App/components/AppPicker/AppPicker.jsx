import React, { Fragment, useState } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Modal, Platform, StyleSheet, View, Button, FlatList } from 'react-native';
import colors from '../../config/colors';
import AppText from '../AppText/AppText';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import PickerItem from '../PickerItem/PickerItem';

const AppPicker = ({ icon, items, placeholder, 
    selectedItem, onSelectItem, width = "100%",
     PickerItemComponent = PickerItem, numColumns = 1 }) => {
    const [showModal, setShowModal] = useState(false);

    return ( 
        <Fragment>
        <TouchableWithoutFeedback onPress={() => setShowModal(true)}>
            <View style={[styles.container, { width }]}>
                {icon && <MaterialCommunityIcons style={styles.icon} name={icon} size={20} color={colors.medium}/>}
                <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
                <MaterialCommunityIcons name="chevron-down" size={20} color={colors.medium}/>
            </View>
        </TouchableWithoutFeedback>
        <Modal visible={showModal} animationType="slide">
            <Button onPress={() => setShowModal(false)} title="close"/>
            <FlatList 
            numColumns={numColumns}
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({item}) => (
            <PickerItemComponent 
            item={item}
            label={item.label}
            icon={icon}
            onPress={() => {
                onSelectItem(item);
                setShowModal(false);
            }}
            />)}
            />
        </Modal>
        </Fragment>
     );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.light,
        borderRadius: 25,
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        marginVertical: 10
    },
    textInput: {
        fontSize: 20,
        ...Platform.select({
            ios: {
                fontFamily: "Avenir"
            },
            android: {
                fontFamily: "Roboto"
            }
        }),
        color: colors.dark
    },
    icon: {
        marginRight: 10
    },
    text: {
        flex: 1
    }
})
 
export default AppPicker;