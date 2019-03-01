import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import PeopleList from '../components/PeopleList';
import AddPerson from '../components/AddPerson';
import CompanyList from '../components/CompanyList';
import Logout from '../components/Logout';


const Navigate = createBottomTabNavigator({
    PeopleList,
    AddPerson,
    CompanyList,
    Logout
},{
    tabBarOptions: {
        activeTintColor: '#fff',
        inActiveTintColor: '#80cbc4',
        swipeEnabled: true,
        showLabel: false,
        style: {
            backgroundColor: '#26a69a',
        },
    },
});




const NavigationContainer = createAppContainer(Navigate);


export default class Navigation extends Component {
    render() {
      return (
        <View style={styles.container}>
          <NavigationContainer />
        </View>
      )
    }
  }


  const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    
  })

