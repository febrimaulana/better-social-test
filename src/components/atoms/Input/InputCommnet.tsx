import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const InputCommnet = () => {
  return <TextInput placeholder="Enter Comment" style={styles.container} />;
};

export default InputCommnet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
