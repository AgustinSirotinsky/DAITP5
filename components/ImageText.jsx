import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const ImageText = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/central_perk_logo.jpeg')}
        style={styles.image}
      />
      <Text style={styles.text}>Try some of our populars flavors!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 540,
    height: 208,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default ImageText;
