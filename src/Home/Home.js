
import React from 'react';
import { View, StyleSheet, Dimensions,Container,StatusBar,
Text,Picker ,Image,TouchableHighlight,Alert,
TouchableOpacity,Title,Caption,Drawer,Avatar,ActivityIndicator,TextInput } from 'react-native';
import { Assets } from '../assets/index';       
 

export default class Home extends React.Component {
   state = {  
      choosenIndex: 0  
  };  


    render() {
      return (
             <View style={{flex: 1,backgroundColor:'white'}}>
                     <View
        style={{
          
        
          
          height:60,
          right: 0,
          backgroundColor:'#03a9f4',
          alignItems: 'center',
        }}>
            <Text style={{ color: 'white', fontSize: 22, marginTop:10 }}>
            IVRI Online Complain Request
        </Text>
      </View>
      
      <View style={{ width: '90%',alignSelf:'center'  ,borderWidth:1,borderRadius:10,marginTop:20 }}>
      <Picker 
        selectedValue={this.state.division}
        style={{ height: 50  }}
        onValueChange={(itemValue, itemIndex) => this.setState({division:itemValue})}
      >
        <Picker.Item label="Select Complain Unit" value=""/>
        <Picker.Item label="Electrical Dept" value="Electrical Dept" />
        <Picker.Item label="Mechanical Dept" value="Mechanical Dept" />
        <Picker.Item label="Civil Dept" value="Civil Dept " />
      </Picker> 
      </View>

       
      <View style={{ width: '90%',alignSelf:'center'  ,borderWidth:1,borderRadius:10,marginTop:20 }}>
      <Picker 
        selectedValue={this.state.type}
        style={{ height: 50  }}
        onValueChange={(itemValue, itemIndex) => this.setState({type:itemValue})}
      >
        <Picker.Item label="Select Complain Type" value=""/>
        <Picker.Item label="Official" value="Official" />
        <Picker.Item label="Home Visit" value="Home Visit" />
        
      </Picker> 
      </View>
      


       
      <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter Problem in detail"
               placeholderTextColor = "grey"              
               autoCapitalize = "none"
               multiline={true}
                onChangeText={UserPassword => this.setState({UserPassword})}/>
       
            <TouchableOpacity
                style = {styles.submitButton}
                onPress={() => {
                  Alert.alert(
                    'Complain Submission?',
                    'Are you sure you want to submit the complain ',
                    [
                      {
                        text: 'No',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      },
                      {
                        text: 'Yes',
                        onPress: () => {this.props.navigation.navigate('Complete')},
                      },
                    ],
                    {cancelable: false},
                  );
                }}
                 >
                <Text style = {styles.submitButtonText}> Submit </Text>
             </TouchableOpacity>
 

  
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
        margin:20,
       height: 100,
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
     
    },
    text: {
      fontSize: 30,
      alignSelf: 'center',
      color: 'red'
   }, 
      pickerStyle:{  
      height: 150,  
      width: "90%",  
      color: '#344953',  
      justifyContent: 'center',  
  }  
 })
