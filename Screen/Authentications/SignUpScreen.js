import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import AuthenticationComp from '../../Components/AuthenticationComp'
import AnimatedTextInput from '../../Components/TextInputComp'
import IconComp from '../../Components/IconComp'
import ButtonComp from '../../Components/ButtonComp'

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <AuthenticationComp source={require("../../assets/auth2.png")}  text1={"Hello Rookies,"}  color1={"white"} color2="#DBFF33"/>
      </View>
      <View style={styles.box2}>
        <AnimatedTextInput/>
        <AnimatedTextInput/>
        <AnimatedTextInput/>

        <View style={styles.box3}>
          <View style={styles.box4}>
          <IconComp source={require("../../assets/Apple.png")}/>
          <IconComp source={require("../../assets/Google.png")}/>
          </View>
          <ButtonComp text={"Sign Up"} icon={"arrow-right"} style={styles.button} />
        </View>
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
  box3:{
    height:150,
    flexDirection:"row",
    alignSelf:"flex-start",
    position:"relative",
    top:60
    
    
  },
  box4:{
    flexDirection:"row",
    alignSelf:"flex-start",

  },
  button:{
    paddingLeft:20
  },
  text:{
    color:"#DBFF33",
    alignSelf:"flex-end",
    paddingRight:10
  }
})