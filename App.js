import React from 'react';
import { View, Text, Image, AppRegistry, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
//import AsyncStorage from '@react-native-community/async-storage';
import All_Api_Axios from './DEMO/All_Api_Axios';
import Radio_Button from './DEMO/Radio_Button';
import TEST1 from './DEMO/TEST1';
import TEST2 from './DEMO/TEST2';
import TEST3 from './DEMO/TEST3';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createMaterialTopTabNavigator();
export default class App extends React.Component {
  // constructor() {
  //   super();
  //   this.state = {
  //     tokenvalue: ''
  //   }
  // }
  // async componentDidMount() {
  //   this.setState({ tokenvalue: await AsyncStorage.getItem('token') });
  //   console.log("token value ========>", this.state.tokenvalue);
  //   // {
  //   //   this.state.tokenvalue != null ?<Stack.Screen name="Login_Page" component={Login_Page} />:
  //   //   <Stack.Screen name="Home_Drawer" component={Home_Drawer} />
  //   // }
  // }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator >
          <Stack.Screen name="drawer" component={drawer} options={{ title: 'Home' }} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}
drawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="All_Api_Axios" component={All_Api_Axios} />
      <Drawer.Screen name="Radio_Button" component={Radio_Button} />
      <Drawer.Screen name="Tab_navigation" component={Tab_navigation} />
    </Drawer.Navigator>
  )
}

Tab_navigation=()=>{
  return(
    <Tab.Navigator>
    <Tab.Screen name="CHATS" component={TEST1} />
    <Tab.Screen name="STATUS" component={TEST2} />
    <Tab.Screen name="CALLS" component={TEST3} />
  </Tab.Navigator>
  )
}