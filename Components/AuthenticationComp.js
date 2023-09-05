import { View, Text ,StyleSheet,Image,TouchableHighlight} from 'react-native'
import React from 'react'

export default function AuthenticationComp({source,source2,text1,text2,color1,color2}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source}/>
      <View style={styles.decisions}>
        <TouchableHighlight style={styles.decisions} onPress={()=> alert("amanda clicked me")}>
                <Text style={[styles.text3,{color:color1}]}>Login</Text>
        </TouchableHighlight>

        </View>
        <View style={styles.decisions2}>
        <TouchableHighlight style={styles.decisions} onPress={()=> alert("uncle ebube clicked me")}>
                <Text style={[styles.text3,{color:color2}]}>SignUp</Text>
        </TouchableHighlight>
        
        </View>
      { source2 && <Image style={styles.image2} source={source2}/>}
      <View style={styles.tet}>
        <Text style={styles.text}>{text1}</Text>
        <Text style={styles.text}>{text2}</Text>
      </View>
      <View style={styles.mask} />  
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        width:375,
        height:463,
    },
    image:{
        width:"100%",
        height:"100%",
        opacity:0.65
    },
    image2:{
        height:50,
        width:50,
        position:"absolute",
        top:47,
        right:35,
        borderRadius:50
    },
    mask: {
        position: 'absolute', // Position the mask relative to the container
        width: 500,
        height: '100%',
        backgroundColor: 'black', // Set the mask color to black
        transform: [{ skewY: '-12deg' }], // Apply skew transformation to create the slant
        top: 349, // Position it at the bottom of the container
      },
      text:{
        color:"white",
        alignSelf:"flex-start",
        fontSize:36,
        fontWeight:"600"

      },
      text3:{
        color:"white",
        alignSelf:"flex-start",
        fontSize:15,
        fontWeight:"600"
      }
      ,
      tet:{
        position:"absolute",
        top:250,
        left:70
      },
      decisions:{
        position:"absolute",
        top:33,
        left:12
      },
      decisions2:{
        position:"absolute",
        top:33,
        left:52
      },
      liner:{
        width:20,
        backgroundColor:"blue",
        position:"absolute",
        top:33,
        left:12
      },
})