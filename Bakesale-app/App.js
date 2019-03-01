import React, {Component} from 'react';
import { StyleSheet, Text, View, Animated, Easing, Dimensions } from 'react-native';
import ajax from './src/ajax';
import DealsList from './src/components/DealsList';
import DealDetail from './src/components/DealDetail';
import GoBack from './src/components/GoBack'
import SearchBar from './src/components/SearchBar';


export default class App extends Component {
  titleXPos = new Animated.Value(0);
  state = {
    deals: [],
    dealsFromSearch: [],
    selectedDealId: null,
  }

  animateTitle = (direction = 1) => {
    const deviceWidth = Dimensions.get('window').width - 300;
    Animated.timing(this.titleXPos, {
      toValue: direction * deviceWidth, 
      duration: 1000,
      easing: Easing.ease
    }
      ).start(( {finished}) => {
      if(finished) {
        this.animateTitle(-1 * direction);
      }
    });
  }



  async componentDidMount(){
    this.animateTitle();
    const deals = await ajax.getDealsFromApi();
    this.setState(() => {
      return { deals };
    });

    
  };

  searchDeals = async (searchTearm) => {
    let foundDeals = [];
    if(searchTearm){
      foundDeals = await ajax.searchDeals(searchTearm);
      this.setState(() => {
        return { dealsFromSearch: foundDeals };
      });
    }
  }

  setCurrentDeal = (dealId) => {
    this.setState({
      selectedDealId: dealId,
    });
  }

  currentDeal = () => {
   return this.state.deals.find(
     (deal)=> deal.key === this.state.selectedDealId);
  }
  goBack = () => {
    this.setState({selectedDealId: null})
  }

  render() {
    if(this.state.selectedDealId) {
      return <View style={styles.main}>
      <DealDetail deal = {this.currentDeal()}/>
      <GoBack onPress={this.goBack}/>
      </View>
    }
    if(this.state.deals.length > 0) {
      return <View style={styles.main}>
        <SearchBar searchDeals={this.searchDeals}/>
        <DealsList deals={this.state.deals} onItemPress = {this.setCurrentDeal} />
      </View>
    }
    return (     
      <Animated.View style={[ {left: this.titleXPos} , styles.container]}>    
          <Text style={styles.header}>BakeSale App</Text>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: 
  {
    fontSize: 40,
  },
  main: {
    paddingTop: 30,
  }
});
