import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './App/screens/ViewImageScreen/ViewImageScreen';
import AppText from './App/components/AppText/AppText';
import Card from './App/components/Card/Card';
import ListingDetilsScreen from './App/components/ListingDetilsScreen/ListingDetilsScreen';
import MessagesScreen from './App/screens/MessagesScreen/MessagesScreen';
import Screen from './App/components/Screen/Screen';
import Icon from './App/components/Icon/Icon';
import ListItem from './App/components/ListItem/ListItem';
import AccountScreen from './App/screens/AccountScreen/AccountScreen';
import ListingsScreen from './App/screens/ListingsScreen/ListingsScreen';
import { TextInput } from 'react-native-gesture-handler';
import CustomTextInput from './App/components/CustomTextInput/CustomTextInput';
import AppPicker from './App/components/AppPicker/AppPicker';

const categories = [
  {label: "Furniture", value: 1 },
  {label: "Clothing", value: 2 },
  {label: "Cameras", value: 3 }
]

const IconComponent = <Icon name="email" size={50} backgroundColor="red"/>
export default () => {
  const [category, setCategory] = useState()

  return (
    <Screen>
      <AppPicker selectedItem={category} 
      onSelectItem={item => {
        setCategory(item);
        }} 
      items={categories} icon="apps" placeholder="Category" />
      <CustomTextInput placeholder="Username" icon="email" />
    </Screen>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%',
    backgroundColor: '#f8f4f4'
  }
})


