import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../Account/Login';
import Home from '../Home/Home'
import Signup from '../Account/Signup';
 import Forgotpass from '../Account/Forgotpass'
import Verifyotp from '../Account/Verifyotp';
 import Profile from '../Profile/Profile';
 import Complains from '../Home/Complains';
 import Complete from '../Home/Complete';
 import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';





import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
  
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator   initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#03a9f4',
    }}>
      <Tab.Screen name="Home" component={Home} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} />
      <Tab.Screen name="Profile" component={Profile} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} />
    </Tab.Navigator>
  );
}
// const Tab = createMaterialTopTabNavigator();

// function MyTabs() { 
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: '#fff',
//         labelStyle: { fontSize: 14 },
//         style: { backgroundColor: '#03a9f4' },
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{ tabBarLabel: 'Home' }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={Profile}
//         options={{ tabBarLabel: 'Profile' }}
//       />
//       {/* <Tab.Screen
//         name="Support"
//         component={Support}
//         options={{ tabBarLabel: 'Support' }}
//       /> */}
//     </Tab.Navigator>
//   );
// }


 
 
export default class RouteNavigation extends React.Component {
  state = { skip: undefined, comp: '' };
 
  render() {
    return (
        <>
        <NavigationContainer>
     
          
         
         <Stack.Navigator
            initialRouteName='Login'
            screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Forgotpass" component={Forgotpass} />
            <Stack.Screen name="Verifyotp" component={Verifyotp} />
            <Stack.Screen name="MyTabs" component={MyTabs} />
            <Stack.Screen name="Complains" component={Complains}/>
            <Stack.Screen name="Complete" component={Complete}/>


            

            
          </Stack.Navigator>

        </NavigationContainer>
      </>
     
    );
  }
}
