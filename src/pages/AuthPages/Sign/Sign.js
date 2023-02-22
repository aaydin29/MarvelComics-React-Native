import React from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';

import styles from './Sign.style';
import Button from '../../../components/Button/Button';

const initialFormValues = {
  email: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const handleBackLogin = () => {
    navigation.goBack();
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
                secureTextEntry
                style={styles.input}
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
              />
              <TextInput
                secureTextEntry
                style={styles.input}
                value={values.repassword}
                onChangeText={handleChange('repassword')}
                placeholder="Confirm password"
              />
            </View>
            <Button text="Register" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <View style={styles.register_container}>
        <Text style={styles.register_title}>Already have an account? </Text>
        <TouchableOpacity onPress={handleBackLogin}>
          <Text style={styles.register_button}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Sign;
