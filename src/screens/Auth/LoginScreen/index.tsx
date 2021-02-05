import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
import {Formik, useField} from 'formik';
import Input from '@components/inputField';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequest} from '@components/LoginForm/actions';
// import {useSafeAreaInsets} from 'react-native-safe-area-context';
const styles = StyleSheet.create({
  LoginContainer: {
    flex: 1,
  },
  signupBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  textInput: {
    fontSize: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  label: {
    width: 80,
  },
  formContainer: {
    alignItems: 'center',
  },
  loginBtn: {
    marginVertical: 20,
    backgroundColor: 'green',
    borderRadius: 4,
    padding: 5,
    paddingHorizontal: 100,
  },
});

const LoginScreen = () => {
  // const {top} = useSafeAreaInsets();
  const dispatch = useDispatch();
  const {loading} = useSelector((state) => state.LoginForm);

  const onLogin = (email, password) => {
    dispatch(loginRequest({email, password}));
  };
  const navigation = useNavigation();
  const handleSubmitForm = (values) => {
    onLogin(values.email, values.password);
  };
  return (
    <View style={styles.LoginContainer}>
      <Formik
        initialValues={{email: '', password: ''}}
        onSubmit={handleSubmitForm}>
        {({handleSubmit}) => {
          return (
            <View style={styles.formContainer}>
              <View style={styles.userNameContainer}>
                <Text style={styles.label}>User name:</Text>
                <Input formikKey="email" styles={styles.textInput} />
              </View>
              <View style={styles.userNameContainer}>
                <Text style={styles.label}>Password:</Text>
                <Input
                  isPassword
                  formikKey="password"
                  styles={styles.textInput}
                />
              </View>
              <TouchableOpacity onPress={handleSubmit} style={styles.loginBtn}>
                <Text style={{color: 'white'}}> Login</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      </Formik>
      <View style={styles.signupBtn}>
        <Text>Do you have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={{color: 'green'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
