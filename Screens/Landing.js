import React from 'react';
import { StyleSheet, Text, View,Button,Alert,Image } from 'react-native';
import {Icon,Container,Header,Content,Left } from 'native-base'

export default class Landing extends React.Component {
    static navigationOptions = {title :'Landing                    ',};
  constructor(props){
  super(props)
  this.state = {
    spot :'',
    landing : [
              'Dusty Depot' , 'Anarchy Acres','Fatal Fields','Flush Factory','Greasy Grove','Haunted Hills',
              'Junk Junction','Lonely Lodge','Loot Lake','Lucky Landing','Moisty Mire','Pleasant Park', 'Retail Row',
              'Salty Springs','Shifty Shafts','Snobby Shores','Tilted Towers','Tomato Town','Wailing Woods','Tilted Towers'
              ,'Tilted Towers']
  }
}
randomLanding = () =>{
const landTo = this.state.landing;
const finalSpot = landTo[Math.floor(Math.random() * landTo.length)];
console.log (finalSpot);
Alert.alert('Your Landing spot is : ' + finalSpot);
}  
  render() {
    return (
      
      <View style={styles.container}>
      <Header>
         </Header>
      <Text style={{fontWeight: 'bold' ,fontSize : 30,textAlign :'justify'}}>
      Where You Droppin boys??? 
      <Text>
     {"\n"}
        </Text>
        <Text>
     {"\n"}
        </Text>
      </Text>
      <Image
          style={{left:50 , width: 300, height: 500,}}
          source={{uri: 'https://arapahoextra.com/wp-content/uploads/2018/03/img.jpg' }}
        />
        <Text>
     {"\n"}
        </Text>
       < Button onPress={this.randomLanding} title="Press for landing!!" color="#841584"/>
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