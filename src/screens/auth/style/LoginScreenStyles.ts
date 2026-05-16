import {StyleSheet, Platform} from 'react-native';
import COLORS from '../../../contants/colors';
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  scroll: {
    flexGrow: 1,
  },

  hero: {
    backgroundColor: COLORS.gray,
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    gap: 50,
  },

  logo: {
    fontSize: 56,
    fontWeight: '400',
    color: '#111',
    fontFamily:
      Platform.OS === 'ios' ? 'Roboto' : 'Roboto',
  },

  logoImage: {
    width: 50,
    height: 50,
    marginTop:40
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
    marginRight: 20,  
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
     marginRight: 20, 
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
    marginHorizontal: 20,
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
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },

  socialFB: {
    backgroundColor: '#0671fd',
    borderColor: '#1877F2',
    paddingTop:10,
    paddingLeft: 10,

  },

  guestWrap: {
    alignSelf: 'flex-end',
  },

  guestText: {
    fontSize: 13,
    color: '#777',
  },
});

export default styles;