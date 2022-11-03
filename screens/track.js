import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'


const MainPage = () => {



  return (
    <>
     <View style={{ width:'100%',height:'10%', backgroundColor:'#c3fad3'}}> 
<View style={{width:45, height:45, backgroundColor:'#09e34a', justifyContent:'center', alignItems:'center'}}>
<Text style={{fontSize:50}}>+
</Text>
</View>
</View>
    <View style={{backgroundColor:'#50a2a3', height:'75%',  alignItems:'center'}}>
    <View style={styles.menu}> 
    <Text style={{textAlign:'right'}}>
    Last Visited 11/2/2022
      </Text>
    <Text>
      Wednesday {'\n'}
      1. I have to create my million dollar App {'\n'}
      2. I Get to PLay VR {'\n'}
      3. Make sure to go to sleep on time 
    </Text>
    </View>
    <View style={styles.menu}> 
    <Text style={{textAlign:'right'}}>
    Last Visited 11/2/2022
      </Text>
    <Text>
  
      Wednesday {'\n'}
      1. I have to create my million dollar App {'\n'}
      2. I Get to PLay VR {'\n'}
      3. Make sure to go to sleep on time 
    </Text>
    </View>
    <View style={styles.menu}> 
      <Text style={{textAlign:'right'}}>
    Last Visited 11/2/2022
      </Text>
    <Text  >
      Wednesday {'\n'}
      1. I have to create my million dollar App {'\n'}
      2. I Get to PLay VR {'\n'}
      3. Make sure to go to sleep on time 
      
   
    </Text>
    </View>
    <View style={styles.menu}> 
    <Text style={{textAlign:'right'}}>
    Last Visited 11/2/2022
      </Text>
    <Text>
      Wednesday {'\n'}
      1. I have to create my million dollar App {'\n'}
      2. I Get to PLay VR {'\n'}
      3. Make sure to go to sleep on time 
    </Text>
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
     width: '90%',
     

    
  }, 
 
})