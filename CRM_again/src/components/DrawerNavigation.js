import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { createDrawerNavigator, createAppContainer } from 'react-navigation';
// import LogoutDrawer from './LogoutDrawer';
import Navigation from './Navigation';
// import Test from './Test';

const MyDrawerNavigator = createDrawerNavigator({
    Home: {
      screen:  Navigation
    }
  });
  const MyApp = createAppContainer(MyDrawerNavigator);

  export default class DrawerNavigation extends Component {
    render() {
      return (
        <View style={styles.container}>
          <MyApp />
        </View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  
  });