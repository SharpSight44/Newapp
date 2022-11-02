import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'


const MainPage = () => {



  return (
    <>
     <View style={{ width:'100%',height:'10%', backgroundColor:'#c3fad3'}}> 
<View style={{width:20,height:20, backgroundColor:'09e34a'}}>
<Text style={{}}>
  +
</Text>
</View>
</View>
    <View style={{backgroundColor:'#50a2a3', height:'75%',  alignItems:'center'}}>
    <View style={styles.menu}> 
    </View>
    <View style={styles.menu}> 
    </View>
    <View style={styles.menu}> 
    </View>
    <View style={styles.menu}> 
    </View>
    </View>
    <View style={{ width:'100%',height:'15%', backgroundColor:'#f2dc9d'}}> 

    </View>
    </>
  )
}

export default MainPage

const styles = StyleSheet.create({
  menu: {
     margin: 10,
     backgroundColor: '#ffffff',
     height:100,
     width: '90%'

    
  }
})