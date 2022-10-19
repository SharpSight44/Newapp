import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import Fire from './mosh';

const Moshscreen = () => {
  const [imageUri, setImageUri] = useState();
 useEffect(()=>{
  const fn = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert('You need to enable permissions Pretty please')
};
fn(); 
 },[]);


  return (
    <View style={{backgroundColor:'#b6e6a5', height:'100%', alignItems:'center', justifyContent:'center'}}>
      <Fire imageUri={imageUri} onChangeImage={ (uri)=> setImageUri(uri)}/>
      <Text style={{color:'#820443', marginTop:20}}> Yes Yes Guess Who's on third</Text>
    </View>
  )
}

export default Moshscreen

const styles = StyleSheet.create({})