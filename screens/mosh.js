import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, Alert } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

function Fire({imageUri, onChangeImage}) {
  const handlePress =() => {
    if (!imageUri)  selectImage();
    else Alert.alert('Delete', 'Are you sure sure ',[{text: 'Yes', onPress: ()=> onChangeImage(null)} ,
    {text: 'No'}])

  }
  const selectImage =async () => {
    try {
      const results = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.5
      });
      if (!results.cancelled)
        onChangeImage(results.uri);
    } catch (error) {
      console.log("error readin image", error);
    }
   }
  return (
    <TouchableWithoutFeedback onPress={handlePress}>
    <View style={styles.rises}>
   {!imageUri &&  (<AntDesign name="camerao" size={53} color="#820443" />) }
   {imageUri && <Image style={styles.image} source={{ uri: imageUri }} />}
     
    </View>
    </TouchableWithoutFeedback>
  )
}



const styles = StyleSheet.create({
  rises:{
    alignItems: 'center',
    backgroundColor: '#f5aed1',
    borderRadius: 15,
    height: 100,
    justifyContent: 'center',
    width: 100,
    overflow:"hidden"
  },
  image: {
    width: '100%',
    height:'100%',
  
  }
})

export default Fire