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
  TextInput,
} from 'react-native';
import {
  Button,
  Alert,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

function Separator() {
  return <View style={styles.separator} />;
}


const App = () => {
  const [value, onChangeText] = React.useState('Para');
  const [value1, onChangeText1] = React.useState('Asunto');
  const [value2, onChangeText2] = React.useState('Mensaje');

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 8 }}
          onChangeText={text => onChangeText(text)}
          value={value}
        />
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, margin: 8 }}
          onChangeText1={text => onChangeText1(text)}
          value={value1}
        />

        <TextInput
          style={{ height: 400, width: 395, borderColor: 'gray', borderWidth: 1, margin: 8 }}
          multiline numberOfLines={10}
          onChangeText={text => onChangeText2(text)}
          value={value2}
        />



        <Button
          title="ENVIAR"
          color="blue"
          onPress={() => Alert.alert('Se ha enviado un correo a: ' + value)}
        />
      </View>
      <Separator />
    </SafeAreaView>
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
    fontWeight: '600',
    color: Colors.black,
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
