import { View, Text ,StyleSheet,Image} from 'react-native'
import React from 'react'

export default function IconTextComp({source}) {
  return (
    <View style={styles.container}>
    <Image style={styles.image} source={source}/>
      <Text>IconTextComp</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        width:86,
        height:29,

    }
})