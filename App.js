import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {StackNavigator} from 'react-navigation' ;
import HomeScreen from './Screens/HomeScreen';
import Stats from './Screens/Stats';
import Landing  from './Screens/Landing';

export default class App extends React.Component {
  render() {
    return (
       <MyApp />
    );
  }
}

const MyApp = StackNavigator({
  Home : {
    screen :HomeScreen
  } ,

  Stats :{
    screen :Stats
  },
  Landing : {
    screen : Landing
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
