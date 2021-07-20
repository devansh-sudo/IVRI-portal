 
import React from 'react';
import { View, StyleSheet, Dimensions,Container,StatusBar,Text,Picker ,Image,TouchableHighlight,TouchableOpacity,Title,Caption,Drawer,Avatar } from 'react-native';

import { Assets } from '../assets/index';

export default class Home extends React.Component {
   state = {
       email: '',
       password: ''
    }
   
   render() {
       return (
              <View style={{flex: 1,backgroundColor:'white'}}>
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
         {/* <Text style={{fontSize:20,fontWeight:'bold' ,marginTop:15,marginLeft:16,color:'#26a69a',alignSelf:'center'}}>Farmer Name</Text> */}
         <View style={{flexDirection:'row',marginHorizontal:16,marginTop:50,borderBottomWidth:0.6,borderBottomColor:'grey'}}>
           <Text style={{fontSize:18,bottom:6}}>
FMS ID : </Text>
           <Text style={{fontSize:18,bottom:6,marginLeft:20}}>9876543210</Text>
         </View>
         <View style={{flexDirection:'row',marginHorizontal:16,marginTop:30,borderBottomWidth:0.6,borderBottomColor:'grey'}}>
           <Text style={{fontSize:18,bottom:6}}>Employee Name : </Text>
           <Text style={{fontSize:18,bottom:6,marginLeft:20}}>useremail@gmail.com</Text>
         </View>
         <View style={{flexDirection:'row',marginHorizontal:16,marginTop:30,borderBottomWidth:0.6,borderBottomColor:'grey'}}>
           <Text style={{fontSize:18,bottom:6}}>Email  : </Text>
           <Text style={{fontSize:18,bottom:6,marginLeft:20}}>4567892134</Text>
         </View>
         <View style={{flexDirection:'row',marginHorizontal:16,marginTop:30,borderBottomWidth:0.6,borderBottomColor:'grey'}}>
           <Text style={{fontSize:18,bottom:6}}>Division  : </Text>
           <Text style={{fontSize:18,bottom:6,marginLeft:20}}>4567892134</Text>
         </View>
         <View style={{flexDirection:'row',marginHorizontal:16,marginTop:30,borderBottomWidth:0.6,borderBottomColor:'grey'}}>
           <Text style={{fontSize:18,bottom:6}}>Employee Catt  : </Text>
           <Text style={{fontSize:18,bottom:6,marginLeft:20}}>4567892134</Text>
         </View>
         <View style={{flexDirection:'row',marginHorizontal:16,marginTop:30,borderBottomWidth:0.6,borderBottomColor:'grey'}}>
           <Text style={{fontSize:18,bottom:6}}>Designation  : </Text>
           <Text style={{fontSize:18,bottom:6,marginLeft:20}}>4567892134</Text>
         </View>

         <TouchableOpacity onPress={() => this.props.navigation.navigate('Complains')}
               style = {styles.submitButton}>
               
               <Text style = {styles.submitButtonText}> Previous Complaint </Text>
            </TouchableOpacity>

         {/* <TouchableOpacity
                style = {styles.submitButton}
                onPress={() => this.props.navigation.navigate('Orders')}
                 >

                <Text style = {styles.submitButtonText}> 
पिछले चैट </Text>
             </TouchableOpacity> */}

 
   
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
     top:10,
     height: 50,  borderRadius:10,
  },
  submitButtonText:{
      top:3,
      fontSize:16,
       
     color: 'white',
   
  }
})
