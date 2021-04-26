import React, { Component } from 'react';
import { View, StyleSheet, Text, FlatList,TouchableOpacity, Image } from 'react-native';
import { ListItem } from 'react-native-elements'
import firebase from 'firebase';
import db from '../Config'
import MyHeader from '../components/MyHeader';

export default class HomeScreen extends React.Component{
  constructor(){
    super()
    this.state = {
      requests : []
    }
  this.requestRef= null
  }


   getRequests =()=>{
    this.requestRef = db.collection("transportation_requests")
    .onSnapshot((snapshot)=>{
      var requests = snapshot.docs.map(document => document.data());
      this.setState({
        requests : requests
      });
    })
  }

  componentDidMount(){
    this.getRequests();
  }

  componentWillUnmount(){
    this.requestRef();
  }

  keyExtractor = (item, index) => index.toString()

  renderItem = ( {item, i} ) =>{
    return (
      <ListItem
        key={i}
        title={item.vehicle}
        subtitle={item.location}
        titleStyle={{ color: 'black', fontWeight: 'bold' }}
        rightElement={
            <TouchableOpacity style={styles.button}
            onPress ={()=>{
              }}
              >
              <Text style={{color:'#ffff'}}>View</Text>
            </TouchableOpacity>
          }
        bottomDivider
      />
    )
  }

  render(){
    return(
     <View style={{flex:1}}>
       <MyHeader title="Home" navigation={this.props.navigation}/>
        <View style={{flex:1}}>
            {
            this.state.requests.length === 0
            ?(
              <View style={styles.subContainer}>
                <Text style={{ fontSize: 20}}>List Of All Requested Items</Text>
              </View>
            )
            :(
              <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.requests}
                renderItem={this.renderItem}
              />
            )
          }
       </View>
     </View>
    )
  }
}

const styles = StyleSheet.create({
  imageIcon:{
    width:60,
    height:60,
    marginLeft:225,
    marginTop:-48,
  },
  header:{
    fontSize:30,
    textAlign:'center',
    backgroundColor:'aqua',
  },
  subContainer:{
    flex:1,
    fontSize: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  button:{
      width:100,
      height:30,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      borderColor: 'red',
      backgroundColor:"#ff5722",
  }
})