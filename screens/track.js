import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
// import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const MainPage = () => {
 const [items, setItems] = useState([]);
 const [add, setAdd] =useState(false);

 useState(()=>{

  const updated = [{text:"this is all the Text", date:"last visited 11/9/2022", urgent:false}, 
  {text:"Alot of text here", date:"last visited 11/1/2022", urgent:false}, 
  {text:"You Got THIS!!", date:"last visited 11/17/2022", urgent: true}]
  return setItems(updated);

 },[items]);

const handleAddNew = () =>{
return setAdd(true);

};

  return (
    <>
     <View style={{ width:'100%',height:'10%', backgroundColor:'#c3fad3'}}> 
     <TouchableOpacity onPress={handleAddNew}  >
<View style={{margin:15, width:45, height:45, backgroundColor:'#09e34a', justifyContent:'center', alignItems:'center', borderRadius:10}} >
<Text style={{fontSize:50, color:'white', marginTop:-15}}>
  +
</Text>
</View>
</TouchableOpacity>
</View>
    <View style={{backgroundColor:'#30d1e3', height:'75%',  alignItems:'center', zIndex:-2}}>
     { add == true ? (
     <View style={{width:300, height:400, backgroundColor:"yellow"}}> 
     </View> ): (
     <View style={{zIndex:-1, backgroundColor:'rgba(201, 250, 255,.6)', height:'100%', width:'100%'}}>
   {items.map((x,i)=> (
   <View key={i} style={ x?.urgent == true ? (styles.urgent):(styles.menu)} >
   <Text style={{textAlign:"right", padding:5, fontSize:13}}>
    {x?.date}

   </Text>
    <Text style={{paddingLeft:7, paddingBottom:5}}>
      {x?.text}
    </Text>
    </View>
    )
    )}
    </View>
)}</View>
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
     backgroundColor: '#f5fcf5',
     height:100,
     width: '90%',
     borderRadius: 5,
     borderColor:"#d0d6d0",
     borderWidth: 2,
     borderStyle:"solid"

     

    
  }, 
  urgent: {
    margin: 10,
     backgroundColor: '#f5fcf5',
     height:100,
     width: '90%',
     borderRadius: 5,
     borderColor:"red",
     borderWidth: 3,
     borderStyle:"solid"

  }
 
})

