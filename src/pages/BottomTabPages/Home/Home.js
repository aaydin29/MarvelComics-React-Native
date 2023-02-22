import React from 'react';
import {View, Text} from 'react-native';

import styles from './Home.style';
import MyTabs from '../../TopTabPages/AllTabPages/MyTabs';

const Home = () => {
  return (
    <View style={styles.header_container}>
      <Text style={styles.header_text}>HOME</Text>
      <MyTabs />
    </View>
  );
};

export default Home;
