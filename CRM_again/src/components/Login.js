import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { MKTextField, MKColor } from 'react-native-material-kit';
import Loader from './Loader';
// import LoginButton from './LoginButton';
import firebase from 'firebase';

const styles = StyleSheet.create({
    form: {  
        paddingBottom: 10,
        width: 200,
    },
    fieldStyles: {
        height: 40,
        color: MKColor.Orange,
        width: 200,
    },
    loginButtonArea: {
        marginTop: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    errorMessage: {
        marginTop: 15,
        fontSize: 15,
        color: 'red',
        alignSelf: 'center'
    },
    textStyle: {
        position: 'absolute',
        bottom: 0,
        textAlign: 'center',
        alignItems: 'center',
        fontSize: 15,
        color: 'grey',
        paddingBottom: 20,
      }
});

export default class Login extends Component {
    state = {
        email: '',
        password: '',
        error: '',
        loading: false,
    };
  
    onButtonPress() {
        const { email, password } = this.state;
        this.setState({error: '', loading: true});
        console.log(email, password)
  
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then(this.onAuthSuccess.bind(this))
          .catch(() => {
              firebase.auth().createUserWithEmailAndPassword(email, password)
                  .then(this.onAuthSuccess.bind(this))
                  .catch((e) => {console.log(e);});
          });
    }
  
    onAuthSuccess() {
        this.setState({
          email: '',
          password: '',
          error: '',
          loading: false, 
        });
    }
  
  onAuthFailed() {
      this.setState({
          error: 'Authentication Failed',
          loading: false,
      });
  }
  
    renderLoader() {
      if (this.state.loading) {
          return <Loader size="large"/>;
      } else {
          return    (
            <Button 
            onPress={this.onButtonPress.bind(this)}
            title="Log in"
            color="#841584"
            />
            
          )
      }
    }
  
  render() {
    const { form, fieldStyles, loginButtonArea, errorMessage, welcome, container } = styles;
    return (
      <View style={styles.container}>
          <View style={form}>
        <Text>Login or Create an Account</Text>
        <MKTextField 
            text={this.state.email}
            onTextChange={email => this.setState({ email })}
            textInputStyle={fieldStyles}
            placeholder={'Email...'}
            tintColor={MKColor.Teal}
        />
        <MKTextField 
            text={this.state.password}
            onTextChange={password => this.setState({ password })}
            textInputStyle={fieldStyles}
            placeholder={'Password...'}
            tintColor={MKColor.Teal}
            password={true}
        />
        <Text style={errorMessage}>
            {this.state.error}
        </Text>
        <View style={loginButtonArea}>
            {this.renderLoader()}
        </View>
        
      </View>
      <Text style={styles.textStyle}>Medea Samniashvili - 2019</Text>
      </View>
    );
  }
}
