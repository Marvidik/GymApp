import { View, Text,StyleSheet,TouchableOpacity,ScrollView } from 'react-native'
import React, {useState} from 'react'
import CardComp from '../Components/CardComp'

export default function HomeScreen() {
    const list=[
        {
          id:1,
          source:require("../assets/next4.png"),
          text1:"Learn the basics of Training",
          text2:"Week 1"
        },
        {
          id:2,
          source:require("../assets/next3.png"),
          text1:"Learn the basics of Training",
          text2:"Week 2"
        },
        {
          id:3,
          source:require("../assets/next2.png"),
          text1:"Learn the basics of Training",
          text2:"week 3"
        },
      ]

      const list2=[
        {
          id:1,
          source:require("../assets/third.png"),
          text1:"New Training Style",
          text2:"Week 1"
        },
        {
          id:2,
          source:require("../assets/next.png"),
          text1:"Learn the basics of Training",
          text2:"Week 2"
        },
        {
          id:3,
          source:require("../assets/next2.png"),
          text1:"Learn the basics of Training",
          text2:"week 3"
        },
      ]

    const [beginnerBack, setBeginnerBack] = useState('gray');
    const [intermediateBack, setIntermediateBack] = useState('gray');
    const [advancedBack, setAdvancedBack] = useState('gray');
  
    function handleBeginnerClick() {
      setBeginnerBack('#DBFF33');
      setAdvancedBack("gray");
      setIntermediateBack("gray")
    }
  
    function handleIntermediateClick() {
      setIntermediateBack('#DBFF33');
      setBeginnerBack("gray");
      setAdvancedBack("gray");
      
    }
  
    function handleAdvancedClick() {
      setAdvancedBack('#DBFF33');
      setBeginnerBack("gray");
      setIntermediateBack("gray")
    }
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.container}>
    <View style={styles.box1}>
        <Text style={styles.t1}>HELLO SARRAH</Text>
        <Text style={styles.t2}>WELCOME BACK</Text>
    </View>
    <View style={styles.box2}>
        <Text style={styles.t3}>Today Workout Plan</Text>
        <Text style={styles.t4}>Mon 26 Apr</Text>
    </View>
    <CardComp source={require("../assets//next.png")} text1={"Day 01 - WarmUp"} text2={"| 7.00 - 8.00 AM"}/>
    <View style={styles.box2}>
        <Text style={styles.t3}>Workout Categories</Text>
        <Text style={styles.t4}>see all</Text>
    </View>
    <View style={styles.box3}>
            <TouchableOpacity onPress={handleBeginnerClick}>
            <View style={[styles.cat, { backgroundColor: beginnerBack }]}>
            <Text>Beginner</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleIntermediateClick}>
            <View style={[styles.cat, { backgroundColor: intermediateBack }]}>
            <Text>Intermediate</Text>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleAdvancedClick}>
            <View style={[styles.cat, { backgroundColor: advancedBack }]}>
            <Text>Advanced</Text>
            </View>
        </TouchableOpacity>
        </View>
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list.map((item) => (
                <CardComp key={item.id} {...item} />
            ))}
            </ScrollView>
        </View>
        <View style={styles.box2}>
            <Text style={styles.t3}>New WorkOuts</Text>
        </View>
        <View>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {list2.map((item) => (
                <CardComp key={item.id} {...item} />
            ))}
            </ScrollView>
        </View>
    </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({
    container:{
        paddingTop:60,
        backgroundColor:"black",
        flex:1
    },
    t1:{
        color:"white",
        fontSize:42,
        fontWeight:"600"
        
    },
    t2:{
        color:"white",
        fontWeight:"600"
        
    },
    t3:{
        color:"white",
        fontWeight:"600"  ,
        fontSize:17,
    },
    t4:{
        color:"#DBFF33",
        fontWeight:"600"  
    },
    box1:{
        paddingLeft:24
    },
    box2:{
        paddingTop:32,
        paddingLeft:24,
        flexDirection:"row",
        justifyContent:"space-between",
        paddingRight:25,
        alignItems:"center"
    },
    box3:{
        backgroundColor:"gray",
        height:40,
        alignItems:"center",
        flexDirection:"row",
        justifyContent:"space-between",
        width:327,
        alignSelf:"center",
        borderRadius:32,
        marginTop:20
    },
    cat:{
        height:"100%",
        width:"100%",
        alignItems:"center",
        justifyContent:"center",
        flex:1,
        borderRadius:32,
        paddingHorizontal:30
    }
})