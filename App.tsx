import React from "react";
import { View,Text,TextInput,TouchableOpacity, StyleSheet,Dimensions, FlatList} from "react-native";

const dibujar=StyleSheet.create({
  contenedor:{
    width:'100%',
    padding:20,
  },
  titulo:{
    fontSize:30,
    color:'white',

  },
  txtimp:{
    borderColor:'white',
    borderWidth:1,
    borderRadius:15,
    width:Dimensions.get("screen").width*0.6,
    paddingLeft:"0.025%",
  },
  text:{
    fontSize:17,
    color:'white',
  },
  wtext:{
    fontSize:17,
    color:'black',
  },
  impcontenedor:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:"space-between",
  },
  boton:{
    width:Dimensions.get("screen").width*0.25,
    backgroundColor:"#F8EBAE",
    justifyContent:"center",
    alignItems: "center",
    borderRadius:15,
  },
  tareasconten:{
    paddingVertical:20,
    borderBottomColor: "white",
    borderBottomWidth:1,    
  },
  botontitu:{
    width:100,
  }
})

const Taareas = [
  {
    titulo:"Lavar Baño",
    estado: false,
    fecha: new Date(),
  },
  {
    titulo:"Lavar Loza",
    estado: false,
    fecha: new Date(),
  },
  {
    titulo:"Lavar Ropa",
    estado: false,
    fecha: new Date(),
  },
]

interface Task{
  titulo:String,
  estado:boolean,
  fecha:Date
}

function renderItem({item}:{item:Task}){
  return(
    <View style={dibujar.tareasconten}>
      <TouchableOpacity style={dibujar.botontitu}>
        <Text style={dibujar.text}>{item.titulo}</Text>
      </TouchableOpacity>
      <Text style={dibujar.text}>{item.fecha.toDateString()}</Text>
    </View>  
    )
}

export default function App(){
  return(
    <View style={dibujar.contenedor}>
      <Text style={dibujar.titulo}>
        Hola Johitan
      </Text>
      <View style={dibujar.impcontenedor}>
        <TextInput style={dibujar.txtimp} placeholder="Agregar"/>
        <TouchableOpacity style={dibujar.boton}>
          <Text style={dibujar.wtext}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList data={Taareas} renderItem={renderItem}/>
      </View>
    </View>
  )
}