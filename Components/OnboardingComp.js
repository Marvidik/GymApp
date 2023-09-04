import { View, Text,StyleSheet,Image } from 'react-native'
import React from 'react'

export default function OnboardingComp({source}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={source}/>
      <View style={styles.mask} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      position: 'relative', // To allow positioning the mask
      width: '100%', // Set your image width
      height: 400, // Set your image height
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover', // To maintain the aspect ratio
    },
    mask: {
      position: 'absolute', // Position the mask relative to the container
      width: 500,
      height: '100%',
      backgroundColor: 'black', // Set the mask color to black
      transform: [{ skewY: '-12deg' }], // Apply skew transformation to create the slant
      top: 349, // Position it at the bottom of the container
    },
  });
  