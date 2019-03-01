import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, TouchableHighlight } from 'react-native';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/AntDesign';


// let TouchableIcon = require('react-native-touchable-icons');

export default class LogoutDrawer extends Component {

    state = {
        pressStatus: false,
    }

    logout= () => {
        firebase.auth().signOut();
    }
    render() {
        return (
            <TouchableHighlight 
                onPress={this.logout}              
                style={
                    this.state.pressStatus
                        ? styles.iconPress
                        : styles.icon
                }    
                >
                <Icon
                    name={'logout'}
                    size={35} 
                    style={styles.icon}
                />
                
    </TouchableHighlight>
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
        paddingBottom: 10,
    },
    iconPress: {
        opacity: 1,
    }
})



