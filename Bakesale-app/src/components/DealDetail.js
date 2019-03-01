import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    PanResponder,
    Animated
  } from 'react-native';

  import { priceToDollars } from '../util';


export default class DealDetail extends Component {

  // imageXPos = new Animated.Value(0);

  // imagePanResponder = PanResponder.create({
  //   onStartShouldSetPanResponder: () => true,
  //   onPanResponderMove: (evt, gestureState) => {
  //     this.imageXPos.setValue(gestureState.dx);
  //   },
  //   onPanResponderRelease: (evt, gestureState) => {
  //     console.log('released');
  //   }
  // })


    static propTypes = {
        deal: PropTypes.object.isRequired,
    }

    
  render() {
    const { deal } = this.props;
    return (
      <ScrollView style={styles.wrapper}>
        <Image 
        style={styles.dealimage}
        source={{ uri: deal.media[0] }}  />

        <View style={styles.textwrapper}>
          <Text style={styles.title}>{deal.title}</Text>
          <Text style={styles.price}>{priceToDollars(deal.price)}</Text>
          <Text style={styles.cause}>{deal.cause.name}</Text>
          <Text>Single detail</Text>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
      width: '100%',
      backgroundColor: '#fafafa',
    },
    dealimage: {
      width: '100%',
      height: 150,
    },
    textwrapper: {
      flex: 1,
      // flexDirection: 'row',
      flexWrap: 'wrap',
    },
    title: {
      fontSize: 20,
    },
    price: {
      fontWeight: 'bold',
    },

  });
