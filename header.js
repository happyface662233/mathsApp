import {colours} from'./colours.js';
import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
console.log(colours.yellow)
const Header = ()=>{
    return(
        <View style={styles.mainHeader}>
            <Text style= {styles.title}>Study You</Text>
        </View>
    )
}
const styles = StyleSheet.create(
    {
    title :{
        fontSize:50,
        color: colours.pink,
    },
    mainHeader:{
        backgroundColor:colours.yellow,
    }
}
)
export default Header;