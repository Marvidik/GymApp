import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function CardComp({source,text1,text2}) {
  return (
    <View style={styles.container}>
        <Image style={styles.image} source={source}/>
        <Text style={styles.t1}>{text1}</Text>
        <Text style={styles.t2}>{text2}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        height:200,
        width:327,
        alignSelf:"center",
        paddingTop:24,
        borderRadius:170,
        paddingHorizontal:10
    },
    image:{
        height:"100%",
        width:"100%",
        overflow:"hidden",
        borderRadius:16
    },
    t1:{
        color:"white",
        alignSelf:"flex-start",
        paddingLeft:10,
        bottom:80,
        fontSize:27,
        fontWeight:"600", 
    },
    t2:{
        color:"#DBFF33",
        alignSelf:"flex-start",
        paddingLeft:10,
        bottom:80,
        fontSize:27,
        fontWeight:"600", 
    }
})