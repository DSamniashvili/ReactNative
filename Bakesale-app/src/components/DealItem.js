import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
  } from 'react-native';

  import { priceToDollars } from '../util';


export default class DealItem extends Component {
    static propTypes = {
        deal: PropTypes.object.isRequired,
        onPress: PropTypes.func.isRequired,
    }


    handlePress = () => {
      this.props.onPress(this.props.deal.key);
    };

  render() {
    const { deal } = this.props;
    return (
      <TouchableOpacity 
      style={styles.wrapper}
      onPress={this.handlePress}
      >
        <Image style={styles.dealimage}
        source={{ uri: deal.media[0] }}  />

        <View style={styles.textwrapper}>
          <Text style={styles.title}>{deal.title}</Text>
          <Text style={styles.price}>{priceToDollars(deal.price)}</Text>
          <Text style={styles.cause}>{deal.cause.name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
      width: '100%',
      backgroundColor: '#fafafa',
      paddingTop: 50,
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
