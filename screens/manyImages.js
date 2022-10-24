import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useRef } from 'react'
import Fire from './mosh'


export default function ImageInputlist({imageUris = [], onRemoveImage, onAddImage}) {
  const scrollView = useRef();
  return (
    <ScrollView 
    
     ref={scrollView} 
     horizontal
     onContentSizeChange={() => scrollView.current.scrollToEnd() }>
    <View style={{flexDirection:'row'}}>
      {imageUris.map( (x,i) => (
      <View key={i} style={{marginRight:10}}>
        <Fire   imageUri={x} onChangeImage={()=> onRemoveImage(x)}/>
         </View>))}
      <Fire onChangeImage={(z)=> onAddImage(z)} />
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})