import React, { Component } from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import firebase from 'firebase';
import Login from './src/components/Login';
import Loader from './src/components/Loader';
import Navigation from './src/components/Navigation';


import { Provider } from 'react-redux';
import reducers from './src/reducers/PeopleReducer';
import Thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux'

let deviceW = Dimensions.get('window').width;
let deviceH = Dimensions.get('window').height;



const store = createStore(reducers, applyMiddleware(Thunk));

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

});




export default class App extends Component {
  state = { loggedIn: null};

  componentWillMount() {
    firebase.initializeApp({
    apiKey: "AIzaSyDx_nAHcsW3OmFjc7QU8fngqcSXauRdL18",
    authDomain: "crm-end.firebaseapp.com",
    databaseURL: "https://crm-end.firebaseio.com",

    storageBucket: "crm-end.appspot.com",
    messagingSenderId: "603307351765"
      });

      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          this.setState({ loggedIn: true });
        } else {
          this.setState({ loggedIn: false});
        }
      });
  }

  renderInitialView() {
    switch (this.state.loggedIn) {
      case true:
        return <Navigation />
      case false:
        return <Login />;
      default:
        return <Loader size="large" />;
    }
  }


   
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
           {this.renderInitialView()}
        </View>
       
      </Provider>
    );
  }
}




