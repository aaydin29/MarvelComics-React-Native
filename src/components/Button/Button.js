import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import styles from './Button.style';

const Button = onPress => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button_container}>
      <Text style={styles.button_text}>Login</Text>
    </TouchableOpacity>
  );
};

export default Button;
