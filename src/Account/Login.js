import { Container } from 'native-base';
import React from 'react';
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
    Alert,
} from 'react-native';
import { Assets } from '../assets/index';
import axios from 'axios';

 

export default class Login extends React.Component {
 

constructor(props) {

   super(props)

   this.state = {

     UserId: '',
     password: ''

   }

 }

UserLoginFunction =async () =>{
  
const { UserId , password}  = this.state ;
var body ={ 
  "UserId":UserId,
  "password":password
}
var url ='https://127.0.0.1:5001/api/Login/login';
console.log('urll',url,body)
await axios.post(url,body,{headers:{
  'UserId':UserId,
  "password":password
}}).then((response)=>{
  console.log('login',response);
}).catch((err)=>{
  console.log('err',err)
})


 


// fetch('https://127.0.0.1:5001/api/Login/login', {
//  method: 'POST',
//  headers: {
//    'Accept': 'application/json',
//    'Content-Type': 'application/json',
//  },
//  body: JSON.stringify({

//   "UserId": UserId,

//    "password": password

//  })

// }).then((response) => response.text())
//      .then((responseJson) => {

//        // If server response message same as Data Matched
//       if(responseJson == 'Login Sucessfully')
//        {

//            //Then open Profile activity and send user email to profile activity.
//            this.props.navigation.navigate('MyTabs');

//        }
//        else{

//          Alert.alert(responseJson);
//        }

//      }).catch((error) => {
//        console.error(error);
//      });


 }

 render() {
   return (
       
            <View
                style={{
                    backgroundColor: 'white',
                    flex:1,
                    width: '100%',
                    resizeMode: 'contain',
                }}>
                <StatusBar backgroundColor="#03a9f4" barStyle="light-content" />
                <View style={{ backgroundColor: '#fff' }}>
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
            IVRI Online Complain Request
        </Text>
      </View>

      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 340,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{ height: 150, width: 150, alignSelf: 'center' }}
          source={Assets.logo}
        />
        </View>

      <View style = {styles.container}>
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "FMS ID"   
               placeholderTextColor = "grey"
               
               autoCapitalize = "none"
               
               onChangeText={UserId => this.setState({UserId})}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               placeholderTextColor = "grey"              
               autoCapitalize = "none"
               secureTextEntry={true}
               onChangeText={password => this.setState({password})}/>
            
            {this.state.UserId==='' || this.state.password==='' ? <TouchableOpacity
               style = {{    backgroundColor: '#e6e6e6',
               padding: 10,
               margin: 15,
              borderWidth:1,
              borderColor:'#e6e6e6',
               height: 50,  borderRadius:10,}}
              //  onPress={() => this.props.navigation.navigate('MyTabs')}
               onPress={this.UserLoginFunction}
               >
               <Text style = {{   top:3,
        fontSize:16,
        alignSelf:'center',
       color: 'black'}}> LOG IN
       </Text>
            </TouchableOpacity>
            :<TouchableOpacity
               style = {styles.submitButton}
              //  onPress={() => this.props.navigation.navigate('MyTabs')}
               onPress={this.UserLoginFunction}
               >
               <Text style = {styles.submitButtonText
     }> LOG IN
     </Text>
            </TouchableOpacity>}
         </View>

         <TouchableOpacity onPress={() => this.props.navigation.navigate('Forgotpass')}
                >
              
               <Text style = {{color:'black',textAlign:'right',marginTop:10,marginRight:10}}>Forgot Password ?  </Text>
            </TouchableOpacity>

            
              {/* <View style={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
               <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14}}> 
खाता नहीं है ?</Text>
               <TouchableOpacity  onPress={() => this.props.navigation.navigate('Signup')}
                >
              
               <Text style = {{color:'black' ,marginTop:10,color:'#03a9f4'}}> साइन अप करें   </Text>
            </TouchableOpacity>
               </View> */}

               <View style={{flexDirection:'row',marginTop:140,paddingLeft:10}}>
               <Image
          style={{ height: 40, width: 40  }}
          source={Assets.logo}
        />
         <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14,marginLeft:10}}>ICAR - IVRI Izatnagar Bareilly</Text>
               </View>

                </View>
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
       margin: 15,
       height: 50,
       borderColor: '#000',
       borderWidth: 1
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
