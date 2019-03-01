import React, { Component } from 'react';
import {View, Text, StyleSheet, Button } from 'react-native';
import PropTypes from 'prop-types';
import RandomNumberComponent from './RandomNumberComponent';
import shuffle from 'lodash.shuffle';


export default class Index extends Component {

  static propTypes = {
    randomNumberCount: PropTypes.number.isRequired,
    initialSeconds: PropTypes.number.isRequired,
    onPlayAgain: PropTypes.func.isRequired,
  }
    state = {
      selectedNumbers: [],
      remainingTime: this.props.initialSeconds,
    }

    gameStatus = "Playing";


    randomNumbers = Array
    .from({length: this.props.randomNumberCount})
    .map(() => 1 + Math.floor(10 * Math.random())
    );

    target = this.randomNumbers
    .slice(0, (this.props.randomNumberCount -2))
    .reduce((acc, cur) => acc + cur);


    shuffledRandomNumbers = shuffle(this.randomNumbers);

    isDisabled = (numberIndex) => {
      return this.state.selectedNumbers.indexOf(numberIndex) >= 0;
    }

    selectedNumber = (numberIndex) => {
      this.setState(prevState => ({
        selectedNumbers: [...prevState.selectedNumbers, numberIndex],
      }) 
      )
    }


    getStatus = (nextState) => {
      const sumOfSelected = nextState.selectedNumbers.reduce((acc, cur) => acc + this.shuffledRandomNumbers[cur], 0);
      if(nextState.remainingTime === 0) {
        return "Lost";
      }
      if(sumOfSelected === this.target) {
        return "Won"
      }
      if(sumOfSelected < this.target) {
        return 'Playing';
      }
      if(sumOfSelected > this.target){
        return "Lost";
      }
    }

    componentWillUpdate(nextProps, nextState) {
     if(nextProps.selectedNumbers !== this.state.selectedNumbers || this.state.remainingTime === 0){
       this.gameStatus = this.getStatus(nextState);
       if(this.gameStatus !== 'Playing'){
         clearInterval(this.interval);
       }
     }
    }


    componentDidMount() {
     this.interval = setInterval(() => {
        this.setState((prevState) =>  {
          return {remainingTime: prevState.remainingTime - 1};
        }, () => {
          if(this.state.remainingTime === 0) {
            clearInterval(this.interval);
          }
        });
      }, 1000);
    }


    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    render() {
      const gamestatus = this.gameStatus;
    return (
      <View style={styles.container}>
        <Text style={[styles.target, styles[`status_${gamestatus}`]]}>{this.target}</Text>
        <View style={styles.numberswrapper}>
        {
          this.shuffledRandomNumbers.map((randomNumber, index) => 
            <RandomNumberComponent 
            number={randomNumber} 
            id={index}
            key={index} 
            isDisabled = {this.isDisabled(index) || gamestatus !== 'Playing'} 
            onPress = {this.selectedNumber}
            />
          )
        }
        </View>
        {this.gameStatus !== 'Playing' && <Button
        title="Play Again!"
        onPress={this.props.onPlayAgain}
        />}

        <Text>{gamestatus}</Text>
        <Text>{this.state.remainingTime}</Text>

        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ddd',
    paddingTop: 50
  },
  target: {
    fontSize: 40,
    marginHorizontal: 50,
    backgroundColor: '#aaa',
    textAlign: 'center',
  },
  numberswrapper: {
    flex: 1,
    backgroundColor: '#FF0000',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  status_Won: {
    backgroundColor: 'green',
  },
  status_Lost: {
    backgroundColor: 'red',
  },
  status_Playing: {
    backgroundColor: '#aaa',
  }
});
