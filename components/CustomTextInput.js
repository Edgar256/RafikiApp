import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

export default function CustomTextInput(props) {
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        onChangeText={props.onChangeText}
        placeholder={props.placeholder}
        secureTextEntry={props.secureTextEntry}
        disabled={props.disabled}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  input: {
    height: 40,
    margin: 0,
    borderBottomWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomColor: '#737272',
  },
});
