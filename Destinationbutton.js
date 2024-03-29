import React,{Component} from 'react';
import {StyleSheet, Text, View, Dimensions,TouchableOpacity} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

const WIDTH = Dimensions.get('window').width;

export default class Destinationbutton extends React.Component{
    render(){
    return(
        <TouchableOpacity onPress={()=>{}} style={styles.container}>
            <View style={styles.leftCol}>
    <Text style={{fontSize:8}}>{'\u25A0'}</Text>
            </View>
            <View style={styles.centerCol}>
            <Text style={{fontFamily:'sans-serif',fontSize:21, color:'#545454'}}> Where to? </Text>    
         </View>
                <View style ={styles.rightCol}>
                    <Ionicons name ="md-car" color ="#000000" size={25} style ={{alignSelf:'center'}} />
                </View>
        </TouchableOpacity>
    );
}}
const styles= StyleSheet.create({
    container:{
        zIndex:19,
        position:'absolute',
        flexDirection:'row',
        width: (WIDTH-40),
        height : 60,
        top:110,
        left:20,
        borderRadius:2,
        alignItems:'center' ,
        backgroundColor:'white',
        shadowColor :'#000000',
        elevation:7,
        shadowRadius:5,
        shadowOpacity:1.5       
    },
    leftCol:{
        flex:1,
        alignItems:'center',
    
    },
    centerCol:{
        flex:4
    },
    rightCol:{
            borderLeftWidth :1 ,
            borderColor: '#ededed',
            alignItems:'center'
    },
})