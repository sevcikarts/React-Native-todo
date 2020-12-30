import React, { useState } from "react";
import { StyleSheet, TextInput, Button, View, Alert, TouchableWithoutFeedback, Keyboard } from "react-native";


export default function AddItem({ setTodos }) {
  const [state, setstate] = useState();
  const onchange = (val) => {
    setstate(val);
  };

  const addItem = () => {
    if(state && state.length > 3){
      setTodos(prevTodos => {
        return [
          { text:state, key: Math.random().toString() },
          ...prevTodos
        ];
      });
      setstate("")
    } else {
      Alert.alert('OOPS', 'Musíš zadat minimálně  3 znaky', [
        {text: 'Rotumím', onPress: () => console.log('alert closed') }
      ]);
    }
  };

  return (
    <View style={styles.item}>
      <TextInput
        style={styles.input}
        onChangeText={onchange}
        value={state}
        placeholder="nová poznámka...."
      />
      <Button color="coral" onPress={addItem} title="přidat poznámku"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
 
  input: {
    marginBottom: 10,  
    padding: 8,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
});
