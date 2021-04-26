import React from 'react';
import {Text, StyleSheet, View, TextInput, TouchableOpacity} from 'react-native';

import firebase from 'firebase';
import db from '../Config';
import MyHeader from '../components/MyHeader';

export default class SearchScreen extends React.Component{
  constructor(){
    super();
    this.state = {
      userId: firebase.auth().currentUser.email,
      vehicle:'',
      location:'',
      requestId:'',
    }
  }

  createUniqueId=()=>{
    return Math.random().toString(36).substring(7)
  }

  addItem=(vehicle,location)=>{
    var userId = this.state.userId
    var randomRequestId = this.createUniqueId()
    db.collection('transportation_requests').add({
      user_id       : userId,
      vehicle       : vehicle,
      location      : location,
      request_id    : randomRequestId,
      date          : firebase.firestore.Timestamp.now().toDate()
    })
    this.setState({
      vehicle  : '',
      location : '',
    })
    return alert(
      'Vehicle request is accepted',
      '',
      [
         {text : 'OK', onPress: () => {
            this.props.navigation.navigate('Home')
         }}
      ]
    )
  } 
  
  render(){
    return(
      <View style={{flex:1}}>
       <View>
       <MyHeader title="Search" navigation={this.props.navigation}/>
       </View>
        <TextInput style={styles.formTextInput}
           placeholder="Enter Vehicle Type"
           onChangeText={(text)=>{
            this.setState({
              vehicle: text
            })
           }}
           value={this.state.vehicle}
        ></TextInput>
        <TextInput
           multiline={true}
           numberOfLines={4}
           style={[styles.formTextInput,{height:150}]}
           placeholder={"Enter Location"}
           onChangeText={(text)=>{
             this.setState({
               location: text
             })
           }}
           value= {this.state.location}
        ></TextInput>
        <TouchableOpacity style={[styles.button,{marginTop:10}]}
        onPress={()=>{
          this.addItem(
            this.state.vehicle,
            this.state.location
          )
        }}
        >
        <Text style={{color:'white', fontSize:18, fontWeight:'18'}}>
         Request For Vehicle
        </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
   header:{
      color:'#90A5A9',
      fontSize:20,
      fontWeight:"bold",
      backgroundColor:"#eaf8fe",
      alignSelf:'center',
   },
   formTextInput:{
     borderWidth:1,
     borderColor:'red',
     borderRadius:10,
     marginTop:50,
     alignSelf:'center',
     width:"75%",
     height:35,
     alignItems:'center',
     padding:10,
   },
   button:{
     width:"75%",
     height:50,
     alignSelf:'center',
     justifyContent:'center',
     alignItems:'center',
     borderRadius:10,
     backgroundColor:"orange",
     shadowColor: "#000",
     shadowOffset: {width: 0, height: 8,},
     shadowOpacity: 0.44,
     shadowRadius: 10.32,
     elevation: 16,
   }
})