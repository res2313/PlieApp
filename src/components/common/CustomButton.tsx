import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';
import COLORS from '../../contants/colors';


const CustomButton = ({title, onPress}: any) => {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.primary,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
  },

  text: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: '600',
  },
});
