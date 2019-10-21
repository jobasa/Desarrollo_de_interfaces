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

    <View style={styles.centrar}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}><Text style={styles.highlight}>Hola!</Text></Text>
              <Text style={styles.sectionDescription}>
                I am a Text in side  View.
              </Text>
              <Text style={styles.sectionDescription}>
                Who you are?
              </Text>
            </View>
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
  centrar: {
    flexDirection: "column",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    justifyContent: "center",
  },
  sectionTitle: {
    fontSize: 40,
    textAlign: "center",
    fontWeight: '600',
    color: "red",
  },
  sectionDescription: {
    marginTop: 8,
    textAlign: "center",
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
