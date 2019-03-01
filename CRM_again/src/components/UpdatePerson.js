import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView, Button } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { MKColor, MKTextField } from 'react-native-material-kit';
import { connect } from 'react-redux';
import * as actions from '../actions/index';


class UpdatePerson extends Component {
  static navigationOptions = {
    tabBarLabel: 'Add Person',
    tabBarIcon: ({ tintColor }) => (
      <Icon 
        name={'plus'}
        size={70}
        style={[{color: tintColor}, styles.icon]}
  />
  )
}

  onFormUpdate() {
    const { first_name, last_name, phone,  email, company, project, notes, uid } = this.props;
    this.props.saveContact({ first_name, last_name, phone,  email, company, project, notes, uid });
  }

  render() {
    return (
      <ScrollView showVerticalScrollIndicator = {false}>
      <View style={styles.formContainer}>
        <Text style={styles.titleText}>Update a Person:</Text>
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
          placeholder={'Phone:'}
          tintColor={MKColor.Teal}
          value={this.props.phone}
          onTextChange={(value)=> this.props.formUpdate({prop: 'phone', value})}
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
          value={this.props.project}
          onTextChange={(value)=> this.props.formUpdate({prop: 'project', value})}
        />

<MKTextField 
          style={styles.fieldStyles}
          placeholder={'Notes:'}
          tintColor={MKColor.Teal}
          value={this.props.notes}
          onTextChange={(value)=> this.props.formUpdate({prop: 'notes', value})}
        />

      <View style={styles.UpdateButton}>
        <Button 
          title={"Update Person"}
          color="purple"
          onPress={this.onFormUpdate.bind(this)}
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
  UpdateButton: {
    marginTop: 20,
  },
  titleText: {
    fontSize: 20,
    textAlign: 'center',
  }
});

const mapStateToProps = (state) => {
  const { first_name, last_name, phone,  email, company, project, notes, uid } = state;
  return  { first_name, last_name, phone,  email, company, project, notes, uid };
}

export default connect(mapStateToProps, actions)(UpdatePerson); 
