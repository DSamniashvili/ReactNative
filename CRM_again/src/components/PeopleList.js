import React, { Component } from 'react';
import { View, StyleSheet, ListView } from 'react-native';
import { connect } from 'react-redux';
import PeopleItem from './PeopleItem';
import Icon from 'react-native-vector-icons/EvilIcons';
import PeopleDetail from './PeopleDetail';
import { loadInitialContacts } from '../actions';
import _ from 'lodash';


import { Dimensions } from 'react-native';
let deviceW = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: deviceW - 20,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
  logout: {
    position: 'absolute',
    bottom: 0,
  }
});

class PeopleList extends Component {

  static navigationOptions = {
    tabBarLabel: 'People List',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name={'user'}
        size={50}
        style={[{color: tintColor}, styles.icon]}
  />
  )
}

componentWillMount() {
  this.props.loadInitialContacts();
}

  renderInitialView() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    this.dataSource = ds.cloneWithRows(this.props.people);

    if (this.props.detailView === true) {
      return (
        <PeopleDetail />
      );
    } else {
      return (
        <ListView 
        showsVerticalScrollIndicator={false}
          enableEmptySections={true}
          dataSource={this.dataSource}
          renderRow={(rowData) => 
            <PeopleItem people={rowData} />
          }
        />
      );
    }
  }



  render() {
    return (

        <View style={styles.container}>
          <View>
          {this.renderInitialView()}
        </View>
        <View style={styles.logout}>
          {/* <Logout /> */}
        </View>
      </View>


      
    );
  }
}

const mapStateToProps = state => {
  const people = _.map(state.people, (val, uid) => {
    return { ...val, uid};
  });

  return { 
    people,
    detailView: state.detailView,
 };
};

export default connect(mapStateToProps, { loadInitialContacts })(PeopleList);
