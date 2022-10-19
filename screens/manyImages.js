import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Fire from './mosh'


export default function ImageInputlist({imageUris = [], onRemoveImage, onAddImage}) {
  return (
    <View style={{flexDirection:'row'}}>
      {imageUris.map( (x,i) => (<Fire key={i} imageUri={x} onChangeImage={()=> onRemoveImage(x)}/>))}
      <Fire onChangeImage={(z)=> onAddImage(z)} />
    </View>
  )
}

const styles = StyleSheet.create({})