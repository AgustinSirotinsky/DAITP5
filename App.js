import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('./assets/coffe1.jpeg')}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
