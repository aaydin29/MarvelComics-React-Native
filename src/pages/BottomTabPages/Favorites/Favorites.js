import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Favorites.style';

const Favorites = () => {
  const [sliderState, setSliderState] = useState({
    currentPage: 1,
  });

  const switchPage = page => {
    //It is used to make two different impressions inside a page.
    setSliderState({
      currentPage: page,
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header_text}>FAVORITES</Text>
      <View style={styles.menu_container}>
        <TouchableOpacity
          onPress={() => switchPage(1)}
          style={
            sliderState.currentPage === 1
              ? styles.menu_title_selected
              : styles.menu_title
          }>
          <Text style={styles.menu_title}>Characters</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => switchPage(2)}
          style={
            sliderState.currentPage === 2
              ? styles.menu_title_selected
              : styles.menu_title
          }>
          <Text style={styles.menu_title}>Comics</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Favorites;
