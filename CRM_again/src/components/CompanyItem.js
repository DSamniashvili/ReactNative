import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { connect } from 'react-redux';
import { getTheme } from 'react-native-material-kit';
import Icon from 'react-native-vector-icons/MaterialIcons';
// import * as actions from '../actions';


const theme = getTheme();

const styles = StyleSheet.create({
    
  card: {
    marginTop: 20,
  },
  title: {
      top: 20,
      left: 80,
      fontSize: 24,
  },
  image: {
      height: 100,
  },
  action: {
      backgroundColor: 'black',
      opacity: 0.7,
      borderWidth: 1,
      borderColor: '#000',
      color: 'white',
      paddingTop: 10,
      paddingBottom: 10,
  },
  icon: {
      position: 'absolute',
      top: 15,
      left: 0,
      color: 'white',
      backgroundColor: 'rgba(255,255,255,0)',
  },

});

const CompanyItem = (props) => {
    return (
            <View>
                <View style={[theme.cardStyle, styles.card]}>
                <Image
                    source={require('../images/background.jpg')}
                    style={[theme.cardImageStyle, styles.image]}
                />
                <Icon
                    name={'business'}
                    size={65} 
                    style={styles.icon}
                />
                <Text style={[theme.cardTitleStyle, styles.title]}>{props.companies.company}</Text>
                {props.companies.names.map((name, index) => {
                    return (
                        <Text style={[theme.cardActionStyle, styles.action]} key={index}>
                            {name.first_name} {name.last_name} - Project: {name.project}
                        </Text>
                    );
                })}   
             </View>
            </View>
    );
};


export default CompanyItem;