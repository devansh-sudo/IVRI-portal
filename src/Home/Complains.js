
import React from 'react';
import { View, StyleSheet, Dimensions,Container,StatusBar,
Text,Picker ,Image,TouchableHighlight,Alert,ScrollView,FlatList,Linking,
TouchableOpacity,Title,Caption,Drawer,Avatar,ActivityIndicator } from 'react-native';
import { Assets } from '../assets/index';                         

export default class Complains extends React.Component {
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
          <FlatList
            style={{
              marginHorizontal: 5,
            }}
            data={[
              {
            
                Name: 'Sumit Saxena',
                Mobile:9876543210,
                Address: 'Delapeer Bareilly',
                Division:'Aris Cell',
                Remark:'Completed with the promlem'
              },
              {
                
                Name: 'Sumit Saxena',
                Mobile:9876543210,
                Address: 'Delapeer Bareilly',
                Division:'Aris Cell',
                Remark:'Loss of internet'
              },
              {
             
                Name: 'Sumit Saxena',
                Mobile:9876543210,
                Address: 'Delapeer Bareilly',
                Division:'Aris Cell',
                Remark:'Electricity fault'
              },
              {
                Name: 'Sumit Saxena',
                Mobile:9876543210,
                Address: 'Delapeer Bareilly',
                Division:'Aris Cell',
                Remark:'Completed'
              },
              
            ]}
            vertical
            showsVerticalScrollIndicator={false}
            renderItem={this.renderItem}
            keyExtractor={(item, i) => i.toString()}
          />
        </ScrollView>
        

  
   </View>
   
      );
  }
  renderItem = ({item, index}) => (
    <View style={styles.verticalview}>
      
      <View style={styles.view}>
        <TouchableOpacity>
          <Text style={styles.verticaltext}>{item.Name}</Text>
        </TouchableOpacity>
        
        <Text style={styles.subtitle}>{item.Mobile}</Text>

        <Text style={styles.subtitle}>{item.Address}</Text>
        <Text style={styles.subtitle}>{item.Division}</Text>
        <Text style={styles.subtitle}>{item.Remark}</Text>
        <Text style={{ color: 'black',
                      paddingStart: 5,
                       marginTop: 7,fontWeight:'bold'}}>Completed</Text>

        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:15}}> 
       
        </View>
       
      </View>
    </View>
  );
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
       backgroundColor: '#004d40',
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
