import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/AntDesign';


// let TouchableIcon = require('react-native-touchable-icons');
logout = () => {
    firebase.auth().signOut();
}

export default class Logout extends Component {

    static navigationOptions = {
        tabBarLabel: 'Add Person',
        tabBarIcon: ({ tintColor }) => (
            <Icon
            name={'logout'}
            size={30} 
            style={styles.icon}
            onPress={this.logout}
        />
      )
    }
}

const styles = StyleSheet.create({
    myButtonStyle: {
        position: 'absolute',
        bottom: 0,
    },
    icon: {
        color: 'red',
        opacity: 0.5,
        paddingLeft: 20,
        // paddingBottom: 10,
    },
    iconPress: {
        opacity: 1,
    }
})


