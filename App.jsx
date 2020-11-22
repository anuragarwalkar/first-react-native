import React, { Fragment } from 'react';
import { StyleSheet } from 'react-native';
import ListItem from './App/components/ListItem/ListItem'

const App = () => {
  return (
    <Fragment>
      <ListItem title="Anruag Arwalkar" subTitle="Learning" image={require('./App/assets/AnuragArwalkar.jpg')} />
      <ListItem title="Anruag Arwalkar" subTitle="Learning" image={require('./App/assets/AnuragArwalkar.jpg')} />
    </Fragment>
  );
};

// const styles = StyleSheet.create({
  
// })

export default App;



