import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
  Platform,
  Image,
} from 'react-native';

import { useDispatch } from 'react-redux';

import Toast from 'react-native-toast-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { loginUser } from '../../redux/thunk/authThunk';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import COLORS from '../../contants/colors';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('testpracticaluser001@mailinator.com');
  const [password, setPassword] = useState('Test@123');
  const [showPassword, setShowPassword] = useState(false);
  // const onLogin = async () => {
  //   const response = await dispatch(
  //     loginUser({
  //       email,
  //       password,
  //     }) as any,
  //   );

  //   if (response?.payload?.success) {
  //     const token = response?.payload?.data?.token;

  //     await AsyncStorage.setItem('token', token);
  //     Toast.show({
  //       type: 'success',
  //       text1: 'Login Success',
  //       text2: response?.payload?.message,
  //     });
  //     console.log('USER:', response?.payload?.data?.user);
  //     console.log('TOKEN:', response?.payload?.data?.token);
  //     navigation.navigate('Main', {
  //       event: response?.payload?.data,
  //     });
  //   } else {
  //     Toast.show({
  //       type: 'error',
  //       text1: 'Login Failed',
  //       text2: response?.payload?.message,
  //     });
  //   }
  // };
const onLogin = async () => {
  try {
    const resultAction = await dispatch(
      loginUser({
        email,
        password,
      }) as any,
    );

    console.log('RESULT ACTION => ', resultAction);

   if (loginUser.fulfilled.match(resultAction)) {
  Toast.show({
    type: 'success',
    text1: 'Login Success',
    text2: resultAction.payload?.message,
  });

  navigation.navigate('Main');
}
    else {
      Toast.show({
        type: 'error',
        text1: 'Login Failed',
        text2:
          resultAction?.payload?.message || 'Invalid email or password',
      });
    }
  } catch (error) {
    console.log('LOGIN FUNCTION ERROR => ', error);
  }
};
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="dark-content" backgroundColor="#0000" />
      <ScrollView
        bounces={false}
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.hero}>
          <Text style={styles.logo}>Plie&#772;</Text>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logoImage}
            resizeMode="contain"
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.fieldLabel}>Email</Text>
          <CustomInput
            placeholder="email@email.com"
            value={email}
            onChangeText={setEmail}
          />
          <Text style={styles.fieldLabel}>Password</Text>
          <CustomInput
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity style={styles.forgotWrap}>
            <Text style={styles.forgot}>Forgot Password?</Text>
          </TouchableOpacity>
          <CustomButton title="Sign In" onPress={onLogin} />

          <View style={styles.signUpRow}>
            <Text style={styles.signUpText}>Not a member?</Text>

            <TouchableOpacity>
              <Text style={styles.signUpLink}>Sign Up Here</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dividerRow}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>or Sign In with:</Text>
            <View style={styles.dividerLine} />
          </View>
          <View style={styles.socialRow}>
            <TouchableOpacity style={styles.socialBtn}>
              <FontAwesome name="google" size={20} color="#070707" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialBtn}>
              <Ionicons name="logo-apple" size={20} color="#111" />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.socialBtn, styles.socialFB]}>
              <FontAwesome name="facebook" size={30} color="#FFF" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.guestWrap}>
            <Text style={styles.guestText}>Enter as Guest</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#E0E0E0',
  },

  scroll: {
    flexGrow: 1,
  },

  hero: {
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
    height: 360,
    gap: 50,
  },

  logo: {
    fontSize: 56,
    fontWeight: '400',
    color: '#111',
    fontFamily: Platform.OS === 'ios' ? 'Roboto' : 'Roboto',
  },

  logoImage: {
    width: 50,
    height: 50,
  },

  form: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 22,
    paddingTop: 24,
    paddingBottom: 20,
  },

  fieldLabel: {
    fontSize: 15,
    color: '#111',
    marginBottom: 5,
    marginHorizontal: 20,
  },

  forgotWrap: {
    alignSelf: 'flex-end',
    marginTop: 6,
    marginBottom: 20,
  },

  forgot: {
    fontSize: 13,
    color: '#555',
  },

  signUpRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 10,
    marginBottom: 35,
  },

  signUpText: {
    fontSize: 12,
    color: '#555',
  },

  signUpLink: {
    fontSize: 12,
    color: '#333',
    textDecorationLine: 'underline',
    marginLeft: 4,
  },

  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 20,
  },

  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#DDD',
  },

  dividerText: {
    fontSize: 13,
    color: '#999',
  },

  socialRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 40,
    marginTop: 25,
  },

  socialBtn: {
    width: 45,
    height: 45,
    borderRadius: 5,

    borderColor: '#E5E5E5',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',

    elevation: 5,

    shadowColor: '#000',
  },

  socialLetter: {
    fontSize: 24,
    fontWeight: '700',
    color: '#111',
  },

  socialFB: {
    backgroundColor: '#1877F2',
    borderColor: '#1877F2',
  },

  socialFBText: {
    color: '#FFF',
  },

  guestWrap: {
    alignSelf: 'flex-end',
  },

  guestText: {
    fontSize: 13,
    color: '#777',
  },
});
