import { Container } from 'native-base';
import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    ImageBackground,
    Dimensions,
    StatusBar,
    Image,
    Alert 
} from 'react-native';
import { Assets } from '../assets/index';
import {
   registerUrl,
 
 } from '../config/config';
 import Axios from 'axios';

 import {toast} from '../Function/Function';
import { ScrollView } from 'react-native-gesture-handler';
var Querystringified = require('querystringify');


export default class Login extends React.Component {
  
   
constructor(props) {
 
  super(props)

  this.state = {

    UserName: '',
    UserEmail: '',
    UserPassword: '',
    mobile:'',
    address:''

  }

}

UserRegistrationFunction = () =>{


const { UserName }  = this.state ;
const { UserEmail }  = this.state ;
const { UserPassword }  = this.state ;
const { mobile }  = this.state ;

const { address }  = this.state ;




fetch('http://172.16.23.68:8004/UserApp/signup.php', {
method: 'POST',
headers: {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
},
body: JSON.stringify({

  name: UserName,

  email: UserEmail,

  password: UserPassword,

  mobile:mobile,

  address:address

})

}).then((response) => response.text())
    .then((responseJson) => {

// Showing response message coming from server after inserting records.
      Alert.alert(responseJson);

    }).catch((error) => {
      console.error(error);
    });


}

render() {
        return (
            <Container
                style={{
                    backgroundColor: 'white',
                    width: '100%',
                    resizeMode: 'contain',
                }}>
                <StatusBar backgroundColor="#03a9f4" barStyle="light-content" />
                <View style={{ backgroundColor: '#fff' }}>
                  
     <ScrollView> 
                <View
        style={{
          position: 'absolute',
          marginTop:0,
          left: 0,
          height:60,
          right: 0,
          backgroundColor:'#03a9f4',
          alignItems: 'center',
        }}>
        <Text style={{ color: 'white', fontSize: 22, marginTop:10 }}>
        पशु चिकित्सा सेवा प्रणाली सेवा केंद्र
        </Text>
      </View>


      <View style = {styles.container}>
            
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "नाम"
               placeholderTextColor = "grey"
               onChangeText={UserName => this.setState({UserName})}
          
               autoCapitalize = "none"
               />
                <TextInput style = {styles.input}
                 keyboardType={'email-address'}                  
                
          onChangeText={UserEmail => this.setState({UserEmail})}

                underlineColorAndroid = "transparent"
               placeholder = "ईमेल"
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
                />
            
            <TextInput style = {styles.input}
              
          onChangeText={UserPassword => this.setState({UserPassword})}
               underlineColorAndroid = "transparent"
               placeholder = "कुंजिका"
               secureTextEntry={true}
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
              />

            <TextInput style = {styles.input}
               keyboardType={'number-pad'}
               maxLength={10}
               onChangeText= {mobile=>this.setState({mobile})}
               underlineColorAndroid = "transparent"
               placeholder = "मोबाइल नंबर"
               placeholderTextColor = "grey"               
               autoCapitalize = "none"
               />
                <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "पता"
               placeholderTextColor = "grey"
               onChangeText= {address=>this.setState({address})}
               autoCapitalize = "none"
                />

{/* <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Location"
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
               /> */}
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress={this.registration_Function}
               onPress={ this.UserRegistrationFunction}
               >
               <Text style = {styles.submitButtonText}> रजिस्टर करें </Text>
            </TouchableOpacity>
         </View>
         </ScrollView>
         <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
               <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14}}> पहले से खाता है ?</Text>
               <TouchableOpacity  onPress={() => this.props.navigation.navigate('Login')}
                >            
               <Text style = {{color:'black' ,marginTop:10,color:'#03a9f4'}}> लॉग इन करें  </Text>
            </TouchableOpacity>
               </View>
               <View style={{flexDirection:'row',marginTop:50,paddingLeft:10}}>
               <Image
          style={{ height: 40, width: 40  }}
          source={Assets.logo}
        />
         <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14,marginLeft:10}}>आईसीएआर - आईवीआरआई इज्जतनगर बरेली</Text>
               </View>

                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal:6,
       paddingTop: 70
    },
    input: {
        borderRadius:10,
       margin: 10,
       height: 45,
       borderColor: '#000',
       borderWidth: 0.5
    },
    submitButton: {
       backgroundColor: '#03a9f4',
       padding: 10,
       margin: 15,
       height: 50,  borderRadius:10,
    },
    submitButtonText:{
        top:3,
        fontSize:16,
        alignSelf:'center',
       color: 'white',
     
    }
 })
