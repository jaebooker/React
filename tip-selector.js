import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  SegmentedControlIOS,
  TextInput,
  Slider
} from 'react-native';

class TipSelector extends Component {
  state = {
    selectedIndex: 0,
    values: ['Okay 15%', 'Good 18%', 'Great 30%', 'WhatTheHell 150%'],
    percentages: ['.15','.18','.3','1.5']
  }
  static PropTypes = {
    selectionChange: React.PropTypes.func.isRequired
  }
  render(){
    return (
      <View>
      <SegmentedControlIOS
        values={this.state.values}
        selectedIndex={this.state.selectedIndex}
        onChange={(event) => {
          var _selectedIndex = event.nativeEvent.selectedSegmentIndex;
          this.setState({selectedIndex: _selectedIndex});
          this.props.selectionChange(this.state.percentages[_selectedIndex]);
        }}
        // tintColor=('#60b7e2')
        // style={styles.segmentedControl}
      />
      </View>
    )
  }
}


// const styles = StyleSheet.create({
//   segmentedControl: {
//     margin: 10,
//     height: 50
//   }
//
// )};


export default TipSelector;
