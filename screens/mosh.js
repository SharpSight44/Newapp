import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

function Fire({imageUri}) {
  return (
    <View style={styles.rises}>
   {!imageUri &&  (<AntDesign name="camerao" size={40} color="yellow" />) }
     
    </View>
  )
}



const styles = StyleSheet.create({
  rises:{
    alignItems: 'center',
    backgroundColor: 'pink',
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    width: 100
  }
})

export default Fire