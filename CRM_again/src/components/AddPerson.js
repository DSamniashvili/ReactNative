import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKColor, MKTextField } from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


class AddPerson extends Component {
  static navigationOptions = {
    tabBarLabel: 'Add Person',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name={'plus'}
        size={50}
        style={[{color: tintColor}, styles.icon]}
  />
  )
}

  onFormSubmit() {
    const { first_name, last_name, phone,  email, company, project, notes } = this.props;

    this.props.createNewContact({ first_name, last_name, phone,  email, company, project, notes });
    this.props.navigation.navigate('PeopleList');
  }

  render() {
    return (
      <ScrollView showVerticalScrollIndicator = {false}>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Add a Person:</Text>
<MKTextField 
          style={styles.fieldStyles}
          placeholder={'First Name:'}
          tintColor={MKColor.Teal}
          value={this.props.first_name}
          onTextChange={(value)=> this.props.formUpdate({prop: 'first_name', value})}
        />

<MKTextField 
          style={styles.fieldStyles}
          placeholder={'Last Name:'}
          tintColor={MKColor.Teal}
          value={this.props.last_name}
          onTextChange={(value)=> this.props.formUpdate({prop: 'last_name', value})}
        />

<MKTextField 
          style={styles.fieldStyles}
          placeholder={'Email:'}
          tintColor={MKColor.Teal}
          value={this.props.email}
          onTextChange={(value)=> this.props.formUpdate({prop: 'email', value})}
        />

<MKTextField 
          style={styles.fieldStyles}
          placeholder={'Company:'}
          tintColor={MKColor.Teal}
          value={this.props.company}
          onTextChange={(value)=> this.props.formUpdate({prop: 'company', value})}
        />

<MKTextField 
          style={styles.fieldStyles}
          placeholder={'Projects:'}
          tintColor={MKColor.Teal}
          value={this.props.projects}
          onTextChange={(value)=> this.props.formUpdate({prop: 'projects', value})}
        />

<MKTextField 
          style={styles.fieldStyles}
          placeholder={'Notes:'}
          tintColor={MKColor.Teal}
          value={this.props.notes}
          onTextChange={(value)=> this.props.formUpdate({prop: 'notes', value})}
        />

      <View style={styles.AddButton}>
        <Button 
          title={"Add Person"}
          color="purple"
          onPress={this.onFormSubmit.bind(this)}
        />
      </View>
      </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    width: 340,
    flexWrap: 'wrap',
    paddingTop: 20,
    paddingLeft: 20,
  },
  icon: {
    paddingBottom: 2,
  },
  fieldstyles: {
    height: 40,
    color: MKColor.Orange,
  },
  AddButton: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
  }
});

const mapStateToProps = (state) => {
  const { first_name, last_name, phone,  email, company, project, notes } = state;
  return  { first_name, last_name, phone,  email, company, project, notes };
}

export default connect(mapStateToProps, actions)(AddPerson); 
