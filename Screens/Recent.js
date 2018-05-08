import React from 'react';
import { StyleSheet, Text, View,Button,ScrollView,FlatList,Image } from 'react-native';
import {Container, Header, Content, Card, CardItem, Body} from 'native-base';
import {Divider} from 'react-native-elements'
import moment from 'moment';
export default class Recent extends React.Component {
  static navigationOptions = { title: 'Recent News           ', };

  constructor(props){
    super(props);
    this.state ={
        data :[]

    }
}
componentDidMount(){
  return this.fetchNews();
}

fetchNews = ()=>{
    const url = 'https://newsapi.org/v2/everything?q=Fortnite&apiKey=c8baaec04b7140a59964cc9743be90a7&language=en' ;
    fetch(url).then((response) => response.json())
    .then((responseJson) =>{
      //  console.log(responseJson)
      this.setState({ data: responseJson.articles });

      console.log(this.state.data)
    })
    .catch((error) => {
      Alert.alert("Something wrong , I can feel it ");
    });
}



render() {
 
  return (
    <Container style={{flex: 1, backgroundColor: 'white'}}>
     <View>
       
     <FlatList
     data={this.state.data}
     keyExtractor={(item, index) => index.toString()}
     renderItem= {({item}) => 
   
     // Card & Image
     <Card>
     <Image source= {{uri: item.urlToImage}}
     style={{width:400, height:400}} />
     {/* Title */}
     
     <Text style={styles.titleText}>{item.title}</Text>
      {/* Description & Divider */}
     <Text style={styles.description}>{item.description} </Text>
     <Divider style={{ backgroundColor: '#dfe6e9', margin: 5 }} />
     {/* TimeStamp & Publisher */}
     <View style={{flexDirection: 'row', flex: 1, marginTop: 5}}>
     <Text style={styles.timestap}>{moment(item.publishedAt || moment.now()).fromNow()}</Text>
     <Text style={styles.publisher}>{item.source.name}</Text>
     </View>
    
     </Card>
     }/>

     </View>
    </Container>
 );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightblue",
    alignContent: 'center',
    justifyContent: "center"
  },
  description:{
    marginTop: 10,
    fontSize:12,
    textAlign: 'center'
  },
  timestap: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    
    fontSize:8,
    fontStyle: 'italic',
    marginTop: 3
  },
  publisher:{
    fontSize:8,
    fontStyle: 'italic',
    fontWeight: 'bold'
  }
});