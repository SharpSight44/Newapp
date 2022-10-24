import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import * as ImagePicker from 'expo-image-picker';
import Fire from './mosh';
import ImageInputlist from './manyImages';

const Moshscreen = () => {
  const [imageUris, setImageUris] = useState([]);
 useEffect(()=>{
  const fn = async () => {
    const result = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (!result.granted)
      alert('You need to enable permissions Pretty please')
};
fn(); 
 },[]);

const handleAdd = uri => {
  setImageUris([...imageUris, uri])
};
const handleRemove = uri => {
  setImageUris(imageUris.filter(x => x !== uri));
};

  return (
    <View style={{backgroundColor:'#50a2a3',  alignItems:'center', justifyContent:'center', height:'100%'}}>
      <Text style={{color:'#f57ad4', marginTop:20, marginBottom:15, fontSize: 25, fontWeight: 'bold'}}> Pick your Best Pic</Text>
      <ImageInputlist imageUris={imageUris} onAddImage={handleAdd} onRemoveImage={handleRemove} />
    </View>
  )
}

export default Moshscreen

const styles = StyleSheet.create({})