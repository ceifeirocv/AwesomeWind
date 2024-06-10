import React from 'react';
import {SafeAreaView, ScrollView, Text} from 'react-native';
import FlatCards from './components/FlatCards';
import ElevetedCards from './components/ElevetedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevetedCards />
        <FancyCard />
        <ActionCard />
        <ContactList />
      </ScrollView>
    </SafeAreaView>
  );
}
