import React from "react";
import { View, Text,TouchableOpacity } from "react-native";
import dibujar from "./Styles";
import { Task } from "./App";

interface ItemProps{
    item:Task
    markDone:(tarea:Task)=>void;
    deleteFunction:(tarea:Task)=>void;
}


export default function RenderItem({item,markDone,deleteFunction}:ItemProps){
    return(
    <View style={dibujar.taskcontainer}>
      <TouchableOpacity onPress={()=>markDone(item)}>
      <Text 
      style={item.estado ? dibujar.textodone: dibujar.textt}
      >
      {item.Titulo}
      </Text>
      <Text style={dibujar.textt}>
      {new Date(item.fecha).toDateString()}
      </Text>
      </TouchableOpacity>
      {
      item.estado &&
      <TouchableOpacity style={dibujar.removebutton} onPress={()=>deleteFunction(item)}>
        <Text style={dibujar.wtext}>
          Eliminar
        </Text>
      </TouchableOpacity>}
    </View>
  )
  }
 