import React from 'react';
import { SafeAreaView } from 'react-native';
import WelcomeScreen from './App/screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './App/screens/ViewImageScreen/ViewImageScreen';

export default () => {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      <WelcomeScreen />
      {/* <ViewImageScreen /> */}
    </SafeAreaView>
  );
}


