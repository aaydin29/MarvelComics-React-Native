import React from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import styles from './Login.style';
import Button from '../../../components/Button/Button';

const initialFormValues = {
  email: '',
  password: '',
};

const Login = ({navigation}) => {
  const handleSign = () => {
    navigation.navigate('Sign');
  };

  const handleFormSubmit = formValues => {
    console.log(formValues);
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/MarvelLogo.png')}
      />
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={styles.input_container}>
              <TextInput
                style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
                placeholder="E-mail"
              />
              <TextInput
                style={styles.input}
                value={values.password}
                onChangeText={handleChange('password')}
                secureTextEntry
                placeholder="Password"
              />
            </View>
            <Button text="Login" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <View style={styles.register_container}>
        <Text style={styles.register_title}>You don't have an account? </Text>
        <TouchableOpacity onPress={handleSign}>
          <Text style={styles.register_button}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
