import { StyleSheet, Text, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

const MainPage = () => {



  return (
    <>
     <View style={{ width:'100%',height:'10%', backgroundColor:'#c3fad3'}}> 
<View style={{margin:15, width:45, height:45, backgroundColor:'#09e34a', justifyContent:'center', alignItems:'center', borderRadius:10}}>
<Text style={{fontSize:50, color:'white', marginTop:-15}}>
  +
</Text>
</View>
</View>
    <View style={{backgroundColor:'#50a2a3', height:'75%',  alignItems:'center', zIndex:-2}}>
      <View style={{zIndex:-1, backgroundColor:'rgba(1,1,1,.7)', height:'100%', width:'100%'}}>
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
    </View>
    <View style={{ width:'100%',height:'15%', backgroundColor:'#7db0e3', flexDirection:'row'}}> 
<View style={{margin:15, width:45, height:45, backgroundColor:'#fcd703', justifyContent:'center', alignItems:'center', borderRadius:10}}>
<AntDesign name="folderopen" size={30} color="#121252" />
</View>
<View style={{margin:15, width:45, height:45, backgroundColor:'#fcd703', justifyContent:'center', alignItems:'center', borderRadius:10}}>
<AntDesign name="folderopen" size={30} color="#121252" />
</View>
<View style={{margin:15, width:45, height:45, backgroundColor:'#fcd703', justifyContent:'center', alignItems:'center', borderRadius:10}}>
<AntDesign name="folderopen" size={30} color="#121252" />
</View>
<View style={{margin:15, width:45, height:45, backgroundColor:'#fcd703', justifyContent:'center', alignItems:'center', borderRadius:10}}>
<AntDesign name="folderopen" size={30} color="#121252" />
</View>
<View style={{margin:15, width:45, height:45, backgroundColor:'#fcd703', justifyContent:'center', alignItems:'center', borderRadius:10}}>
<AntDesign name="addfolder" size={30} color="#121252" />
</View>
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
     borderRadius: 5
     

    
  }, 
 
})
