import React from 'react';
import { SafeAreaView } from 'react-native';
import WelcomeScreen from './src/screens/WelcomeScreen/WelcomeScreen';
import ViewImageScreen from './src/screens/ViewImageScreen/ViewImageScreen';

export default () => {
  return (
    <SafeAreaView style={{width: '100%', height: '100%'}}>
      {/* <WelcomeScreen /> */}
      <ViewImageScreen />
    </SafeAreaView>
  );
}


