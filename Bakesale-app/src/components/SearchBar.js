import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

export default class SearchBar extends Component {
    static propTypes = {
        searchDeals: PropTypes.func.isRequired,
    }
    state ={
        searchTerm: ''
    }

    debouncedSearchDeals = debounce(this.props.searchDeals, 300);

    handleChange = (searchTerm) => {
        this.setState({ searchTerm }, () => {
            this.debouncedSearchDeals(this.state.searchTerm);
        });
    }


  render() {
    return (
      <View>
        <TextInput
            placeholder="Search the deals"
            style={styles.search}
            onChangeText={this.handleChange}
        >
        </TextInput>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    search: {
        width: '100%',
        backgroundColor: 'grey',
    }
})
