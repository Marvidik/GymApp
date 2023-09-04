import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import OnboardingComp from '../Components/OnboardingComp';
import ButtonComp from '../Components/ButtonComp';

export default function OnboardingScreen() {
  return (
    <Swiper style={styles.wrapper} dotColor='gray' activeDotColor='#DBFF33' activeDotStyle={styles.active} dotStyle={styles.dot} >
       
        <View style={styles.box2}>
            <OnboardingComp source={require("../assets/image1.png")}/>
            <View style={styles.box2}>
                <Text style={styles.text1}>MEET YOUR COACH</Text>
                <Text style={styles.text2}> START YOUR JOURNEY</Text>
            </View>
        </View>
          
        <View style={styles.box2}>
        <OnboardingComp source={require("../assets/image.png")}/>
        <View style={styles.box2}>
            <Text style={styles.text1}>CREATE A WORK OUT PLAN</Text>
            <Text style={styles.text2}> TO STAY FIT</Text>
        </View>
        </View>
        <View style={styles.box2}>
        <OnboardingComp source={require("../assets/image3.png")}/>
        <View style={styles.box2}>
            <Text style={styles.text1}>ACTION IS THE KEY</Text>
            <Text style={styles.text2}>TO ALL SUCCESS</Text>
        </View>
        <ButtonComp text={"Start Now"} icon={"arrow-right"} style={styles.button}/>
        </View>
      </Swiper>
    
  )
}

const styles = StyleSheet.create({
    active:{
        width:30,
        height:4
    },
    button:{
        marginBottom:100
    },
    dot:{
        width:15,
        height:4
    },
    wrapper: {
        backgroundColor:"#1A17171E"
    },
    box2:{
        flex:1,
        backgroundColor:"black",
        justifyContent:"center",
        alignItems:"center",
       
    },
   
    text1:{
        color:"#DBFF33",
        fontSize:24,
        fontWeight:"500",
        
        
        
    },
    text2:{
        color:"white",
        fontSize:24,
        fontWeight:"900",
        marginBottom:80
    }
})