import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactList() {
  const contacts = [
    {
      id: 7,
      email: 'michael.lawson@reqres.in',
      first_name: 'Michael',
      last_name: 'Lawson',
      avatar: 'https://reqres.in/img/faces/7-image.jpg',
    },
    {
      id: 8,
      email: 'lindsay.ferguson@reqres.in',
      first_name: 'Lindsay',
      last_name: 'Ferguson',
      avatar: 'https://reqres.in/img/faces/8-image.jpg',
    },
    {
      id: 9,
      email: 'tobias.funke@reqres.in',
      first_name: 'Tobias',
      last_name: 'Funke',
      avatar: 'https://reqres.in/img/faces/9-image.jpg',
    },
    {
      id: 10,
      email: 'byron.fields@reqres.in',
      first_name: 'Byron',
      last_name: 'Fields',
      avatar: 'https://reqres.in/img/faces/10-image.jpg',
    },
    {
      id: 11,
      email: 'george.edwards@reqres.in',
      first_name: 'George',
      last_name: 'Edwards',
      avatar: 'https://reqres.in/img/faces/11-image.jpg',
    },
    {
      id: 12,
      email: 'rachel.howell@reqres.in',
      first_name: 'Rachel',
      last_name: 'Howell',
      avatar: 'https://reqres.in/img/faces/12-image.jpg',
    },
    // Add more objects as needed
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.headingText}>Contact List</Text>
      <ScrollView style={{width: '100%'}} showsVerticalScrollIndicator={false}>
        {contacts.map(contact => (
          <View style={styles.card} key={contact.id}>
            <Image style={styles.image} source={{uri: contact.avatar}} />
            <View style={styles.text}>
              <Text style={styles.name}>
                {contact.first_name} {contact.last_name}
              </Text>
              <Text>{contact.email}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    margin: 8,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    paddingHorizontal: 16,
  },
  card: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 4,
    gap: 16,
    backgroundColor: 'lightgrey',
    marginVertical: 4,
    borderRadius: 8,
    padding: 8,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 50,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
  },
  text: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
