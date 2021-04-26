import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';

export const AppTabNavigator = createBottomTabNavigator({
  Home: { screen : HomeScreen},
  Search: { screen : SearchScreen}
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Home"){
        return(
          <Image
          source={require("../assets/Home.png")}
          style={{width:40, height:40}}
          />
        )
      }
      else if(routeName === "Search"){
        return(
          <Image
          source={require("../assets/Search.png")}
          style={{width:40, height:40}}
          />
        )
      }
    }
  })
})