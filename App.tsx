import React from "react";
import {View,Text,StyleSheet, TextInput} from "react-native";

const stilo = StyleSheet.create({

  contenedor:{
    width:'80%',
    height: '50%',
    padding:20,
    marginLeft:'10%',
    marginRight:'10%',
    marginTop:'10%',
    backgroundColor:"green",
    justifyContent:"flex-end",
    alignItems:"flex-end",
    marginHorizontal: '10%'
  },
  titulos:{
    fontSize:20,
    color:"White",
  },
  teinp:{
    fontSize:30,
  }
})

export default function App(){

  return(
      <View style={stilo.contenedor}>
            <Text style={stilo.titulos}>Wuenas sunguita</Text>
            <View>
                <TextInput style={stilo.teinp} placeholder="Agregar"/>
            </View>
      </View>
      
  )
}