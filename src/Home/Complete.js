
import React from 'react';
import { View, StyleSheet, Dimensions,Container,StatusBar,
Text,Picker ,Image,TouchableHighlight,Alert,ScrollView,FlatList,Linking,
TouchableOpacity,Title,Caption,Drawer,Avatar,ActivityIndicator,TextInput } from 'react-native';
import { Assets } from '../assets/index';   
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";        
import Firebase from '@react-native-firebase/app'            

export default class Home extends React.Component {
  componentDidMount(){
    Firebase.initializeApp(this);
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function (token) {
        console.log("TOKEN:", token);
      },
    
      // (required) Called when a remote is received or opened, or local notification is opened
      onNotification: function (notification) {
        console.log("NOTIFICATION:", notification);
    
        // process the notification
    
        // (required) Called when a remote is received or opened, or local notification is opened
        notification.finish(PushNotificationIOS.FetchResult.NoData);
      },
    
      // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
      onAction: function (notification) {
        console.log("ACTION:", notification.action);
        console.log("NOTIFICATION:", notification);
    
        // process the action
      },
    
      // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
      onRegistrationError: function(err) {
        console.error(err.message, err);
      },
    
      // IOS ONLY (optional): default: all - Permissions to register.
      permissions: {
        alert: true,
        badge: true,
        sound: true,
      },
    
      // Should the initial notification be popped automatically
      // default: true
      popInitialNotification: true,
    
      /**
       * (optional) default: true
       * - Specified if permissions (ios) and token (android and ios) will requested or not,
       * - if not, you must call PushNotificationsHandler.requestPermissions() later
       * - if you are not using remote notification or do not have Firebase installed, use this:
       *     requestPermissions: Platform.OS === 'ios'
       */
      requestPermissions: true,
    });
}
  constructor(props)
 {

   super(props);

   this.state = { 

   isLoading: true,

   PickerValueHolder : ''

  }
 }


    render() {
      return (
          
       <View>
                 <View
        style={{
         
          height:60,
           
          backgroundColor:'#03a9f4',
          alignItems: 'center',
        }}>
            <Text style={{ color: 'white', fontSize: 22, marginTop:10 }}>
            IVRI Online Complain Request
                    </Text>
      </View>
        <ScrollView style={{marginBottom:70}}> 

        <Text style={{ color: 'black', fontSize: 16, marginTop:10 ,marginHorizontal:16,fontWeight:'bold'}}>
         Fill All the mandatory details              
      </Text>

      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Name"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
              />
                 <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
              />
                     <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Mobile no."
               placeholderTextColor = "grey"
               autoCapitalize = "none"
              />
                   <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Address"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
              />
                   <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Division"
               placeholderTextColor = "grey"
               autoCapitalize = "none"
              />
              <TouchableOpacity
                style = {styles.submitButton}
                onPress={() => {
                  Alert.alert(
                    'Complain Submission',
                    'Your request has been raised we will get back soon',
                    [
                      
                      {
                        text: 'Yes',
                        onPress: () => {this.props.navigation.navigate('Home')},
                      },
                    ],
                    {cancelable: false},
                  );
                }}
                 >
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
         
        </ScrollView>
        

  
   </View>
   
      );
  }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 300
    },
    input: {
        borderRadius:10,
       marginHorizontal:20,
       marginTop:20,
       height: 45,
       borderColor: '#000',
       borderWidth: 0.6
    },
    submitButton: {
       backgroundColor: '#03a9f4',
       padding: 10,
       margin: 20,
       height: 50,  borderRadius:10,
    },
    submitButtonText:{
        top:3,
        fontSize:16,
        alignSelf:'center',
       color: 'white',
     
    },
    heading: {fontSize: 18, fontWeight: 'bold', marginTop: 12, marginStart: 15},
    flatlist: {marginStart: 17, marginEnd: 12, marginTop: 20},
    viewall: {color: 'grey', marginTop: 12, marginEnd: 15},
    verticaltext: {
      paddingStart: 5,
      marginTop: 7,
  
      fontWeight: 'bold',
      fontSize: 18,
      color: 'black',
    },
    view: {flex: 1, flexDirection: 'column', marginHorizontal: 20, marginTop: 10},
    price: {color: 'grey', paddingStart: 5, marginTop: 5},
    verticalimg: {
      borderRadius: 10,
      height: 100,
      marginHorizontal: 6,
      width: 100,
      resizeMode: 'contain',
    },
    verticalview: {
      flexDirection: 'row',
      height:190,
      justifyContent: 'space-between',
      marginVertical: 8,
      marginHorizontal: 6,
      elevation: 1,
      borderRadius: 0.8,
    },
    horizontalimg: {
      height: 150,
       resizeMode:'contain',
      width: 130,
    },
    subtitle: {
      color: 'black',
      paddingStart: 5,
      marginTop: 7,
    },
    icon: {
      fontSize: 26,
      marginTop: 10,
  
      aspectRatio: 1.5,
  
      alignSelf: 'center',
    },
    img: {
      flex: 0.7,
      height: 380,
      width: 400,
    },
    iconcart: {
      height: 22,
      marginTop: 10,
      marginStart: 10,
  
      width: 22,
    },
 })
