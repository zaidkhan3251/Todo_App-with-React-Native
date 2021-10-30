import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Task = (props) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.itemText}>{props.text}</Text>
      </View>
      <View style={styles.circular}></View>
    </View>
  );
};
export default Task;
const styles = StyleSheet.create({
  item: { 
    backgroundColor: "#860DCC",
    // backgroundColor: "#FC00FF",
    padding: 15,
    borderRadius: 10,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    marginBottom:20,
  },
  itemLeft: {
      flexDirection:"row",
      alignItems:"center",
      flexWrap:"wrap"
  },
  square: {
    width: 24,
    height: 24, 
    backgroundColor: "#000",
    opacity: 0.4,
    borderRadius:5,
    marginRight:15,
    

  },
  itemText: {
      maxWidth:"80%",  
      color:'#fff',
      fontSize:20.
  },
  circular: {
      height:12,
      width:12,
      borderColor:"#000",
      borderWidth:2,
      borderRadius:5
  },
});
