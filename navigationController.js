import react from 'react';
import React, { useState, useReducer } from 'react';
import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native';
import screens from './screens'
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
import {colours} from'./colours.js';
let len = screens.length;
const NavControl = ()=>{
    const [counterKey, setCounterKey] = useReducer(c => c + 1, 0)
    const [currentScreenIdex, setCurrentScreen] =react.useState(0);

    let Screen = screens[currentScreenIdex]
    console.log(windowWidth/len)
    return(
        <View>
            <View style = {styles.win}>
            <Screen.screenItem/>
            </View>
            <View style = {styles.nave}> 
            <Text>I AM A NAV CONTROLLER</Text>
           <View style={styles.buttonHolder}>
            {screens.map((screen,index)=>(
                    
                    <TouchableOpacity style={styles.button} key = {index} onPress = {()=>{
                        setCurrentScreen(index)
                        screen = screens[currentScreenIdex]
                    }}>
                        
                        <Image
                            style={styles.tinyLogo}
                            source={screen.imageDir}
                         />
                    </TouchableOpacity>
                ))} 
                </View>
            
            </View>
        </View>
        
);}


const styles = StyleSheet.create({
    text: {
        fontFamily: 'Times New Roman',
        fontSize: 50,
        color: 'white',
        fontWeight: "bold",

    },
    nav:{
    
        position:'absolute',
        bottom:0,
        left:0
        },
    win:{
        paddingBottom: windowHeight*0.8,
        backgroundColor: colours.green
    },
    tinyLogo: {
        width: 50,
        height: 50,
      },
    button:{
        flex:1,
        paddingLeft: (1/3)*windowWidth
    },
    buttonHolder:{
        borderWidth:'2px',
        borderStyle: 'groove',
        flexDirection:"row"
        
    }
        
    

});
export default NavControl;