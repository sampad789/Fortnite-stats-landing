import React from "react";
import { StyleSheet, Text, View, Button, Alert, TextInput, Picker,ScrollView,FlatList } from "react-native";
import axios from 'axios';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';
import {Divider} from 'react-native-elements'

export default class Stats extends React.Component {
  static navigationOptions = { title: 'Stats       ', };

  constructor(props) {
    super(props);
    this.state = {
      platform: " ",
      userName: " ",
      lifetimeStats: [],
      fullStats: " ",
    };
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData() {

    return axios.post('http://localhost:8000/fornite', {
      platform: this.state.platform,
      userName: this.state.userName
    })
      .then(response => {
        //console.log(response)
        const res = response
        this.setState({
          lifetimeStats: res.data.lifeTimeStats

        })
        console.log(this.state.lifetimeStats)
      })
      .catch(() => alert("Something went wrong !!Check Backend console !!"))


  };



  render() {
    

    return (

      <ScrollView>
      <View >
        <Header>  
    
          </Header>

        <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center', }} > Fortnite stats !!!  </Text>
        <Text>
          {"\n"}
        </Text>
        <Text style={{ fontSize: 20 }}> Select your playing platform :  </Text>
        <Picker
          selectedValue={this.state.platform}
          onValueChange={(console) => this.setState({ platform: console })}>
          <Picker.Item label="Select One" value=" " />
          <Picker.Item label="Windows" value="pc" />
          <Picker.Item label="Playstation" value="psn" />
          <Picker.Item label="XBOX" value="xbl" />
        </Picker>

        <Text style={{ fontSize: 20 }}> Enter your Epic games UserName : </Text>

        <TextInput placeholder="USERNAME" onChangeText={(userName) => this.setState({ userName })} />
        <Text>
          {"\n"}
        </Text>
        <Button onPress={() => this.fetchData()} title="Get Your Stats" />
        <Text>
          {"\n"}
        </Text>
        <FlatList
     data={this.state.lifetimeStats}
     keyExtractor={(item, index) => index.toString()}
     renderItem= {({item}) => 
        // Card & Image
     <Card >
    <Text> {item.key} : {item.value} </Text>
      {/* Divider */}
     <Divider style={{ backgroundColor: '#dfe6e9', margin: 5 }} />
     
     </Card>
     }/>   
      </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignContent: 'center',
    justifyContent: "center"
  }
});