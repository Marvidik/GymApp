import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import AuthenticationComp from '../../Components/AuthenticationComp'
import AnimatedTextInput from '../../Components/TextInputComp'

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <AuthenticationComp source={require("../../assets/auth1.png")} source2={require("../../assets/59.png")} text1={"Welcome Back"} text2={"Sarrah"} color1={"#DBFF33"} color2="white"/>
      </View>
      <View style={styles.box2}>
        <AnimatedTextInput/>
        <AnimatedTextInput/>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

    container:{
      backgroundColor:"black",
      justifyContent:"center",
      
    },
   
    box2:{
      backgroundColor:"black",
      justifyContent:"center",
      alignItems:"center",
      height:400
     
  },
})