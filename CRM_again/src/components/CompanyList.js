import React, { Component } from 'react'
import { Text, View, StyleSheet, ListView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CompanyItem from './CompanyItem';
import { connect } from 'react-redux';
import _ from 'lodash';


import { Dimensions } from 'react-native';
let deviceW = Dimensions.get('window').width;

class CompanyList extends Component {
  static navigationOptions = {
    tabBarLabel: 'Companies',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name={'business'}
        size={40}
        style={[{color: tintColor}, styles.icon]}
  />
  )
}

  render() {
    
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(this.props.companies);

    return (
      <View style={styles.container}>
       <ListView 
          showsVerticalScrollIndicator={false}
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={(rowData) => 
            <CompanyItem companies={rowData} />
          }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceW - 10,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 10,
},
});


const mapStateToProps = state => {
  const people = _.map(state.people, (val, uid)=> {
      return {...val, uid};
  })

  const companies = 
      _.chain(people)
      .groupBy('company')
      .map((val, key) => {
          return {
          company: key,
          names: val
          };
      })
      .value();

      return {
          companies,
      }
}

export default connect(mapStateToProps)(CompanyList);
