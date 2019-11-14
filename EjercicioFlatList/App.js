/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text,Alert,TouchableWithoutFeedback } from 'react-native';


const DATA = [
  { key: 'ALDIMIR' },
  { key: 'ALVARO' },
  { key: 'JOAN' },
  { key: 'JAVIER B' },
  { key: 'JAVIER C' },
  { key: 'ADRIAN' },
  { key: 'CLAUDIO' },
  { key: 'LUIS' },
  { key: 'JOSE A' },
  { key: 'SERGIO G' },
  { key: 'CRISTINA' },
  { key: 'JOSEP' },
  { key: 'FRANCISCO L' },
  { key: 'FRANCISCO J' },
  { key: 'GUILLERMO' },
  { key: 'RUBEN' },
  { key: 'JOSE M' },
  { key: 'ENRIC' },
  { key: 'JAUME' },
  { key: 'TOMAS O' },
  { key: 'JOSE O' },
  { key: 'CRISTOBAL' },
  { key: 'BORJA' },
  { key: 'SERGIO Q' },
  { key: 'GLORIA' },
  { key: 'CARLOS' },
  { key: 'JUAN T' },
  { key: 'SERGIO T' },
  { key: 'GRACIELA' },
];

function Item({ key }) {
  return (
    <View style={styles.item}>
     <View style={styles.button}>
       <Text style={styles.key} onPress={()=> Alert.alert({key})}>{key}</Text>
     </View>
    </View>
  );
  }
  export default class App extends React.Component {
   render(){
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item }) =>
          <Text style={styles.item} onPress={()=> Alert.alert(item.key)}>{item.key}</Text>}
      />
    </SafeAreaView>
  );}
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  item: {
    backgroundColor: '#58ACFA',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
});

//export default App;
