import React, { Component } from 'react';
import { View, Text,StyleSheet,Button ,Image } from 'react-native';
import {StackNavigator} from 'react-navigation' ;
import Stats from './Stats'
import Landing  from './Landing'
import {Icon,Container,Header,Content,Left,Right, Title } from 'native-base'
export default class HomeScreen extends Component {

  static navigationOptions = { title :'Home     ',};
  constructor(props){
    super(props);
    this.state ={
        status : '',
    }

}
componentDidMount(){
 return this.fetchNews();
}

fetchNews = ()=>{
    const url = 'https://lightswitch-public-service-prod06.ol.epicgames.com/lightswitch/api/service/bulk/status?serviceId=Fortnite' 
    fetch(url).then((response) => response.json())
    .then((responseJson) =>{
      this.setState({ status : responseJson[0].status});
      console.log(this.state.status)
    })
    .catch((error) => {
      Alert.alert("someting wrong ");
    });

}


  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style = {styles.container}>
     <Text style={{fontWeight: 'bold' ,fontSize :20, textAlign : 'center'}}> Welcome To Fortnite App </Text>
     <Image
          style={{left:30 , width: 370, height: 400, right :20,}}
          source={{uri: 'https://pro-rankedboost.netdna-ssl.com/wp-content/uploads/2018/03/Fortnite-Season-Rewards-300x300.png' }}
        />
        <Text style={{fontWeight: 'bold', textAlign : 'center',}}>
   Server Status :<Text style={{fontWeight: 'bold',color :'red'}}> {this.state.status}
        </Text>
        </Text>
        <Text>
     {"\n"}
        </Text>

          <Button onPress={() => navigate('Stats')} title='Check your stats' />
        <Text>
     {"\n"}
        </Text>

        <Button onPress={() => navigate('Landing')} title='Need a place to land ?'/>
        <Text>
     {"\n"}
        </Text>
        <Text>
     {"\n"}
        </Text>
        <Text>
     {"\n"}
        </Text>
        <Text style={{fontWeight: 'bold' ,fontSize :15}}>
           © Sampurna Gautam 
        </Text>
</View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    
    justifyContent: 'center',
  },
});


