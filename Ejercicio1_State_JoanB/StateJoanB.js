/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from 'react';
import { State, Text, View } from 'react-native';


class StateActividad extends Component {
  constructor(props){
    super(props);
    this.state = {x:parseInt(this.props.valueX)}
    this.state = {y:parseInt(this.props.valueY)}
  }

  componentDidMount(){

    setInterval(() => (
      this.setState(previousState => (
        { x: previousState.valueX + 1 }
      ))
    ), 100);
  
  setInterval(() => (
    this.setState(previousState => (
      { y: previousState.valueY - 1 }
    ))
  ), 100);
}

  //state object
  //state = { isShowingText: true };

  render() {
    return (
      <View>
        <Text>Mi valor es {this.state.valueX}</Text>
        <Text>Mi valor es {this.state.valueY}</Text>
      </View>
    );
    
  }
}

export default class EjercicioState extends Component {
  render() {
    return (
      <View>
        <StateActividad x="0" />
        <StateActividad y="100000000" />
      </View>
    );
  }
}















