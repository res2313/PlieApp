import React, { useState } from 'react';

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
  Image,
} from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { loginUser } from '../../redux/thunk/authThunk';
import CustomInput from '../../components/common/CustomInput';
import CustomButton from '../../components/common/CustomButton';
import { useNavigation } from '@react-navigation/native';
import styles from './style/LoginScreenStyles';
const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const [email, setEmail] = useState('testpracticaluser001@mailinator.com');
  const [password, setPassword] = useState('Test@123');
  const [showPassword, setShowPassword] = useState(false);
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
      } else {
        Toast.show({
          type: 'error',
          text1: 'Login Failed',
          text2: resultAction?.payload?.message || 'Invalid email or password',
        });
      }
    } catch (error) {
      console.log('LOGIN FUNCTION ERROR => ', error);
    }
  };
  return (
    <SafeAreaView style={styles.safe} edges={['bottom']}>
      <StatusBar barStyle="dark-content" backgroundColor="#E0E0E0" />
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
            secureTextEntry
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
              <FontAwesome name="facebook" size={40} color="#FFF" />
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
