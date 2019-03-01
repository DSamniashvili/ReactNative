import React, { Component } from 'react'
import { View, Button } from 'react-native';



export default class GoBack extends Component {
  render() {
    return (
      <View>
        <Button 
        onPress={props.onPress} 
        title="Go Back"
        />
      </View>
    )
  }
}
