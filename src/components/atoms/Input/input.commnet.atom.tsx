import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

interface InputCommnetProps {
  onChangeText?: (text: string) => void;
  value?: string;
}

const InputCommnetAtom = ({onChangeText, value}: InputCommnetProps) => {
  return (
    <TextInput
      placeholder="Enter Comment"
      style={styles.container}
      onChangeText={onChangeText}
      value={value}
    />
  );
};

export default InputCommnetAtom;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
