import React from 'react';
import {
  TextInput,
  StyleSheet,
} from 'react-native';
import COLORS from '../../contants/colors';


const CustomInput = ({
  placeholder,
  value,
  onChangeText,
}: any) => {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      placeholderTextColor={COLORS.gray}
      style={styles.input}
    />
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    padding: 14,
    marginVertical: 8,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
});