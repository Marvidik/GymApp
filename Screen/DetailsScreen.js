import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import IconComp from '../Components/IconComp'

export default function DetailsScreen() {
  return (
    <View style={styles.container }>
      <View style={styles.box1}>
        <Image style={styles.image} source={require("../assets//third.png")}/>
        </View>
        <View style={styles.box2}>
        <Text style={styles.text1}>Day  01  -   Warm Up</Text>
        <Text style={styles.text2}>D4 Workout for beginers</Text>
        </View>
        <IconComp style={styles.icon} source={require("../assets//next.png")}/>
        <View></View>
      
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1
  },
  image:{
    height:356
  },
  box2:{
    backgroundColor:"black",
    borderRadius:40,
    bottom:45,
    height:500
  },
  icon:{
    bottom:800
  },
  text1:{
    color:"white",
    paddingLeft:30,
    paddingTop:20,
    fontSize:20
  },
  text2:{
    color:"#DBFF33",
    paddingLeft:30,
    paddingTop:5,
    fontSize:15

  }
        
})