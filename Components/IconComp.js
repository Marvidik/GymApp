import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function IconComp({source}) {
  return (
    <View style={styles.icon}>
      <Image style={styles.image} source={source}/>
    </View>
  )
}

const styles = StyleSheet.create({
    icon:{
        height:54,
        width:54,
        borderRadius:54,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"gray",
        overflow:"hidden",
        marginHorizontal:20
    },
    image:{
        height:15,
        width:15
    }
})