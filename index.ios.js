/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Slider
} from 'react-native';
import TipSelector from './tip-selector';

export default class AwesomeProjectX extends Component {
  state = {
    amountTotal: 0,
    tipPercentage: 0.15,
    tipTotal: 0,
    split: 1,
    amountPerPerson: 0
  }
  calculateTip(value){
    this.state.amountTotal = parseInt(value);
    this.state.tipTotal= value * this.state.tipPercentage;
    this.setState(this.state);
    this.splitBill(this.state.split);
  }
  splitBill(value){
    this.state.split = value;
    this.state.amountPerPerson = (this.state.amountTotal * this.state.tipTotal)/value;
    this.setState(this.state);
  }
  updateTipPercentage(value){
    this.state.tipPercentage = value;
    this.setState(this.state);
    this.calculateTip(this.state.amountTotal);
  }
  render() {
    return (
      <View style={styles.container}>
      <View style={styles.row}>
      <Text style={styles.label}>Total Amount</Text>
      <TextInput
      style={styles.textInput}
      onChangeText={this.calculateTip.bind(this)}></TextInput>
      </View>
      <View style={styles.row}>
      <Text style={styles.label}>
      Split Amongst {this.state.split} </Text>
      <Slider
        maximumValue={10}
        minimumValue={1}
        step={1}
        value={this.state.split}
        style={styles.slider}
        onValueChange={this.splitBill.bind(this)}
         />
         </View>
         <TipSelector
         style={styles.row}
         selectionChange={this.updateTipPercentage.bind(this)}
         />
         <View style={styles.row}>
         <Text style={styles.label}>
         Amount Per Person</Text>
         <Text style={styles.amount}>
         ${this.state.amountPerPerson}
         </Text>
         </View>
         <View style={styles.row}>
      <Text style={styles.label}>
      Total Tip: </Text>
      <Text style={styles.amount}>${this.state.tipTotal}
      </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50
  },
  textInput: {
    textAlign: 'left',
    color: '#333333',
    margin: 5,
    height: 50,
    borderColor: '#60b7e2',
    borderWidth: 1,
    flex: 2
  },
  amount: {
    fontWeight: 'bold',
    textAlign: 'left',
    flex: 2
  },
  slider: {
    margin: 5,
    height: 40,
    flex: 2
  },
  label: {
    textAlign: 'right',
    margin: 10,
    flex: 1,
    color: '#60b7e2'
  },
});

AppRegistry.registerComponent('AwesomeProjectX', () => AwesomeProjectX);
