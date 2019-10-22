/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (


    <View style={{ flex: 2 }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'white' }}><Text style={styles.sectionTitle}>Hola</Text></View>
      <View style={{ flex: 0.5, flexDirection:'row' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'red' }}><Text style={styles.sectionTitle}>Soy</Text></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'pink' }}><Text style={styles.sectionTitle}>Joan</Text></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'green' }}><Text style={styles.sectionTitle}>Banyuls</Text></View>
      </View>
      <View style={{ flex: 0.5, flexDirection:'row' }}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}><Text style={styles.sectionTitle}>de</Text></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'steelblue' }}><Text style={styles.sectionTitle}>2º</Text></View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'orange' }}><Text style={styles.sectionTitle}>DAM</Text></View>
      </View>
    </View>







  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,

 
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
