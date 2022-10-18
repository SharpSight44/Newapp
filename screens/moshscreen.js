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
    <View>
      <Fire imageUri={imageUri} onChangeImage={ (uri)=> setImageUri(uri)}/>
    </View>
  )
}

export default Moshscreen

const styles = StyleSheet.create({})