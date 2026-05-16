import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import COLORS from '../../contants/colors';

interface Props {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
}

const CustomInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}: Props) => {
  const [hidePassword, setHidePassword] =
    useState(secureTextEntry);

  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        placeholderTextColor={COLORS.gray}
        secureTextEntry={hidePassword}
        style={styles.input}
      />

      {secureTextEntry && (
        <TouchableOpacity
          style={styles.eyeButton}
          onPress={() =>
            setHidePassword(!hidePassword)
          }>
          <Ionicons
            name={
              hidePassword
                ? 'eye-off-outline'
                : 'eye-outline'
            }
            size={22}
            color={COLORS.black}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default CustomInput;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    marginHorizontal: 20,
    position: 'relative',
    justifyContent: 'center',

    backgroundColor: COLORS.white,
    borderRadius: 10,

    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },

  input: {
    padding: 12,
    paddingRight: 45,
    color: COLORS.black,
  },

  eyeButton: {
    position: 'absolute',
    right: 15,
  },
});