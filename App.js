import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Card from './components/card';
import ImageText from './components/ImageText';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
      <ImageText />
      <Card />
      <StatusBar style='auto' />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10, // adjust as needed
  },
});

export default App;
