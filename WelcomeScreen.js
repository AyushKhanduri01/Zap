import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInput,
  Image,
  Alert
} from 'react-native';

import firebase from 'firebase';
import db from '../Config';

export default class WelcomeScreen extends React.Component{
  constructor(){
    super();
    this.state={
      email:'',
      password:'',
    }
  }

     userLogin = async(email,password)=>{
     firebase.auth().signInWithEmailAndPassword(email, password)
     .then(()=>{
       this.props.navigation.navigate('Home')
     })
     .catch((error)=>{
       var errorCode = error.code;
       var errorMessage = error.message;
       return alert(errorMessage)
     });
  }

  userSignIn=(email,password)=>{

  }
  render(){
    return(
      <View style={styles.container}>
        <View>
         <Image
         source= {require("../assets/Logo.png")}
         style= {{width:200, height:200, alignSelf:'center', marginTop:60}}
         />
        </View>
        <View>
        <Text style={styles.title}>
          Zap
        </Text>
        </View>
        <View>
         <TextInput
           style={[styles.loginBox,{marginTop:60}]}
           placeholder={"abc@example.com"}
           keyboardType={'email-address'}
           onChangeText={(text)=>{
             this.setState({
               email: text
             })
           }}
         />
        </View>
        <View>
         <TextInput
           style={styles.loginBox}
           secureTextEntry={true}
           placeholder="password"
           onChangeText={(text)=>{
             this.setState({
               password: text
             })
           }}
         />
        </View>
        <View>
          <TouchableOpacity
            style={[styles.button,{marginTop:20, marginBottom:20}]}
            onPress={()=>(this.userLogin(this.state.email,this.state.password))}>
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
          style={styles.modalButton}
          >
           <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'white',
    flex:1
  },
  title:{
    fontSize:40,
    color:'tealBlue',
    alignSelf:'center',
    marginTop:20,
  },
  loginBox:{
    bottomMargin:'black',
    width:250,
    height:50,
    borderBottomWidth:1.5,
    alignSelf:'center',
    fontSize:20,
    margin:10
  },
  button:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    alignSelf:'center',
    borderColor:'black',
    borderWidth:0.5,
    borderRadius:25,
    shadowColor:"#000",
    shadowOffset:{width:0, height:15},
    shadowOpacity:0.30,
    shadowRadius:10.32,
    elevation:16,
  },
  modalButton:{
    width:300,
    height:50,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'white',
    alignSelf:'center',
    borderWidth:0.5,
    borderRadius:25,
    shadowColor:"#000",
    shadowOffset:{width:0, height:15},
    shadowOpacity:0.30,
    shadowRadius:10.32,
    elevation:16
  },
  buttonText:{
    color:'black',
    fontSize:20,
  }
})










