import { View, Text,StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from "@expo/vector-icons"

export default function ButtonComp({style,icon,text,w}) {
    const allstyle=[styles.button,style,{width:w}]
  return (
    <TouchableOpacity>
        <View style={allstyle}>
            <Text style={styles.text}>{text}</Text>
            {icon && <MaterialCommunityIcons name={icon} size={20}/>}
        </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
    button:{
        backgroundColor:"#DBFF33",
        height:50,
        width:185,
        borderRadius:48,
        alignItems:"center",
        justifyContent:"space-between",
        flexDirection:"row",
        paddingHorizontal:40,
    },
    text:{
        fontSize:20,
        paddingRight:10
        
    }
})