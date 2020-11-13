import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './App/screens/ViewImageScreen/ViewImageScreen';
import AppText from './App/components/AppText/AppText';
import Card from './App/components/Card/Card';

export default () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* <WelcomeScreen /> */}
      {/* <ViewImageScreen /> */}
      <Card title="Red Jacket For Sale!" subTitle="$100" image={require("./App/assets/jacket.jpg")} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%', 
    height: '100%',
    backgroundColor: '#f8f4f4',
    padding: 20,
    paddingTop: 100
  }
})


