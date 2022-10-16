import { StyleSheet, Text, View , ImageBackground, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {AntDesign} from '@expo/vector-icons';

export default function WelcomeScreen() {
  return (
    <>
    <ImageBackground blurRadius={3} style={styles.background} source={{uri:"https://wallpaperaccess.com/full/1099071.jpg"}}>
     <View style={styles.logoHouse}>
      <Image style={styles.logo}source={{uri:"https://seeklogo.com/images/M/miami-beach-logo-C677AF8447-seeklogo.com.png"}}/>
    
      </View> 
      <TouchableOpacity>
        <View style={styles.login}> 
      <Text style={styles.loginText}> Login   <AntDesign name="login" size={26} color="white" /></Text>
      
      </View>
      </TouchableOpacity>
      
        <TouchableOpacity>
      <View style={styles.register}> 
      <Text style={styles.registerText}> Register   <AntDesign name="adduser" size={26} color="white" /></Text>
      </View></TouchableOpacity>
      
    </ImageBackground>

    </>
  )
}

const styles = StyleSheet.create({
  background:{
    flex:1,
    justifyContent:"flex-end",
  

  },
  login:{
    width: 200,
    height: 70,
    backgroundColor: '#fc5c65',
    alignSelf:"center",
    borderRadius: 15,
    marginBottom:10,
    borderColor:'white',
    borderWidth: 3


  },
  loginText:{
    fontSize: 25,
    color:'white',
    alignSelf:"center",
    marginTop:10,
    fontWeight:"bold",
  
  

  },

  register:{
    width: 200,
    height: 70,
    backgroundColor: '#4ecdc4',
    alignSelf:"center",
    borderRadius: 15,
    marginBottom:10,
    borderColor:'white',
    borderWidth: 3,
    

  },
  registerText:{
    fontSize: 25,
    color:'white',
    alignSelf:"center",
    marginTop:10,
    fontWeight:"bold"

  },
  
  logoHouse:{
    position:"absolute",
    top: 70,
    left:150
   

  },
  logo:{
    width:80,
    height:80
    

  },

})