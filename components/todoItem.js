  
import React from 'react'
import {StyleSheet, TouchableOpacity, Text, View , TouchableWithoutFeedback, Keyboard} from 'react-native';
import { MaterialIcons  } from '@expo/vector-icons';

export default function TodoItem({ pressHandler, item }) {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
<View style={styles.item}>
       
        <Text style={styles.itemText}>{item.text}</Text> 
        <MaterialIcons  name='delete' size={18} color='#333' />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: "dashed",
        borderRadius: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:"space-between"
      },
      itemText: {
        marginLeft: 10,
      }
});