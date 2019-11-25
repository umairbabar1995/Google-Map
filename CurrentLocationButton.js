import React,{Component} from 'react';
import {StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

export default class CurrentLocationButton extends React.Component{
  render(){
    const cb = this.props.cb ? this.props.cb : ()=> console.log('Callback function not passed to CurrentLocation');
    const bottom = this.props.bottom ? this.props.bottom : 130 ;
return(
    <View style={ [styles.container, {top:HEIGHT - bottom}]}>
    <MaterialIcons 
    name ="my-location"
    color="#000000"
    size={25}
    onPress ={() => {cb() }} />
    </View>
  )
}
}
const styles = StyleSheet.create({
   container:{
     zIndex:9,
     position:'absolute',
     width:45,
     height : 45,
     backgroundColor:'white',
     left:WIDTH-70,
     borderRadius:50,
     shadowColor:'#000000',
     elevation:7,
     shadowRadius:3,
     shadowOpacity:1.0,
     justifyContent: 'space-around',
     alignItems:'center',
   }
 })