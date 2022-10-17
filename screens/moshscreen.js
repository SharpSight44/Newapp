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
 const selectImage =async () => {
  try {
    const results = await ImagePicker.launchImageLibraryAsync();
    if (!results.cancelled)
      setImageUri(results.uri);
  } catch (error) {
    console.log("error readin image", error);
  }
 }

  return (
    <View>
      
      <Button title="select image" onPress={selectImage}/>
      <Image source={{uri: imageUri}} style={{ width:200, height: 200}}  />
      <Fire />
    </View>
  )
}

export default Moshscreen

const styles = StyleSheet.create({})