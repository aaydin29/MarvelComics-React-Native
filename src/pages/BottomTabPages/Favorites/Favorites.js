import React from 'react';
import {View, Text} from 'react-native';
import styles from './Favorites.style';

const Favorites = () => {
  return (
    <View style={styles.header_container}>
      <Text style={styles.header_text}>FAVORITES</Text>
    </View>
  );
};

export default Favorites;
