import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';
import UpdatePerson from './UpdatePerson';
import DetailsView from './DetailsView';

const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
  },
  title1: {
      top: 10,
      left: 80,
      fontSize: 24,
  },
  title2: {
      top: 35,
      left: 82,
      fontSize: 18,
  },
  image: {
      flex: 0,
      height: 100,
      width: 333,
      backgroundColor: 'transparent',
      justifyContent: 'center',
      alignItems: 'center',
  },
  actionImage: {
      width: 70,
      height: 70,
  },
  closeIcon: {
      position: 'absolute',
      top: 5,
      left: 295,
      color: 'rgba(233,166,154,0.8)',
      backgroundColor: 'rgba(255,255,255,0)',
  },  
  icon: {
      position: 'absolute',
      top: 15,
      left: 0,
      color: 'white',
      backgroundColor: 'rgba(255,255,255,0)',
  },
  textArea: {
      flexDirection: 'row',
      paddingLeft: 20,
      paddingTop: 10,
      width: 260,
  },
  textIcons: {
      color: '#26a69a',
  },
  actionArea: {
      paddingTop: 10,
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
  },
  editIcon: {
      color: '#26a6a4',
  },
  sections: {
      flexDirection: 'row',
      paddingTop: 10,
      width: 100,
  },
  deleteIcon: {
      color: '#e9a69a'
  },
  editDeleteArea: {
      justifyContent: 'space-around',
      paddingRight: 20,
      backgroundColor: 'rgba(211, 211, 211, 0.3)'  
    },
    title3: {
        top: 10,
        left: 10,
        fontSize: 16,
    },
});

class PeopleDetail extends Component {
    renderDetails() {
        if(this.props.toUpdate) {
            return <UpdatePerson />
        } else {
            return <DetailsView />
        }
    }
  render() {
    return (
        <View>
            {this.renderDetails()}
        </View>
    );
  }
}

const mapStateToProps = state => {
  return { 
      toUpdate: state.toUpdate,
   };
};

export default connect(mapStateToProps, actions)(PeopleDetail);