/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Text, View} from 'react-native';

class NombreyApellidos extends Component {
  render(){
    return(
      <View>
        <Text>Tu primer nombre es {this.props.firstname}! y el apellido es {''}
        {this.props.secondname}</Text>
      </View>
    );
  }
}



export default class Estilos extends Component {
  render() {
    return(
      <View style={{justifyContent: 'center', alignItems: 'center', flex:1}}>
        <NombreyApellidos firstname='Joan' secondname='Banyuls'/>
        <NombreyApellidos firstname='Joan' secondname='Sanchez'/>
        
      </View>
    );
  }
}

