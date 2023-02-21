import React from 'react';
import {View, TextInput, Image, Text, TouchableOpacity} from 'react-native';
import styles from './Login.style';
import Button from '../../../components/Button/Button';

const Login = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../../../assets/images/MarvelLogo.png')}
      />
      <View style={styles.input_container}>
        <TextInput style={styles.input} placeholder="Enter your e-mail..." />
        <TextInput style={styles.input} placeholder="Enter your password..." />
      </View>
      <Button onPress={null} />
      <View style={styles.register_container}>
        <Text style={styles.register_title}>You dont have an account? </Text>
        <TouchableOpacity>
          <Text style={styles.register_button}>Create</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
