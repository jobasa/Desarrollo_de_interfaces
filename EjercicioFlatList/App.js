/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text } from 'react-native';


const DATA = [
  {
    id: 'uno',
    title: 'ALDIMIR',
  },
  {
    id: 'dos',
    title: 'ALVARO',
  },
  {
    id: 'tres',
    title: 'JOAN',
  },
  {
    id: 'cuatro',
    title: 'JAVIER',
  },
  {
    id: 'cinco',
    title: 'JAVIER',
  },
];

function Item({ title }) {
  return (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

//export default App;
