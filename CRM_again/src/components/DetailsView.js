import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import EvilIcon from 'react-native-vector-icons/EvilIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import SimpleIcon from 'react-native-vector-icons/SimpleLineIcons';
import * as actions from '../actions';
import { Dimensions } from 'react-native';
let deviceW = Dimensions.get('window').width;
const theme = getTheme();

const styles = StyleSheet.create({
  card: {
    justifyContent: 'center',
    marginTop: 10,
    paddingBottom: 20,
    marginBottom: 20,
    borderColor: 'lightgrey',
    borderWidth: 0.5,
    width: deviceW - 40,
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
      left: 280,
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

class DetailsView extends Component {
    handleClick = (link) => {
        Linking.canOpenURL(link).then(supported => {
            if (supported) {
                Linking.openURL(link);
            } else {
                console.log('Don\'t know how to open URI: ' + link);
            }
        });
    };

    // editContact = () => {
    //     this.props.editContact(this.props.person);
    // }

  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[theme.cardStyle, styles.card]}>
          <Image 
              source={require('../images/background.jpg')}
              style={[theme.cardImageStyle, styles.image]}
          />
          <EvilIcon name={'user'} size={100} style={styles.icon}/>
          <SimpleIcon name={'close'} size={30} style={styles.closeIcon}
              onPress={() => this.props.noneSelected()} />
          <Text style={[theme.cardTitleStyle, styles.title1]}>{this.props.person.first_name} {this.props.person.last_name}</Text> 
          <Text style={[theme.cardTitleStyle, styles.title2]}>from {this.props.person.company}</Text>
          <View style={styles.textArea}>
            <MaterialIcon name={'phone'} size={40} style={styles.textIcons}/>
            <Text style={theme.cardContentStyle}>{this.props.person.phone}</Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon name={'email'} size={40} style={styles.textIcons}/>
            <Text style={theme.cardContentStyle}>{this.props.person.email}</Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon name={'assignment'} size={40} style={styles.textIcons}/>
            <Text style={theme.cardContentStyle}>{this.props.person.project}</Text>
          </View>
          <View style={styles.textArea}>
            <MaterialIcon name={'mode-edit'} size={40} style={styles.textIcons}/>
            <Text style={theme.cardContentStyle}>{this.props.person.notes}</Text>
          </View>

          {/* edit delete area */}
            <View style={styles.actionArea}>
            <TouchableOpacity style={styles.sections}
                onPress={()=> {this.props.editContact(this.props.person)}}
            >
                <MaterialIcon name={'assignment'} size={40} style={styles.editIcon}/>
                <Text style={styles.title3}>Edit</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.sections}
                onPress={()=> this.props.deleteContact(this.props.person.uid)}
            >
                <MaterialIcon name={'delete-forever'} size={40} style={styles.deleteIcon}/>
                <Text style={styles.title3}>Delete</Text>
            </TouchableOpacity>
            </View>

          <View style={styles.actionArea}>
              <TouchableOpacity
                  onPress={() => { this.handleClick(`tel:${this.props.person.phone}`)}}
              >
                  <Image source={require('../images/call.png')} style={styles.actionImage}/>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => { this.handleClick(`sms:${this.props.person.phone}`)}}
              >
                  <Image source={require('../images/sms.png')} style={styles.actionImage}/>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={() => { this.handleClick(`mailto:${this.props.person.email}`)}}
              >
                  <Image source={require('../images/email.png')} style={styles.actionImage}/>
              </TouchableOpacity>
          </View>
          <View style={styles.actionArea}>
              <Text>Call</Text>
              <Text>SMS</Text>
              <Text>Email</Text>
          </View>
          </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return { 
      person: state.selectedPerson,
      toUpdate: state.toUpdate,
   };
};

export default connect(mapStateToProps, actions)(DetailsView);