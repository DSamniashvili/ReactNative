import React, { Component } from 'react'
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default class RandomNumberComponent extends Component {
    static propTypes = {
        number: PropTypes.number.isRequired,
        isDisabled: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired,
    }

    handleClick = () => {
        
        if(this.props.isDisabled) {
            return;
        }
        this.props.onPress(this.props.id);
    }
render() {

    return (
        <TouchableOpacity onPress={this.handleClick}>
          <Text style={[styles.pernumber, this.props.isDisabled && styles.isdisabled]}>{this.props.number}</Text>
          </TouchableOpacity>
      ) 
}
}

const styles = StyleSheet.create({
    pernumber: {
        margin: 20,
        width: 100,
        height: 30,
        backgroundColor: '#eca190',
        textAlign: 'center',
      },
      isdisabled: {
          opacity: 0.6,
      },
})
