import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

export default function ActionCard() {
  function handlePress() {
    console.log('Pressed');
  }
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.button, , styles.learnButton]}>
        <Text style={styles.text}>Aprenda Mais</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={handlePress}
        style={[styles.button, styles.fallowButton]}>
        <Text style={styles.text}>Me Segue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  learnButton: {
    backgroundColor: 'orange',
  },
  fallowButton: {
    backgroundColor: 'blue',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
