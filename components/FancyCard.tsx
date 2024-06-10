import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={styles.container}>
        <Image
          style={styles.cardImage}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
          }}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>React Native</Text>
          <Text style={styles.cardLabel}> React Native</Text>
          <Text style={styles.cardDescription}>
            React Native is an open source framework
          </Text>
          <Text style={styles.cardFooter}>Learn More</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EAF0F1',
    borderRadius: 8,
    margin: 8,
    overflow: 'hidden',
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  cardImage: {
    // width: 200,
    height: 200,
    objectFit: 'cover',
  },
  cardBody: {
    padding: 16,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'black',
  },
  cardLabel: {
    fontSize: 16,
    color: 'black',
  },
  cardDescription: {
    fontSize: 16,
    color: 'black',
  },
  cardFooter: {
    fontSize: 16,
    color: 'black',
  },
});
