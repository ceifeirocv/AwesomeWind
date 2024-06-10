import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function FlatCards(): JSX.Element {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardRed]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardGreen]}>
          <Text>Green</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardBlue]}>
          <Text>Blue 2</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  container: {
    flexDirection: 'row',
    flex: 1,
  },
  card: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    width: 100,
    margin: 8,
    borderRadius: 8,
  },
  cardRed: {
    backgroundColor: 'red',
  },
  cardBlue: {
    backgroundColor: 'blue',
  },
  cardGreen: {
    backgroundColor: 'green',
  },
}); // {}
